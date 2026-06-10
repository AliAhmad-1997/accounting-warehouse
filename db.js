// ============================================================
// db.js — منطق SQLite الكامل لبرنامج المحاسبة والمستودعات
// يُستخدم من main.js فقط (process الرئيسي)
// ============================================================

const path = require('path');
const fs   = require('fs');

let db = null; // better-sqlite3 instance

// ============================================================
// فتح / إنشاء قاعدة البيانات
// ============================================================
function openDatabase(userDataPath) {
  if (!fs.existsSync(userDataPath)) {
    fs.mkdirSync(userDataPath, { recursive: true });
  }

  const Database = require('better-sqlite3');
  const dbPath = path.join(userDataPath, 'data.db');
  db = new Database(dbPath);

  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');

  createTables();
  migrateSchema(); // ✅ ترقية الـ schema تلقائياً
  return dbPath;
}

// ============================================================
// إنشاء الجداول
// ============================================================
function createTables() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS company (
      key   TEXT PRIMARY KEY,
      value TEXT
    );

    CREATE TABLE IF NOT EXISTS exchange (
      key   TEXT PRIMARY KEY,
      value TEXT
    );

    CREATE TABLE IF NOT EXISTS invoice_counters (
      key   TEXT PRIMARY KEY,
      value INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS items (
      id            TEXT PRIMARY KEY,
      name          TEXT,
      type          TEXT,
      unit          TEXT,
      unit2         TEXT,
      factor        REAL DEFAULT 1,
      cost          REAL DEFAULT 0,
      price         REAL DEFAULT 0,
      minStock      REAL DEFAULT 0,
      barcode       TEXT DEFAULT '',
      priceCurrency TEXT DEFAULT 'USD'
    );

    CREATE TABLE IF NOT EXISTS customers (
      id      TEXT PRIMARY KEY,
      name    TEXT,
      phone   TEXT,
      address TEXT
    );

    CREATE TABLE IF NOT EXISTS suppliers (
      id      TEXT PRIMARY KEY,
      name    TEXT,
      phone   TEXT,
      address TEXT
    );

    CREATE TABLE IF NOT EXISTS sales_invoices (
      number       TEXT PRIMARY KEY,
      date         TEXT,
      customerName TEXT,
      subtotal     REAL DEFAULT 0,
      discount     REAL DEFAULT 0,
      total        REAL DEFAULT 0,
      currency     TEXT DEFAULT 'USD',
      usdToOld     REAL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS sales_lines (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      invoiceNumber TEXT REFERENCES sales_invoices(number) ON DELETE CASCADE,
      itemId        TEXT,
      qty           REAL DEFAULT 0,
      price         REAL DEFAULT 0,
      total         REAL DEFAULT 0,
      unitType      TEXT DEFAULT 'unit'
    );

    CREATE TABLE IF NOT EXISTS purchase_invoices (
      number       TEXT PRIMARY KEY,
      date         TEXT,
      supplierName TEXT,
      total        REAL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS purchase_lines (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      invoiceNumber TEXT REFERENCES purchase_invoices(number) ON DELETE CASCADE,
      itemId        TEXT,
      qty           REAL DEFAULT 0,
      price         REAL DEFAULT 0,
      total         REAL DEFAULT 0,
      unitType      TEXT DEFAULT 'unit'
    );

    CREATE TABLE IF NOT EXISTS returns (
      number TEXT PRIMARY KEY,
      type   TEXT,
      date   TEXT,
      party  TEXT,
      total  REAL DEFAULT 0,
      note   TEXT
    );

    CREATE TABLE IF NOT EXISTS return_lines (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      returnNumber  TEXT REFERENCES returns(number) ON DELETE CASCADE,
      itemId        TEXT,
      qty           REAL DEFAULT 0,
      price         REAL DEFAULT 0,
      total         REAL DEFAULT 0,
      unitType      TEXT DEFAULT 'unit'
    );

    CREATE TABLE IF NOT EXISTS customer_payments (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      customerName TEXT,
      amount       REAL DEFAULT 0,
      note         TEXT,
      date         TEXT
    );

    CREATE TABLE IF NOT EXISTS supplier_payments (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      supplierName TEXT,
      amount       REAL DEFAULT 0,
      note         TEXT,
      date         TEXT
    );
  `);
}

// ============================================================
// ✅ ترقية الـ schema — يضيف الأعمدة الناقصة لقواعد البيانات القديمة
// ============================================================
function migrateSchema() {
  const migrations = [
    { table: 'items',          column: 'barcode',       def: "TEXT DEFAULT ''" },
    { table: 'items',          column: 'priceCurrency', def: "TEXT DEFAULT 'USD'" },
    { table: 'sales_lines',    column: 'unitType',      def: "TEXT DEFAULT 'unit'" },
    { table: 'purchase_lines', column: 'unitType',      def: "TEXT DEFAULT 'unit'" },
    { table: 'return_lines',   column: 'unitType',      def: "TEXT DEFAULT 'unit'" },
  ];

  for (const m of migrations) {
    try {
      const cols = db.prepare(`PRAGMA table_info(${m.table})`).all();
      const exists = cols.some(c => c.name === m.column);
      if (!exists) {
        db.prepare(`ALTER TABLE ${m.table} ADD COLUMN ${m.column} ${m.def}`).run();
        console.log(`✅ Migration: added ${m.table}.${m.column}`);
      }
    } catch(e) {
      console.error(`Migration error (${m.table}.${m.column}):`, e.message);
    }
  }
}

// ============================================================
// تحميل كل البيانات
// ============================================================
function loadAll() {
  const companyRows = db.prepare('SELECT key, value FROM company').all();
  const company = {};
  companyRows.forEach(r => { company[r.key] = r.value; });

  const exchRows = db.prepare('SELECT key, value FROM exchange').all();
  const exchange = {};
  exchRows.forEach(r => {
    exchange[r.key] = r.key === 'usdToOld' ? parseFloat(r.value) : r.value;
  });

  const cntRows = db.prepare('SELECT key, value FROM invoice_counters').all();
  const invoiceCounters = { sale: 0, purchase: 0, returnSale: 0, returnPurchase: 0 };
  cntRows.forEach(r => { invoiceCounters[r.key] = r.value; });

  const items = db.prepare('SELECT * FROM items').all();

  const customers = db.prepare('SELECT * FROM customers').all();
  const suppliers  = db.prepare('SELECT * FROM suppliers').all();

  const salesInvoices = db.prepare('SELECT * FROM sales_invoices ORDER BY number').all();
  const getSalesLines = db.prepare('SELECT * FROM sales_lines WHERE invoiceNumber = ?');
  salesInvoices.forEach(inv => { inv.lines = getSalesLines.all(inv.number); });

  const purchaseInvoices = db.prepare('SELECT * FROM purchase_invoices ORDER BY number').all();
  const getPurLines = db.prepare('SELECT * FROM purchase_lines WHERE invoiceNumber = ?');
  purchaseInvoices.forEach(inv => { inv.lines = getPurLines.all(inv.number); });

  const returns = db.prepare('SELECT * FROM returns ORDER BY number').all();
  const getRetLines = db.prepare('SELECT * FROM return_lines WHERE returnNumber = ?');
  returns.forEach(r => { r.lines = getRetLines.all(r.number); });

  const customerPayments = db.prepare('SELECT * FROM customer_payments ORDER BY id').all();
  const supplierPayments  = db.prepare('SELECT * FROM supplier_payments ORDER BY id').all();

  return {
    company, exchange, invoiceCounters,
    items, customers, suppliers,
    salesInvoices, purchaseInvoices,
    returns, customerPayments, supplierPayments,
  };
}

// ============================================================
// حفظ كل البيانات
// ============================================================
function saveAll(data) {
  const run = db.transaction(() => {

    // company
    const upsertCompany = db.prepare('INSERT OR REPLACE INTO company (key, value) VALUES (?, ?)');
    const co = data.company || {};
    Object.entries(co).forEach(([k, v]) => upsertCompany.run(k, v));

    // exchange
    const upsertExch = db.prepare('INSERT OR REPLACE INTO exchange (key, value) VALUES (?, ?)');
    const ex = data.exchange || {};
    Object.entries(ex).forEach(([k, v]) => upsertExch.run(k, String(v)));

    // invoice counters
    const upsertCnt = db.prepare('INSERT OR REPLACE INTO invoice_counters (key, value) VALUES (?, ?)');
    const cnt = data.invoiceCounters || {};
    Object.entries(cnt).forEach(([k, v]) => upsertCnt.run(k, v));

    // ✅ items — مع barcode و priceCurrency
    db.prepare('DELETE FROM items').run();
    const insItem = db.prepare(`
      INSERT INTO items (id, name, type, unit, unit2, factor, cost, price, minStock, barcode, priceCurrency)
      VALUES (@id, @name, @type, @unit, @unit2, @factor, @cost, @price, @minStock, @barcode, @priceCurrency)
    `);
    (data.items || []).forEach(item => insItem.run({
      id:            item.id            || '',
      name:          item.name          || '',
      type:          item.type          || '',
      unit:          item.unit          || '',
      unit2:         item.unit2         || '',
      factor:        item.factor        || 1,
      cost:          item.cost          || 0,
      price:         item.price         || 0,
      minStock:      item.minStock      || 0,
      barcode:       item.barcode       || '',
      priceCurrency: item.priceCurrency || 'USD',
    }));

    // customers
    db.prepare('DELETE FROM customers').run();
    const insCus = db.prepare('INSERT INTO customers (id, name, phone, address) VALUES (@id, @name, @phone, @address)');
    (data.customers || []).forEach(c => insCus.run({
      id: c.id || ('CUS-' + Date.now() + Math.random()),
      name: c.name || '', phone: c.phone || '', address: c.address || ''
    }));

    // suppliers
    db.prepare('DELETE FROM suppliers').run();
    const insSup = db.prepare('INSERT INTO suppliers (id, name, phone, address) VALUES (@id, @name, @phone, @address)');
    (data.suppliers || []).forEach(s => insSup.run({
      id: s.id || ('SUP-' + Date.now() + Math.random()),
      name: s.name || '', phone: s.phone || '', address: s.address || ''
    }));

    // ✅ sales invoices — مع unitType في السطور
    db.prepare('DELETE FROM sales_lines').run();
    db.prepare('DELETE FROM sales_invoices').run();
    const insSaleInv = db.prepare(`
      INSERT INTO sales_invoices (number, date, customerName, subtotal, discount, total, currency, usdToOld)
      VALUES (@number, @date, @customerName, @subtotal, @discount, @total, @currency, @usdToOld)
    `);
    const insSaleLine = db.prepare(`
      INSERT INTO sales_lines (invoiceNumber, itemId, qty, price, total, unitType)
      VALUES (@invoiceNumber, @itemId, @qty, @price, @total, @unitType)
    `);
    (data.salesInvoices || []).forEach(inv => {
      insSaleInv.run({
        number: inv.number, date: inv.date || '',
        customerName: inv.customerName || '',
        subtotal: inv.subtotal || 0, discount: inv.discount || 0,
        total: inv.total || 0, currency: inv.currency || 'USD',
        usdToOld: inv.usdToOld || 0
      });
      (inv.lines || []).forEach(l => insSaleLine.run({
        invoiceNumber: inv.number, itemId: l.itemId || '',
        qty: l.qty || 0, price: l.price || 0, total: l.total || 0,
        unitType: l.unitType || 'unit'
      }));
    });

    // ✅ purchase invoices — مع unitType
    db.prepare('DELETE FROM purchase_lines').run();
    db.prepare('DELETE FROM purchase_invoices').run();
    const insPurInv = db.prepare(`
      INSERT INTO purchase_invoices (number, date, supplierName, total)
      VALUES (@number, @date, @supplierName, @total)
    `);
    const insPurLine = db.prepare(`
      INSERT INTO purchase_lines (invoiceNumber, itemId, qty, price, total, unitType)
      VALUES (@invoiceNumber, @itemId, @qty, @price, @total, @unitType)
    `);
    (data.purchaseInvoices || []).forEach(inv => {
      insPurInv.run({
        number: inv.number, date: inv.date || '',
        supplierName: inv.supplierName || '', total: inv.total || 0
      });
      (inv.lines || []).forEach(l => insPurLine.run({
        invoiceNumber: inv.number, itemId: l.itemId || '',
        qty: l.qty || 0, price: l.price || 0, total: l.total || 0,
        unitType: l.unitType || 'unit'
      }));
    });

    // returns
    db.prepare('DELETE FROM return_lines').run();
    db.prepare('DELETE FROM returns').run();
    const insRet = db.prepare(`
      INSERT INTO returns (number, type, date, party, total, note)
      VALUES (@number, @type, @date, @party, @total, @note)
    `);
    const insRetLine = db.prepare(`
      INSERT INTO return_lines (returnNumber, itemId, qty, price, total, unitType)
      VALUES (@returnNumber, @itemId, @qty, @price, @total, @unitType)
    `);
    (data.returns || []).forEach(r => {
      insRet.run({
        number: r.number, type: r.type || '',
        date: r.date || '', party: r.party || '',
        total: r.total || 0, note: r.note || ''
      });
      (r.lines || []).forEach(l => insRetLine.run({
        returnNumber: r.number, itemId: l.itemId || '',
        qty: l.qty || 0, price: l.price || 0, total: l.total || 0,
        unitType: l.unitType || 'unit'
      }));
    });

    // customer payments
    db.prepare('DELETE FROM customer_payments').run();
    const insCusPay = db.prepare(`
      INSERT INTO customer_payments (customerName, amount, note, date)
      VALUES (@customerName, @amount, @note, @date)
    `);
    (data.customerPayments || []).forEach(p => insCusPay.run({
      customerName: p.customerName || '', amount: p.amount || 0,
      note: p.note || '', date: p.date || ''
    }));

    // supplier payments
    db.prepare('DELETE FROM supplier_payments').run();
    const insSupPay = db.prepare(`
      INSERT INTO supplier_payments (supplierName, amount, note, date)
      VALUES (@supplierName, @amount, @note, @date)
    `);
    (data.supplierPayments || []).forEach(p => insSupPay.run({
      supplierName: p.supplierName || '', amount: p.amount || 0,
      note: p.note || '', date: p.date || ''
    }));
  });

  run();
}

// ============================================================
// ترحيل البيانات القديمة من localStorage JSON
// ============================================================
function migrateFromJSON(jsonData) {
  try {
    const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
    saveAll(data);
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

// ============================================================
// التحقق من وجود بيانات
// ============================================================
function hasData() {
  try {
    const row = db.prepare('SELECT COUNT(*) as cnt FROM items').get();
    return row.cnt > 0;
  } catch(e) {
    return false;
  }
}

// ============================================================
// تصدير قاعدة البيانات
// ============================================================
function backupTo(destPath) {
  if (db) {
    try { db.pragma('wal_checkpoint(TRUNCATE)'); } catch(e) {}
    const srcPath = db.name;
    if (srcPath && fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      return;
    }
  }

  const { app } = require('electron');
  const candidates = [
    path.join(app.getPath('userData'), 'data.db'),
    path.join(app.getPath('appData'), 'AccountingWarehouse', 'data.db'),
    path.join(app.getPath('appData'), 'accounting-warehouse', 'data.db'),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      if (db) { try { db.pragma('wal_checkpoint(TRUNCATE)'); } catch(e) {} }
      fs.copyFileSync(candidate, destPath);
      return;
    }
  }

  throw new Error('لم يتم العثور على ملف قاعدة البيانات');
}

module.exports = { openDatabase, loadAll, saveAll, migrateFromJSON, hasData, backupTo };
