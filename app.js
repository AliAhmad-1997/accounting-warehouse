
// ============================================================
// المواد الافتراضية لكل مجال
// ============================================================
const BUSINESS_ITEMS = {

  construction: [
    { id:'NUM-001', name:'إسمنت بورتلاندي عادي 42.5', type:'مواد بناء', unit:'كيس', unit2:'طن', factor:20, cost:2.33, price:2.67, minStock:10 },
    { id:'NUM-002', name:'إسمنت أبيض', type:'مواد بناء', unit:'كيس', unit2:'طن', factor:20, cost:3.50, price:4.00, minStock:10 },
    { id:'NUM-003', name:'حديد تسليح 10mm', type:'حديد وصلب', unit:'كيلو', unit2:'طن', factor:1000, cost:0.35, price:0.40, minStock:500 },
    { id:'NUM-004', name:'حديد تسليح 12mm', type:'حديد وصلب', unit:'كيلو', unit2:'طن', factor:1000, cost:0.35, price:0.40, minStock:500 },
    { id:'NUM-005', name:'حديد تسليح 16mm', type:'حديد وصلب', unit:'كيلو', unit2:'طن', factor:1000, cost:0.35, price:0.40, minStock:500 },
    { id:'NUM-006', name:'رمل ناعم للبناء', type:'مواد بناء', unit:'م3', unit2:'طن', factor:1.5, cost:10.00, price:12.08, minStock:5 },
    { id:'NUM-007', name:'رمل خشن للخرسانة', type:'مواد بناء', unit:'م3', unit2:'طن', factor:1.6, cost:8.33, price:10.42, minStock:5 },
    { id:'NUM-008', name:'حجارة بازلت 20-40mm', type:'مواد بناء', unit:'م3', unit2:'طن', factor:1.7, cost:10.83, price:13.33, minStock:5 },
    { id:'NUM-009', name:'أنابيب PVC 2 بوصة', type:'سباكة', unit:'متر', unit2:'طرد', factor:6, cost:1.00, price:1.25, minStock:20 },
    { id:'NUM-010', name:'كابل كهربائي 2.5mm²', type:'كهربائيات', unit:'متر', unit2:'لفة', factor:100, cost:0.71, price:0.88, minStock:50 },
    { id:'NUM-011', name:'دهان بلاستيك داخلي 17L', type:'دهانات', unit:'علبة', unit2:'كرتون', factor:4, cost:23.33, price:28.33, minStock:5 },
    { id:'NUM-012', name:'سيراميك أرضيات 60×60', type:'مواد بناء', unit:'م2', unit2:'كرتون', factor:1.44, cost:10.00, price:12.33, minStock:20 },
  ],

  restaurant: [
    { id:'RES-001', name:'دجاج طازج', type:'لحوم ودواجن', unit:'كيلو', unit2:'', factor:1, cost:3.50, price:5.00, minStock:10 },
    { id:'RES-002', name:'لحم غنم', type:'لحوم ودواجن', unit:'كيلو', unit2:'', factor:1, cost:8.00, price:12.00, minStock:5 },
    { id:'RES-003', name:'لحم بقر', type:'لحوم ودواجن', unit:'كيلو', unit2:'', factor:1, cost:7.00, price:10.00, minStock:5 },
    { id:'RES-004', name:'زيت نباتي', type:'زيوت وتوابل', unit:'لتر', unit2:'جالون', factor:4, cost:2.00, price:2.80, minStock:10 },
    { id:'RES-005', name:'أرز بسمتي', type:'حبوب', unit:'كيلو', unit2:'كيس 25kg', factor:25, cost:1.20, price:1.80, minStock:20 },
    { id:'RES-006', name:'طحين', type:'حبوب', unit:'كيلو', unit2:'كيس 25kg', factor:25, cost:0.80, price:1.20, minStock:20 },
    { id:'RES-007', name:'سكر', type:'حبوب', unit:'كيلو', unit2:'كيس 25kg', factor:25, cost:0.70, price:1.00, minStock:10 },
    { id:'RES-008', name:'ملح', type:'زيوت وتوابل', unit:'كيلو', unit2:'', factor:1, cost:0.20, price:0.40, minStock:5 },
    { id:'RES-009', name:'بهارات مشكلة', type:'زيوت وتوابل', unit:'كيلو', unit2:'', factor:1, cost:3.00, price:5.00, minStock:3 },
    { id:'RES-010', name:'طماطم', type:'خضار وفواكه', unit:'كيلو', unit2:'', factor:1, cost:0.50, price:0.90, minStock:10 },
    { id:'RES-011', name:'بصل', type:'خضار وفواكه', unit:'كيلو', unit2:'', factor:1, cost:0.30, price:0.60, minStock:10 },
    { id:'RES-012', name:'غاز طبخ', type:'وقود', unit:'اسطوانة', unit2:'', factor:1, cost:8.00, price:10.00, minStock:2 },
  ],

  supermarket: [
    { id:'SUP-001', name:'مياه معدنية 1.5L', type:'مشروبات', unit:'حبة', unit2:'كرتون', factor:12, cost:0.30, price:0.50, minStock:50 },
    { id:'SUP-002', name:'عصير برتقال 1L', type:'مشروبات', unit:'حبة', unit2:'كرتون', factor:12, cost:0.80, price:1.20, minStock:24 },
    { id:'SUP-003', name:'مشروب غازي 330ml', type:'مشروبات', unit:'علبة', unit2:'كرتون', factor:24, cost:0.40, price:0.70, minStock:48 },
    { id:'SUP-004', name:'حليب طازج 1L', type:'ألبان وأجبان', unit:'حبة', unit2:'كرتون', factor:12, cost:0.90, price:1.30, minStock:24 },
    { id:'SUP-005', name:'جبنة بيضاء 500g', type:'ألبان وأجبان', unit:'حبة', unit2:'', factor:1, cost:1.50, price:2.20, minStock:10 },
    { id:'SUP-006', name:'خبز تنور', type:'مخبوزات', unit:'ربطة', unit2:'', factor:1, cost:0.30, price:0.50, minStock:20 },
    { id:'SUP-007', name:'معجون طماطم 400g', type:'معلبات', unit:'علبة', unit2:'كرتون', factor:24, cost:0.60, price:1.00, minStock:24 },
    { id:'SUP-008', name:'تونة معلبة 170g', type:'معلبات', unit:'علبة', unit2:'كرتون', factor:24, cost:0.80, price:1.30, minStock:24 },
    { id:'SUP-009', name:'شيبس 50g', type:'وجبات خفيفة', unit:'حبة', unit2:'كرتون', factor:24, cost:0.25, price:0.50, minStock:48 },
    { id:'SUP-010', name:'شوكولاتة 100g', type:'حلويات', unit:'حبة', unit2:'كرتون', factor:24, cost:0.60, price:1.00, minStock:24 },
    { id:'SUP-011', name:'سكر 1kg', type:'بقالة', unit:'كيس', unit2:'', factor:1, cost:0.70, price:1.10, minStock:20 },
    { id:'SUP-012', name:'زيت زيتون 750ml', type:'زيوت', unit:'حبة', unit2:'كرتون', factor:12, cost:4.00, price:6.00, minStock:12 },
  ],

  clothing: [
    { id:'CLO-001', name:'تيشيرت رجالي S', type:'تيشيرتات', unit:'حبة', unit2:'دزينة', factor:12, cost:3.00, price:6.00, minStock:10 },
    { id:'CLO-002', name:'تيشيرت رجالي M', type:'تيشيرتات', unit:'حبة', unit2:'دزينة', factor:12, cost:3.00, price:6.00, minStock:10 },
    { id:'CLO-003', name:'تيشيرت رجالي L', type:'تيشيرتات', unit:'حبة', unit2:'دزينة', factor:12, cost:3.00, price:6.00, minStock:10 },
    { id:'CLO-004', name:'بنطال جينز رجالي', type:'بناطيل', unit:'حبة', unit2:'', factor:1, cost:8.00, price:15.00, minStock:5 },
    { id:'CLO-005', name:'بنطال جينز نسائي', type:'بناطيل', unit:'حبة', unit2:'', factor:1, cost:8.00, price:15.00, minStock:5 },
    { id:'CLO-006', name:'فستان نسائي', type:'فساتين', unit:'حبة', unit2:'', factor:1, cost:10.00, price:20.00, minStock:5 },
    { id:'CLO-007', name:'جاكيت شتوي رجالي', type:'جاكيتات', unit:'حبة', unit2:'', factor:1, cost:15.00, price:30.00, minStock:5 },
    { id:'CLO-008', name:'جوارب قطنية', type:'إكسسوارات', unit:'زوج', unit2:'دزينة', factor:12, cost:0.50, price:1.00, minStock:24 },
    { id:'CLO-009', name:'حزام جلد', type:'إكسسوارات', unit:'حبة', unit2:'', factor:1, cost:3.00, price:7.00, minStock:5 },
    { id:'CLO-010', name:'حذاء رياضي', type:'أحذية', unit:'زوج', unit2:'', factor:1, cost:12.00, price:25.00, minStock:5 },
    { id:'CLO-011', name:'شنطة نسائية', type:'حقائب', unit:'حبة', unit2:'', factor:1, cost:8.00, price:18.00, minStock:3 },
    { id:'CLO-012', name:'كاب قبعة', type:'إكسسوارات', unit:'حبة', unit2:'', factor:1, cost:2.00, price:5.00, minStock:10 },
  ],

  pharmacy: [
    { id:'PHA-001', name:'باراسيتامول 500mg', type:'مسكنات', unit:'علبة', unit2:'', factor:1, cost:0.50, price:1.00, minStock:20 },
    { id:'PHA-002', name:'أموكسيسيلين 500mg', type:'مضادات حيوية', unit:'علبة', unit2:'', factor:1, cost:1.50, price:3.00, minStock:10 },
    { id:'PHA-003', name:'فيتامين C 1000mg', type:'فيتامينات', unit:'علبة', unit2:'', factor:1, cost:2.00, price:4.00, minStock:10 },
    { id:'PHA-004', name:'شاش طبي', type:'مستلزمات', unit:'لفة', unit2:'', factor:1, cost:0.30, price:0.70, minStock:20 },
    { id:'PHA-005', name:'قفازات طبية', type:'مستلزمات', unit:'علبة', unit2:'', factor:1, cost:1.50, price:3.00, minStock:10 },
    { id:'PHA-006', name:'ضغط دم رقمي', type:'أجهزة', unit:'حبة', unit2:'', factor:1, cost:15.00, price:30.00, minStock:2 },
    { id:'PHA-007', name:'شامبو طبي', type:'عناية', unit:'حبة', unit2:'', factor:1, cost:2.00, price:4.50, minStock:5 },
    { id:'PHA-008', name:'كريم مرطب', type:'عناية', unit:'حبة', unit2:'', factor:1, cost:1.50, price:3.50, minStock:5 },
    { id:'PHA-009', name:'مقياس حرارة', type:'أجهزة', unit:'حبة', unit2:'', factor:1, cost:3.00, price:7.00, minStock:3 },
    { id:'PHA-010', name:'ماء أكسجيني', type:'مطهرات', unit:'حبة', unit2:'', factor:1, cost:0.40, price:0.90, minStock:10 },
  ],

  electronics: [
    { id:'ELE-001', name:'شاشة حماية موبايل', type:'إكسسوارات', unit:'حبة', unit2:'', factor:1, cost:0.50, price:2.00, minStock:20 },
    { id:'ELE-002', name:'كفر موبايل', type:'إكسسوارات', unit:'حبة', unit2:'', factor:1, cost:0.80, price:3.00, minStock:20 },
    { id:'ELE-003', name:'شاحن USB-C', type:'شواحن', unit:'حبة', unit2:'', factor:1, cost:2.00, price:5.00, minStock:10 },
    { id:'ELE-004', name:'سماعات بلوتوث', type:'سماعات', unit:'حبة', unit2:'', factor:1, cost:8.00, price:20.00, minStock:5 },
    { id:'ELE-005', name:'بطارية احتياطية 10000mAh', type:'بطاريات', unit:'حبة', unit2:'', factor:1, cost:7.00, price:15.00, minStock:5 },
    { id:'ELE-006', name:'كابل USB-C 1m', type:'كابلات', unit:'حبة', unit2:'', factor:1, cost:1.00, price:3.00, minStock:15 },
    { id:'ELE-007', name:'ذاكرة فلاش 32GB', type:'تخزين', unit:'حبة', unit2:'', factor:1, cost:3.00, price:7.00, minStock:10 },
    { id:'ELE-008', name:'لاب توب مستعمل', type:'أجهزة', unit:'حبة', unit2:'', factor:1, cost:150.00, price:250.00, minStock:1 },
    { id:'ELE-009', name:'موبايل مستعمل', type:'أجهزة', unit:'حبة', unit2:'', factor:1, cost:80.00, price:130.00, minStock:1 },
    { id:'ELE-010', name:'راوتر واي فاي', type:'شبكات', unit:'حبة', unit2:'', factor:1, cost:15.00, price:30.00, minStock:3 },
  ],

  general: []
};

const BUSINESS_LABELS = {
  construction: { label: 'مقاولات وبناء', icon: '🏗️' },
  restaurant:   { label: 'مطعم وكافيه',   icon: '🍽️' },
  supermarket:  { label: 'سوبرماركت',      icon: '🛒' },
  clothing:     { label: 'ألبسة وأزياء',   icon: '👕' },
  pharmacy:     { label: 'صيدلية',          icon: '💊' },
  electronics:  { label: 'إلكترونيات',     icon: '📱' },
  general:      { label: 'عام / فارغ',     icon: '🔧' },
};

// ============================================================
// نظام المحاسبة - v2
// ============================================================
const DB_KEY = 'accounting_v1';

// المواد الافتراضية — لا تُحذف عند إعادة التعيين
const DEFAULT_ITEMS = [
  { id:'NUM-001', name:'إسمنت بورتلاندي عادي 42.5', type:'مواد بناء', unit:'كيس', unit2:'طن', factor:20, cost:2.33, price:2.67, minStock:10 },
  { id:'NUM-002', name:'إسمنت أبيض', type:'مواد بناء', unit:'كيس', unit2:'طن', factor:20, cost:3.50, price:4.00, minStock:10 },
  { id:'NUM-003', name:'حديد تسليح 10mm', type:'حديد وصلب', unit:'كيلو', unit2:'طن', factor:1000, cost:0.35, price:0.40, minStock:500 },
  { id:'NUM-004', name:'حديد تسليح 12mm', type:'حديد وصلب', unit:'كيلو', unit2:'طن', factor:1000, cost:0.35, price:0.40, minStock:500 },
  { id:'NUM-005', name:'حديد تسليح 16mm', type:'حديد وصلب', unit:'كيلو', unit2:'طن', factor:1000, cost:0.35, price:0.40, minStock:500 },
  { id:'NUM-006', name:'رمل ناعم للبناء', type:'مواد بناء', unit:'م3', unit2:'طن', factor:1.5, cost:10.00, price:12.08, minStock:5 },
  { id:'NUM-007', name:'رمل خشن للخرسانة', type:'مواد بناء', unit:'م3', unit2:'طن', factor:1.6, cost:8.33, price:10.42, minStock:5 },
  { id:'NUM-008', name:'حجارة بازلت 20-40mm', type:'مواد بناء', unit:'م3', unit2:'طن', factor:1.7, cost:10.83, price:13.33, minStock:5 },
  { id:'NUM-019', name:'أنابيب PVC 2 بوصة', type:'سباكة', unit:'متر', unit2:'طرد', factor:6, cost:1.00, price:1.25, minStock:20 },
  { id:'NUM-020', name:'أنابيب PVC 4 بوصة', type:'سباكة', unit:'متر', unit2:'طرد', factor:6, cost:1.83, price:2.25, minStock:20 },
  { id:'NUM-027', name:'كابل كهربائي 2.5mm²', type:'كهربائيات', unit:'متر', unit2:'لفة', factor:100, cost:0.71, price:0.88, minStock:50 },
  { id:'NUM-028', name:'كابل كهربائي 4mm²', type:'كهربائيات', unit:'متر', unit2:'لفة', factor:100, cost:1.08, price:1.33, minStock:50 },
  { id:'NUM-037', name:'دهان بلاستيك داخلي 17L', type:'دهانات', unit:'علبة', unit2:'كرتون', factor:4, cost:23.33, price:28.33, minStock:5 },
  { id:'NUM-038', name:'دهان بلاستيك خارجي 17L', type:'دهانات', unit:'علبة', unit2:'كرتون', factor:4, cost:31.67, price:38.33, minStock:5 },
  { id:'NUM-046', name:'سيراميك أرضيات 60×60', type:'مواد بناء', unit:'م2', unit2:'كرتون', factor:1.44, cost:10.00, price:12.33, minStock:20 },
];

const defaultData = {
  company: { name:'شركتي', address:'', phone:'', email:'', slogan:'نشكر ثقتكم بنا' },
  exchange: { usdToOld: 12000, note: '1 دولار = X ل.س قديمة | 1 ل.س جديدة = 100 ل.س قديمة' },
  items: JSON.parse(JSON.stringify(DEFAULT_ITEMS)),
  customers: [],
  suppliers: [],
  salesInvoices: [],
  purchaseInvoices: [],
  invoiceCounters: { sale:0, purchase:0, returnSale:0, returnPurchase:0, receipt:0 }
};

// ============================================================
// SQLite — تحميل وحفظ البيانات
// ============================================================
// ============================================================
// isElectron — يكتشف تلقائياً هل البرنامج داخل Electron أو متصفح
// ============================================================
const isElectron = !!(window.electronAPI && window.electronAPI.dbLoad);

async function initDB() {
  if (isElectron) {
    // ===== وضع Electron: SQLite =====
    const hasData = await window.electronAPI.dbHasData();
    if (!hasData) {
      const oldData = localStorage.getItem(DB_KEY);
      if (oldData) {
        const result = await window.electronAPI.dbMigrate(oldData);
        if (result && result.success && !result.skipped) {
          showToast('✅ تم ترحيل بياناتك إلى النظام الجديد بنجاح', 'success');
          localStorage.setItem(DB_KEY + '_migrated_backup', oldData);
        }
      }
    }
    const loaded = await window.electronAPI.dbLoad();
    if (loaded) {
      db = loaded;
      // ✅ إذا items فاضية (حُذفت أو قاعدة جديدة) — أضف الافتراضيين
      if (!db.items || db.items.length === 0) {
        db.items = JSON.parse(JSON.stringify(DEFAULT_ITEMS));
        await window.electronAPI.dbSave(db);
      }
    } else {
      db = JSON.parse(JSON.stringify(defaultData));
      await window.electronAPI.dbSave(db);
    }
  } else {
    // ===== وضع المتصفح: localStorage =====
    const saved = localStorage.getItem(DB_KEY);
    if (saved) {
      try { db = JSON.parse(saved); }
      catch(e) { db = JSON.parse(JSON.stringify(defaultData)); }
    } else {
      db = JSON.parse(JSON.stringify(defaultData));
      localStorage.setItem(DB_KEY, JSON.stringify(db));
    }
  }

  // ضمان وجود كل الحقول
  if (!db.company)          db.company = JSON.parse(JSON.stringify(defaultData.company));
  if (!db.exchange)         db.exchange = JSON.parse(JSON.stringify(defaultData.exchange));
  if (!db.invoiceCounters)  db.invoiceCounters = { sale:0, purchase:0, returnSale:0, returnPurchase:0, receipt:0 };
  if (!db.invoiceCounters.receipt) db.invoiceCounters.receipt = 0;
  if (!db.customers)        db.customers = [];
  if (!db.suppliers)        db.suppliers = [];
  if (!db.books)            db.books = [];
  if (!db.salesInvoices)    db.salesInvoices = [];
  if (!db.purchaseInvoices) db.purchaseInvoices = [];
  if (!db.returns)          db.returns = [];
  if (!db.warehouses)       db.warehouses = [];
  if (!db.transfers)        db.transfers = [];
  if (!db.damages)          db.damages = [];
  if (!db.customerPayments) db.customerPayments = [];
  if (!db.supplierPayments) db.supplierPayments = [];
}

function loadData() {
  return db || JSON.parse(JSON.stringify(defaultData));
}

function saveData(data) {
  db = data;
  if (isElectron) {
    // Electron: SQLite
    window.electronAPI.dbSave(data).catch(e => console.error('saveData error:', e));
  } else {
    // Browser: localStorage
    try { localStorage.setItem(DB_KEY, JSON.stringify(data)); }
    catch(e) { console.error('localStorage saveData error:', e); }
  }
}

let db = JSON.parse(JSON.stringify(defaultData));

// ============================================================
// حساب المخزون
// ============================================================
function getStats() {
  const totalSales = db.salesInvoices.reduce((s,i)=>s+(i.total||0),0);
  const totalPurchases = db.purchaseInvoices.reduce((s,i)=>s+(i.total||0),0);
  // ✅ إصلاح: حساب المرتجعات في الأرباح
  const totalReturnSales = (db.returns||[]).filter(r=>r.type==='sale').reduce((s,r)=>s+(r.total||0),0);
  const totalReturnPurchases = (db.returns||[]).filter(r=>r.type==='purchase').reduce((s,r)=>s+(r.total||0),0);
  const netSales = totalSales - totalReturnSales;
  const netPurchases = totalPurchases - totalReturnPurchases;
  const profit = netSales - netPurchases;
  const inv = calcInventory();
  const lowStock = db.items.filter(item => (inv[item.id]||0) < item.minStock);
  const invValue = db.items.reduce((s,item)=>s+(inv[item.id]||0)*item.cost,0);
  return { totalSales, totalPurchases, netSales, netPurchases, profit,
           totalReturnSales, totalReturnPurchases,
           lowStock, invValue,
           salesCount: db.salesInvoices.length, purchasesCount: db.purchaseInvoices.length,
           returnsCount: (db.returns||[]).length };
}

// ============================================================
// نظام العملات
// ============================================================
function getRate() {
  return db.exchange ? db.exchange.usdToOld : 12000;
}
// تحويل دولار → ل.س قديمة
function usdToOld(usd) { return usd * getRate(); }
// تحويل دولار → ل.س جديدة (حذف صفرين = قسمة 100)
function usdToNew(usd) { return usd * getRate() / 100; }

function fmtUSD(n) { return '$ ' + n.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}); }
function fmtOld(n) { return new Intl.NumberFormat('ar-SY').format(Math.round(n)) + ' ل.س ق'; }
function fmtNew(n) { return new Intl.NumberFormat('ar-SY').format(Math.round(n)) + ' ل.س ج'; }

// عرض السعر الكامل بالعملات الـ3
function fmtAll(usd) {
  return fmtUSD(usd) + ' = ' + fmtOld(usdToOld(usd)) + ' = ' + fmtNew(usdToNew(usd));
}
// للتوافق مع الكود القديم
function fmt(n) { return fmtOld(n); }

// ============================================================
// ROUTER
// ============================================================
const pages = ['dashboard','invoice-sale','invoice-purchase','items','customers','suppliers','settings','reports','returns','receipt-customer','receipt-supplier','warehouses','damages'];
let currentPage = 'dashboard';

function navigate(page) {
  currentPage = page;
  pages.forEach(p => {
    document.getElementById('page-'+p)?.classList.add('hidden');
    document.querySelector(`[data-page="${p}"]`)?.classList.remove('active');
  });
  document.getElementById('page-'+page)?.classList.remove('hidden');
  document.querySelector(`[data-page="${page}"]`)?.classList.add('active');
  render(page);
}

function render(page) {
  switch(page) {
    case 'dashboard': renderDashboard(); break;
    case 'invoice-sale': renderSaleInvoice(); break;
    case 'invoice-purchase': renderPurchaseInvoice(); break;
    case 'items': renderItems(); break;
    case 'customers': renderCustomers(); break;
    case 'suppliers': renderSuppliers(); break;
    case 'settings': renderSettings(); break;
    case 'reports': renderReports(); break;
    case 'returns': renderReturns(); break;
    case 'receipt-customer': renderReceiptCustomer(); break;
    case 'receipt-supplier': renderReceiptSupplier(); break;
    case 'warehouses': renderWarehouses(); updateWarehouseSelects(); break;
    case 'damages': renderDamages(); updateWarehouseSelects(); break;
  }
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const stats = getStats();
  const inv = calcInventory();

  // KPI Cards
  const salesEl = document.getElementById('kpi-total-sales');
  if (salesEl) {
    salesEl.textContent = fmtUSD(stats.totalSales);
    document.getElementById('kpi-sales-count').textContent = stats.salesCount + ' فاتورة';
    document.getElementById('kpi-total-purchases') && (document.getElementById('kpi-total-purchases').textContent = fmtUSD(stats.totalPurchases));
    document.getElementById('kpi-purchases-count') && (document.getElementById('kpi-purchases-count').textContent = stats.purchasesCount + ' فاتورة');
    const profit = stats.profit;
    const profitEl = document.getElementById('kpi-net-profit');
    if(profitEl) { profitEl.textContent = fmtUSD(profit); profitEl.style.color = profit >= 0 ? 'var(--green-700)' : 'var(--red-600)'; }
    const margin = stats.totalSales > 0 ? ((profit / stats.totalSales) * 100).toFixed(1) : 0;
    document.getElementById('kpi-profit-margin') && (document.getElementById('kpi-profit-margin').textContent = 'هامش: ' + margin + '%');
    document.getElementById('kpi-customers-count').textContent = db.customers.length;
    const suppCount = db.suppliers ? db.suppliers.length : 0;
    document.getElementById('kpi-suppliers-count').textContent = suppCount + ' مورد';
  }

  // تنبيهات المخزون
  const alertsEl = document.getElementById('stock-alerts');
  if (alertsEl) {
    if (stats.lowStock.length === 0) {
      alertsEl.innerHTML = '<div class="empty-state">✅ كل المواد بمخزون كافٍ</div>';
    } else {
      alertsEl.innerHTML = stats.lowStock.slice(0, 6).map(item => {
        const stock = inv[item.id] || 0;
        const isZero = stock === 0;
        return '<div class="alert-row">' +
          '<span class="item-id">' + item.id + '</span>' +
          '<span class="item-name">' + item.name + '</span>' +
          '<span class="stock-badge ' + (isZero ? 'badge-error' : 'badge-warning') + '">' +
          (isZero ? 'نفد' : stock + ' ' + item.unit) + '</span></div>';
      }).join('');
    }
  }

  // عرض كل الفواتير مع البحث
  renderAllInvoices();
}

// ============================================================
// عرض كل الفواتير مع البحث
// ============================================================
function renderAllInvoices() {
  const searchVal = (document.getElementById('invoices-search') ? document.getElementById('invoices-search').value : '').toLowerCase().trim();

  const all = [
    ...db.salesInvoices.map(i=>({...i, type:'بيع'})),
    ...db.purchaseInvoices.map(i=>({...i, type:'شراء'}))
  ].sort((a,b) => new Date(b.date) - new Date(a.date));

  const payFilter = document.getElementById('invoices-pay-filter') ? document.getElementById('invoices-pay-filter').value : 'all';

  const filtered = all.filter(inv => {
    const matchSearch = !searchVal ||
      (inv.number || '').toLowerCase().includes(searchVal) ||
      (inv.customerName || '').toLowerCase().includes(searchVal) ||
      (inv.supplierName || '').toLowerCase().includes(searchVal);
    const pt = inv.paymentType || 'cash';
    const matchPay = payFilter === 'all' ||
      (payFilter === 'deferred' && pt === 'deferred') ||
      (payFilter === 'cash' && pt !== 'deferred');
    return matchSearch && matchPay;
  });

  const recentEl = document.getElementById('recent-invoices');
  if (!recentEl) return;

  // عداد النتائج
  const countEl = document.getElementById('invoices-count');
  if (countEl) countEl.textContent = filtered.length + ' فاتورة';

  if (filtered.length === 0) {
    recentEl.innerHTML = searchVal
      ? '<div class="empty-state">🔍 لا توجد نتائج لـ "' + searchVal + '"</div>'
      : '<div class="empty-state">لا توجد فواتير بعد</div>';
    return;
  }

  recentEl.innerHTML = filtered.map(function(inv) {
    const num = inv.number;
    const party = inv.customerName || inv.supplierName || '—';
    const isSale = inv.type === 'بيع';
    const pt = inv.paymentType || 'cash';
    const payBadge = pt === 'deferred'
      ? '<span style="font-size:10px;background:#fef3c7;color:#92400e;padding:1px 6px;border-radius:10px;margin-right:4px">⏳ آجل</span>'
      : '<span style="font-size:10px;background:#f0fdf4;color:#15803d;padding:1px 6px;border-radius:10px;margin-right:4px">💵 نقدي</span>';
    return '<div class="invoice-row" onclick="openInvoiceDetail(\'' + num + '\')" style="cursor:pointer">' +
      '<span class="inv-num">' + num + '</span>' +
      '<span class="inv-customer">' + party + '</span>' +
      '<span class="inv-type ' + (isSale ? 'type-sale' : 'type-purchase') + '">' + inv.type + '</span>' +
      payBadge +
      '<span class="inv-total">' + fmtUSD(inv.total) + '</span>' +
      '<span class="inv-date">' + inv.date + '</span>' +
      '</div>';
  }).join('');
}

// ============================================================
// SALE INVOICE
// ============================================================
let saleLines = [{ itemId:'', qty:1, price:0, total:0 }];

function renderSaleInvoice() {
  const nextNum = 'INV-' + String(db.invoiceCounters.sale+1).padStart(3,'0');
  document.getElementById('sale-inv-num').textContent = nextNum;
  document.getElementById('sale-date').value = new Date().toISOString().split('T')[0];
  renderSaleLines();
  renderSaleTotal();
  // Customer input - datalist
  const datalist = document.getElementById('customers-datalist');
  if(datalist) datalist.innerHTML = db.customers.filter(c=>c.name).map(c=>`<option value="${c.name}">`).join('');
  // تحديث كروات الإحصائيات
  renderSaleStats();
  // تحديث آخر الفواتير في صفحة البيع
  renderSaleRecentInvoices();
}

function renderSaleStats() {
  const stats = getStats();
  const el = document.getElementById('sale-kpi-sales');
  if(el) el.textContent = fmtUSD(stats.totalSales);
  const el4 = document.getElementById('sale-kpi-sales-count');
  if(el4) el4.textContent = stats.salesCount + ' فاتورة';
}

function renderSaleRecentInvoices() {
  const el = document.getElementById('sale-recent-invoices');
  if(!el) return;
  const searchVal = (document.getElementById('sale-invoices-search') ? document.getElementById('sale-invoices-search').value : '').toLowerCase().trim();
  const all = db.salesInvoices.slice().sort((a,b)=>new Date(b.date)-new Date(a.date));
  const salePayFilter = document.getElementById('sale-pay-filter') ? document.getElementById('sale-pay-filter').value : 'all';
  const filtered = all.filter(inv => {
    const matchSearch = !searchVal ||
      (inv.number||'').toLowerCase().includes(searchVal) ||
      (inv.customerName||'').toLowerCase().includes(searchVal);
    const pt = inv.paymentType || 'cash';
    const matchPay = salePayFilter === 'all' ||
      (salePayFilter === 'deferred' && pt === 'deferred') ||
      (salePayFilter === 'cash' && pt !== 'deferred');
    return matchSearch && matchPay;
  });
  const countEl = document.getElementById('sale-invoices-count');
  if(countEl) countEl.textContent = filtered.length + ' فاتورة';
  if(filtered.length === 0) {
    el.innerHTML = searchVal ? '<div class="empty-state">🔍 لا توجد نتائج لـ "' + searchVal + '"</div>' : '<div class="empty-state">لا توجد فواتير بيع بعد</div>';
    return;
  }
  el.innerHTML = filtered.map(inv => {
    const spt = inv.paymentType || 'cash';
    const spb = spt === 'deferred'
      ? '<span style="font-size:10px;background:#fef3c7;color:#92400e;padding:1px 6px;border-radius:10px;margin-right:4px">⏳ آجل</span>'
      : '<span style="font-size:10px;background:#f0fdf4;color:#15803d;padding:1px 6px;border-radius:10px;margin-right:4px">💵 نقدي</span>';
    return '<div class="invoice-row" onclick="openInvoiceDetail(\'' + inv.number + '\')" style="cursor:pointer">' +
      '<span class="inv-num">' + inv.number + '</span>' +
      '<span class="inv-customer">' + (inv.customerName||'—') + '</span>' +
      '<span class="inv-type type-sale">بيع</span>' +
      spb +
      '<span class="inv-total">' + fmtUSD(inv.total) + '</span>' +
      '<span class="inv-date">' + inv.date + '</span>' +
      '</div>';
  }).join('');
}

function renderSaleLines() {
  const tbody = document.getElementById('sale-lines');
  tbody.innerHTML = saleLines.map((line,i) => {
    const item = db.items.find(it=>it.id===line.itemId);
    // بناء dropdown الوحدة
    let unitSelect = '';
    if(item) {
      const hasUnit2 = item.unit2 && item.unit2.trim();
      if(hasUnit2) {
        unitSelect = `<select onchange="onSaleUnitChange(${i},this.value)" class="input input-sm" style="width:90px">
          <option value="unit" ${(line.unitType||'unit')==='unit'?'selected':''}>${item.unit}</option>
          <option value="unit2" ${line.unitType==='unit2'?'selected':''}>${item.unit2}</option>
        </select>`;
      } else {
        unitSelect = `<span class="text-muted">${item.unit||''}</span>`;
      }
    } else {
      unitSelect = '<span class="text-muted">—</span>';
    }
    return `<tr>
      <td>${i+1}</td>
      <td>
        <select onchange="onSaleItemChange(${i},this.value)" class="input input-sm">
          <option value="">-- اختر --</option>
          ${db.items.map(it=>`<option value="${it.id}" ${it.id===line.itemId?'selected':''}>${it.id} - ${it.name}</option>`).join('')}
        </select>
      </td>
      <td>${unitSelect}</td>
      <td><input type="number" class="input input-sm" value="${line.qty}" min="0.01" step="0.01" onchange="onSaleQtyChange(${i},this.value)" style="width:80px"></td>
      <td><span class="price-display">${line.price?fmtUSD(line.price):'—'}</span></td>
      <td><strong>${line.total?fmtUSD(line.total):'—'}</strong></td>
      <td><button class="btn btn-ghost btn-sm" onclick="removeSaleLine(${i})">✕</button></td>
    </tr>`;
  }).join('');
}

function onSaleItemChange(i,itemId) {
  const item = db.items.find(it=>it.id===itemId);
  saleLines[i].itemId = itemId;
  saleLines[i].unitType = 'unit';
  if(item) {
    const priceType = document.getElementById('sale-price-type')?.value || 'retail';
    if(priceType === 'wholesale' && item.price2 > 0) saleLines[i].price = item.price2;
    else if(priceType === 'special' && item.price3 > 0) saleLines[i].price = item.price3;
    else saleLines[i].price = item.price;
  } else {
    saleLines[i].price = 0;
  }
  saleLines[i].total = saleLines[i].price * saleLines[i].qty;
  renderSaleLines(); renderSaleTotal();
}

function onSaleUnitChange(i, unitType) {
  const item = db.items.find(it=>it.id===saleLines[i].itemId);
  if(!item) return;
  saleLines[i].unitType = unitType;
  if(unitType === 'unit2') {
    // سعر الوحدة الثانية = سعر الأساسية × عامل التحويل
    saleLines[i].price = item.price * (item.factor || 1);
  } else {
    saleLines[i].price = item.price;
  }
  saleLines[i].total = saleLines[i].price * saleLines[i].qty;
  renderSaleLines(); renderSaleTotal();
}
function onSaleQtyChange(i,qty) {
  saleLines[i].qty = parseFloat(qty)||0;
  saleLines[i].total = saleLines[i].price*saleLines[i].qty;
  renderSaleLines(); renderSaleTotal();
}
function removeSaleLine(i) {
  saleLines.splice(i,1);
  if(saleLines.length===0) saleLines.push({itemId:'',qty:1,price:0,total:0});
  renderSaleLines(); renderSaleTotal();
}
function addSaleLine() { saleLines.push({itemId:'',qty:1,price:0,total:0}); renderSaleLines(); }
function renderSaleTotal() {
  const subtotal = saleLines.reduce((s,l)=>s+l.total,0);
  const discount = parseFloat(document.getElementById('sale-discount')?.value||0);
  const total = subtotal*(1-discount/100);
  document.getElementById('sale-subtotal').textContent = fmtUSD(subtotal);
  document.getElementById('sale-total').textContent = fmtUSD(total);
  // عرض المكافئ بالليرتين
  const eqEl = document.getElementById('sale-total-equiv');
  if(eqEl) eqEl.innerHTML =
    '<span style="color:var(--text-muted);font-size:13px">' +
    fmtOld(usdToOld(total)) + ' &nbsp;|&nbsp; ' + fmtNew(usdToNew(total)) +
    '</span>';
}

function saveSaleInvoice() {
  const lines = saleLines.filter(l=>l.itemId&&l.qty>0);
  if(lines.length===0){showToast('أضف مادة واحدة على الأقل','error');return;}
  const subtotal = lines.reduce((s,l)=>s+l.total,0);
  const discount  = parseFloat(document.getElementById('sale-discount')?.value||0);
  const taxRate   = parseFloat(document.getElementById('sale-tax-rate')?.value||0);
  const taxAmount = subtotal * (1 - discount/100) * (taxRate/100);
  const total     = subtotal * (1 - discount/100) + taxAmount;
  const paidAmount  = parseFloat(document.getElementById('sale-paid-amount')?.value||total);
  const paymentType = document.getElementById('sale-payment-type')?.value || 'cash';
  const priceType   = document.getElementById('sale-price-type')?.value   || 'retail';
  const saleNote    = document.getElementById('sale-note')?.value || '';
  const customerName = document.getElementById('sale-customer-input').value.trim();
  const now = new Date();
  const timeStr = now.toTimeString().slice(0,5);

  // إضافة الزبون تلقائياً
  if(customerName && !db.customers.find(c=>c.name===customerName)) {
    const newId = 'CUS-' + String(db.customers.length+1).padStart(3,'0');
    db.customers.push({id:newId, name:customerName, phone:'', address:'', balance:0});
    showToast(`✅ تم إضافة الزبون "${customerName}" تلقائياً`,'success');
  }

  // تحديث رصيد الزبون (الآجل فقط)
  if(paymentType === 'deferred') {
    const cust = db.customers.find(c=>c.name===customerName);
    if(cust) cust.balance = (cust.balance||0) + (total - paidAmount);
  }

  db.invoiceCounters.sale++;
  const inv = {
    number: 'INV-'+String(db.invoiceCounters.sale).padStart(3,'0'),
    date: document.getElementById('sale-date').value,
    time: timeStr,
    customerName,
    lines, subtotal, discount, total,
    paidAmount, paymentType, priceType,
    taxRate, taxAmount,
    note: saleNote,
    currency: 'USD',
    usdToOld: getRate()
  };
  db.salesInvoices.push(inv);

  // إيصال قبض تلقائي لو دفع جزئي
  if(paidAmount > 0 && paidAmount < total) {
    db.invoiceCounters.receipt = (db.invoiceCounters.receipt||0) + 1;
    db.customerPayments.push({
      receiptNum: 'REC-'+String(db.invoiceCounters.receipt).padStart(3,'0'),
      customerName, amount: paidAmount, paymentMethod: 'cash',
      chequeNum:'', description:'دفعة مع الفاتورة '+inv.number,
      discountOnPayment:0, note:'', date: inv.date
    });
  }

  saveData(db);
  saleLines = [{itemId:'',qty:1,price:0,total:0}];
  document.getElementById('sale-customer-input').value = '';
  if(document.getElementById('sale-tax-rate'))    document.getElementById('sale-tax-rate').value = '0';
  if(document.getElementById('sale-paid-amount')) document.getElementById('sale-paid-amount').value = '';
  if(document.getElementById('sale-note'))        document.getElementById('sale-note').value = '';
  showToast('✅ تم حفظ الفاتورة '+inv.number,'success');
  navigate('dashboard');
}

// ============================================================
// PRINT / PDF
// ============================================================
function printInvoice(invNumber) {
  const inv = db.salesInvoices.find(i=>i.number===invNumber) ||
              db.purchaseInvoices.find(i=>i.number===invNumber);
  if(!inv) return;
  const type = db.salesInvoices.find(i=>i.number===invNumber) ? 'بيع' : 'شراء';
  const party = inv.customerName || inv.supplierName || '—';

  const linesHTML = inv.lines.map((l,i) => {
    const item = db.items.find(it=>it.id===l.itemId);
    return `<tr>
      <td style="padding:8px;border:1px solid #ddd;text-align:center">${i+1}</td>
      <td style="padding:8px;border:1px solid #ddd">${item?.name||l.itemId}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center">${item?.unit||''}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center">${l.qty}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center">$${l.price.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center;font-weight:bold">$${l.total.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}</td>
    </tr>`;
  }).join('');

  const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>فاتورة ${inv.number}</title>
<style>
  body { font-family: 'Segoe UI','Tahoma','Arial',sans-serif; margin:0; padding:20px; color:#1a1a1a; }
  .header { background:#1F3864; color:white; padding:20px; border-radius:8px; margin-bottom:20px; text-align:center; }
  .header h1 { margin:0; font-size:24px; }
  .header p { margin:4px 0; font-size:13px; opacity:0.85; }
  .inv-title { background:#EBF3FB; padding:10px 16px; border-radius:6px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center; }
  .inv-title h2 { margin:0; font-size:16px; color:#1F3864; }
  .inv-num { background:#1F3864; color:white; padding:4px 12px; border-radius:4px; font-weight:bold; }
  .info-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:20px; }
  .info-box { background:#f8f9fa; padding:12px; border-radius:6px; border-right:3px solid #2E75B6; }
  .info-box label { font-size:11px; color:#666; display:block; margin-bottom:4px; }
  .info-box span { font-size:14px; font-weight:600; color:#1a1a1a; }
  table { width:100%; border-collapse:collapse; margin-bottom:16px; }
  thead th { background:#1F3864; color:white; padding:10px 8px; text-align:center; font-size:13px; }
  tbody tr:nth-child(even) { background:#f8f9fa; }
  .totals { display:flex; justify-content:flex-end; }
  .totals-box { background:#1F3864; color:white; padding:16px 24px; border-radius:8px; text-align:center; min-width:200px; }
  .totals-box .label { font-size:12px; opacity:0.8; margin-bottom:4px; }
  .totals-box .amount { font-size:22px; font-weight:bold; }
  .footer { text-align:center; margin-top:30px; padding-top:16px; border-top:1px solid #eee; color:#888; font-size:12px; }
  .sign-row { display:grid; grid-template-columns:1fr 1fr; gap:40px; margin-top:40px; }
  .sign-box { text-align:center; border-top:1px solid #ccc; padding-top:8px; font-size:12px; color:#666; }
  @media print { body { padding:10px; } }
</style>
</head>
<body>
<div class="header">
  <h1>${db.company.name}</h1>
  <p>${db.company.address}${db.company.phone?' | ☎ '+db.company.phone:''}</p>
</div>
<div class="inv-title">
  <h2>🧾 فاتورة ${type}</h2>
  <span class="inv-num">${inv.number}</span>
</div>
<div class="info-grid">
  <div class="info-box"><label>${type==='بيع'?'اسم الزبون':'المورد'}</label><span>${party}</span></div>
  <div class="info-box"><label>التاريخ</label><span>${inv.date}</span></div>
</div>
<table>
  <thead><tr>
    <th style="width:40px">#</th>
    <th>اسم المادة</th>
    <th style="width:80px">الوحدة</th>
    <th style="width:80px">الكمية</th>
    <th style="width:120px">السعر</th>
    <th style="width:130px">الإجمالي</th>
  </tr></thead>
  <tbody>${linesHTML}</tbody>
</table>
<div class="totals">
  <div class="totals-box">
    <div class="label">💰 الإجمالي النهائي</div>
    <div class="amount">$${inv.total.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}</div>
    ${inv.discount>0?`<div style="font-size:12px;opacity:0.8;margin-top:4px">خصم ${inv.discount}%</div>`:''}
  </div>
</div>
<div class="sign-row">
  <div class="sign-box">توقيع المستلم</div>
  <div class="sign-box">ختم الشركة</div>
</div>
<div class="footer">${db.company.slogan}</div>
<script>window.onload=()=>window.print();<\/script>
</body></html>`;

  const win = window.open('','_blank');
  win.document.write(html);
  win.document.close();
}

// ============================================================
// PURCHASE INVOICE
// ============================================================
let purchaseLines = [{itemId:'',qty:1,price:0,total:0}];

function renderPurchaseInvoice() {
  const nextNum = 'PUR-'+String(db.invoiceCounters.purchase+1).padStart(3,'0');
  document.getElementById('pur-inv-num').textContent = nextNum;
  document.getElementById('pur-date').value = new Date().toISOString().split('T')[0];
  // reset السطور عند كل فتح للصفحة
  purchaseLines = [{itemId:'',qty:1,price:0,total:0}];
  renderPurchaseLines(); renderPurchaseTotal();
  const datalist = document.getElementById('suppliers-datalist');
  if(datalist) datalist.innerHTML = db.suppliers.filter(s=>s.name).map(s=>`<option value="${s.name}">`).join('');
  renderPurchaseRecentInvoices();
}

function renderPurchaseLines() {
  const tbody = document.getElementById('pur-lines');
  tbody.innerHTML = purchaseLines.map((line,i) => {
    const item = db.items.find(it=>it.id===line.itemId);
    let unitSelect = '';
    if(item) {
      const hasUnit2 = item.unit2 && item.unit2.trim();
      if(hasUnit2) {
        unitSelect = `<select onchange="onPurUnitChange(${i},this.value)" class="input input-sm" style="width:90px">
          <option value="unit" ${(line.unitType||'unit')==='unit'?'selected':''}>${item.unit}</option>
          <option value="unit2" ${line.unitType==='unit2'?'selected':''}>${item.unit2}</option>
        </select>`;
      } else {
        unitSelect = `<span class="text-muted">${item.unit||''}</span>`;
      }
    } else {
      unitSelect = '<span class="text-muted">—</span>';
    }
    return `<tr>
      <td>${i+1}</td>
      <td>
        <select onchange="onPurItemChange(${i},this.value)" class="input input-sm">
          <option value="">-- اختر --</option>
          ${db.items.map(it=>`<option value="${it.id}" ${it.id===line.itemId?'selected':''}>${it.id} - ${it.name}</option>`).join('')}
        </select>
      </td>
      <td>${unitSelect}</td>
      <td><input type="number" class="input input-sm" value="${line.qty}" min="0.01" step="0.01" onchange="onPurQtyChange(${i},this.value)" style="width:80px"></td>
      <td><input type="number" class="input input-sm" value="${line.price}" min="0" onchange="onPurPriceChange(${i},this.value)" style="width:110px"></td>
      <td><strong>${line.total?fmtUSD(line.total):'—'}</strong></td>
      <td><button class="btn btn-ghost btn-sm" onclick="removePurLine(${i})">✕</button></td>
    </tr>`;
  }).join('');
}

function onPurItemChange(i,itemId) {
  const item = db.items.find(it=>it.id===itemId);
  purchaseLines[i].itemId = itemId;
  purchaseLines[i].unitType = 'unit';
  purchaseLines[i].price = item ? item.cost : 0;
  purchaseLines[i].total = purchaseLines[i].price * purchaseLines[i].qty;
  renderPurchaseLines(); renderPurchaseTotal();
}

function onPurUnitChange(i, unitType) {
  const item = db.items.find(it=>it.id===purchaseLines[i].itemId);
  if(!item) return;
  purchaseLines[i].unitType = unitType;
  if(unitType === 'unit2') {
    purchaseLines[i].price = item.cost * (item.factor || 1);
  } else {
    purchaseLines[i].price = item.cost;
  }
  purchaseLines[i].total = purchaseLines[i].price * purchaseLines[i].qty;
  renderPurchaseLines(); renderPurchaseTotal();
}
function onPurQtyChange(i,qty) {
  purchaseLines[i].qty=parseFloat(qty)||0;
  purchaseLines[i].total=purchaseLines[i].price*purchaseLines[i].qty;
  renderPurchaseLines(); renderPurchaseTotal();
}
function onPurPriceChange(i,price) {
  purchaseLines[i].price=parseFloat(price)||0;
  purchaseLines[i].total=purchaseLines[i].price*purchaseLines[i].qty;
  renderPurchaseLines(); renderPurchaseTotal();
}
function removePurLine(i) {
  purchaseLines.splice(i,1);
  if(purchaseLines.length===0) purchaseLines.push({itemId:'',qty:1,price:0,total:0});
  renderPurchaseLines(); renderPurchaseTotal();
}
function addPurLine() { purchaseLines.push({itemId:'',qty:1,price:0,total:0}); renderPurchaseLines(); }
function renderPurchaseTotal() {
  const total = purchaseLines.reduce((s,l)=>s+l.total,0);
  document.getElementById('pur-total').textContent = fmtUSD(total);
  const eqEl = document.getElementById('pur-total-equiv');
  if(eqEl) eqEl.innerHTML =
    '<span style="color:var(--text-muted);font-size:13px">' +
    fmtOld(usdToOld(total)) + ' &nbsp;|&nbsp; ' + fmtNew(usdToNew(total)) +
    '</span>';
}
function renderPurchaseRecentInvoices() {
  const el = document.getElementById('pur-recent-invoices');
  if(!el) return;
  const searchVal = (document.getElementById('pur-invoices-search') ? document.getElementById('pur-invoices-search').value : '').toLowerCase().trim();
  const all = db.purchaseInvoices.slice().sort((a,b)=>new Date(b.date)-new Date(a.date));
  const purPayFilter = document.getElementById('pur-pay-filter') ? document.getElementById('pur-pay-filter').value : 'all';
  const filtered = all.filter(inv => {
    const matchSearch = !searchVal ||
      (inv.number||'').toLowerCase().includes(searchVal) ||
      (inv.supplierName||'').toLowerCase().includes(searchVal);
    const pt = inv.paymentType || 'cash';
    const matchPay = purPayFilter === 'all' ||
      (purPayFilter === 'deferred' && pt === 'deferred') ||
      (purPayFilter === 'cash' && pt !== 'deferred');
    return matchSearch && matchPay;
  });
  const countEl = document.getElementById('pur-invoices-count');
  if(countEl) countEl.textContent = filtered.length + ' فاتورة';
  if(filtered.length === 0) {
    el.innerHTML = searchVal ? '<div class="empty-state">🔍 لا توجد نتائج لـ "' + searchVal + '"</div>' : '<div class="empty-state">لا توجد فواتير شراء بعد</div>';
    return;
  }
  el.innerHTML = filtered.map(inv => {
    const ppt = inv.paymentType || 'cash';
    const ppb = ppt === 'deferred'
      ? '<span style="font-size:10px;background:#fef3c7;color:#92400e;padding:1px 6px;border-radius:10px;margin-right:4px">⏳ آجل</span>'
      : '<span style="font-size:10px;background:#f0fdf4;color:#15803d;padding:1px 6px;border-radius:10px;margin-right:4px">💵 نقدي</span>';
    return '<div class="invoice-row" onclick="openInvoiceDetail(\'' + inv.number + '\')" style="cursor:pointer">' +
      '<span class="inv-num">' + inv.number + '</span>' +
      '<span class="inv-customer">' + (inv.supplierName||'—') + '</span>' +
      '<span class="inv-type type-purchase">شراء</span>' +
      ppb +
      '<span class="inv-total">' + fmtUSD(inv.total) + '</span>' +
      '<span class="inv-date">' + inv.date + '</span>' +
      '</div>';
  }).join('');
}

function savePurchaseInvoice() {
  const lines = purchaseLines.filter(l=>l.itemId&&l.qty>0);
  if(lines.length===0){showToast('أضف مادة واحدة على الأقل','error');return;}
  const subtotal     = lines.reduce((s,l)=>s+l.total,0);
  const discount     = parseFloat(document.getElementById('pur-discount')?.value||0);
  const shippingCost = parseFloat(document.getElementById('pur-shipping')?.value||0);
  const total        = subtotal*(1-discount/100) + shippingCost;
  const paidAmount   = parseFloat(document.getElementById('pur-paid-amount')?.value||total);
  const paymentType  = document.getElementById('pur-payment-type')?.value || 'cash';
  const supplierInvoiceNum = document.getElementById('pur-supplier-invoice')?.value || '';
  const purNote      = document.getElementById('pur-note')?.value || '';
  const supplierName = document.getElementById('pur-supplier-input').value.trim();
  const now = new Date();
  const timeStr = now.toTimeString().slice(0,5);

  if(!supplierName){showToast('أدخل اسم المورد','error');return;}

  // إضافة المورد تلقائياً
  if(!db.suppliers.find(s=>s.name===supplierName)) {
    const newId = 'SUP-'+String(db.suppliers.length+1).padStart(3,'0');
    db.suppliers.push({id:newId, name:supplierName, phone:'', address:'', balance:0});
  }

  // تحديث تكلفة المادة بسعر الشراء الجديد
  lines.forEach(l => {
    const item = db.items.find(it=>it.id===l.itemId);
    if(item) item.cost = l.price;
  });

  // تحديث رصيد المورد (آجل)
  if(paymentType === 'deferred') {
    const sup = db.suppliers.find(s=>s.name===supplierName);
    if(sup) sup.balance = (sup.balance||0) + (total - paidAmount);
  }

  db.invoiceCounters.purchase++;
  const inv = {
    number: 'PUR-'+String(db.invoiceCounters.purchase).padStart(3,'0'),
    date: document.getElementById('pur-date').value,
    time: timeStr,
    supplierName, supplierInvoiceNum,
    lines, subtotal, discount, total,
    paidAmount, paymentType,
    shippingCost, shippingAccount:'',
    note: purNote,
    currency:'USD', usdToOld: getRate()
  };
  db.purchaseInvoices.push(inv);
  saveData(db);
  purchaseLines = [{itemId:'',qty:1,price:0,total:0}];
  document.getElementById('pur-supplier-input').value = '';
  ['pur-discount','pur-shipping','pur-paid-amount','pur-supplier-invoice','pur-note'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.value = id.includes('discount')||id.includes('shipping') ? '0' : '';
  });
  showToast('✅ تم حفظ فاتورة الشراء '+inv.number,'success');
  navigate('dashboard');
}

// ============================================================
// ITEMS — مع حذف مادة
// ============================================================
function renderItems() {
  const inv = calcInventory();
  const search = document.getElementById('items-search')?.value?.toLowerCase()||'';
  const filtered = db.items.filter(item =>
    item.name.toLowerCase().includes(search)||item.id.toLowerCase().includes(search)||item.type.toLowerCase().includes(search)
  );
  const tbody = document.getElementById('items-tbody');
  tbody.innerHTML = filtered.map(item => {
    const stock = inv[item.id]||0;
    const isLow = stock < item.minStock;
    const isDefault = DEFAULT_ITEMS.find(d=>d.id===item.id);
    const barcodeIcon = item.barcode
      ? `<span title="${item.barcode}" style="cursor:default;font-size:14px;">📊</span>`
      : `<span style="color:var(--text-muted);font-size:11px;">—</span>`;
    return `<tr class="${isLow?'row-warning':''}">
      <td><span class="item-id">${item.id}</span></td>
      <td><strong>${item.name}</strong></td>
      <td><span class="badge">${item.type}</span></td>
      <td>${item.unit}</td>
      <td>${fmtUSD(item.cost)}</td>
      <td>${fmtUSD(item.price)}</td>
      <td><span class="stock-num">${stock}</span></td>
      <td style="text-align:center">${barcodeIcon}</td>
      <td>
        <button class="btn btn-ghost btn-sm" onclick="editItem('${item.id}')">✏️</button>
        <button class="btn btn-ghost btn-sm" onclick="deleteItem('${item.id}')" title="حذف" style="color:var(--red-600)">🗑️</button>
      </td>
    </tr>`;
  }).join('');
  document.getElementById('items-count').textContent = filtered.length + ' مادة';
}

// ✅ حذف مادة
function deleteItem(id) {
  const item = db.items.find(i=>i.id===id);
  if(!item) return;
  if(!confirm(`هل تريد حذف "${item.name}"؟\nلا يمكن التراجع عن هذا الإجراء.`)) return;
  db.items = db.items.filter(i=>i.id!==id);
  saveData(db);
  renderItems();
  showToast('🗑️ تم حذف المادة','success');
}

function editItem(id) {
  const item = db.items.find(i=>i.id===id);
  if(!item) return;
  document.getElementById('modal-item-id').value = item.id;
  document.getElementById('modal-item-name').value = item.name;
  document.getElementById('modal-item-type').value = item.type;
  document.getElementById('modal-item-unit').value = item.unit || '';
  document.getElementById('modal-item-unit2').value = item.unit2 || '';
  document.getElementById('modal-item-factor').value = item.factor || 1;
  document.getElementById('modal-item-barcode').value = item.barcode || '';
  // حقول جديدة
  const el2 = document.getElementById('modal-item-barcode2'); if(el2) el2.value = item.barcode2||'';
  const elTax = document.getElementById('modal-item-tax'); if(elTax) elTax.value = item.taxRate||0;
  const elMax = document.getElementById('modal-item-maxstock'); if(elMax) elMax.value = item.maxStock||0;
  const elBrand = document.getElementById('modal-item-brand'); if(elBrand) elBrand.value = item.brand||'';
  const elDefsup = document.getElementById('modal-item-defsup'); if(elDefsup) elDefsup.value = item.defaultSupplier||'';
  // العملة والأسعار
  const currency = item.priceCurrency || 'USD';
  document.getElementById('modal-price-currency').value = currency;
  const rate = getRate();
  let costDisplay = item.cost;
  let priceDisplay = item.price;
  let price2Display = item.price2||0;
  let price3Display = item.price3||0;
  if(currency === 'OLD') {
    costDisplay *= rate; priceDisplay *= rate;
    price2Display *= rate; price3Display *= rate;
  } else if(currency === 'NEW') {
    costDisplay *= rate/100; priceDisplay *= rate/100;
    price2Display *= rate/100; price3Display *= rate/100;
  }
  document.getElementById('modal-item-cost').value = Math.round(costDisplay * 100) / 100;
  document.getElementById('modal-item-price').value = Math.round(priceDisplay * 100) / 100;
  const elP2 = document.getElementById('modal-item-price2'); if(elP2) elP2.value = Math.round(price2Display*100)/100;
  const elP3 = document.getElementById('modal-item-price3'); if(elP3) elP3.value = Math.round(price3Display*100)/100;
  updateModalCurrencyLabel();
  document.getElementById('item-modal').classList.remove('hidden');
}

function updateModalCurrencyLabel() {
  const cur = document.getElementById('modal-price-currency').value;
  const labels = { USD: '$', OLD: 'ل.س ق', NEW: 'ل.س ج' };
  document.querySelectorAll('.modal-cur-label').forEach(el => el.textContent = labels[cur] || '$');
}

function saveItemModal() {
  const id = document.getElementById('modal-item-id').value;
  const item = db.items.find(i=>i.id===id);
  if(!item) return;
  item.name = document.getElementById('modal-item-name').value;
  item.type = document.getElementById('modal-item-type').value;
  item.unit = document.getElementById('modal-item-unit').value;
  item.unit2 = document.getElementById('modal-item-unit2').value;
  item.factor = parseFloat(document.getElementById('modal-item-factor').value) || 1;
  item.barcode = document.getElementById('modal-item-barcode').value.trim();
  // حقول جديدة
  const el2 = document.getElementById('modal-item-barcode2'); if(el2) item.barcode2 = el2.value.trim();
  const elTax = document.getElementById('modal-item-tax'); if(elTax) item.taxRate = parseFloat(elTax.value)||0;
  const elMax = document.getElementById('modal-item-maxstock'); if(elMax) item.maxStock = parseFloat(elMax.value)||0;
  const elBrand = document.getElementById('modal-item-brand'); if(elBrand) item.brand = elBrand.value.trim();
  const elDefsup = document.getElementById('modal-item-defsup'); if(elDefsup) item.defaultSupplier = elDefsup.value.trim();
  // تحويل الأسعار للدولار
  const currency = document.getElementById('modal-price-currency').value;
  const rate = getRate();
  const toUSD = (v) => {
    if(currency === 'OLD') return v / rate;
    if(currency === 'NEW') return v / (rate/100);
    return v;
  };
  item.cost  = Math.round(toUSD(parseFloat(document.getElementById('modal-item-cost').value)||0) * 10000) / 10000;
  item.price = Math.round(toUSD(parseFloat(document.getElementById('modal-item-price').value)||0) * 10000) / 10000;
  const elP2 = document.getElementById('modal-item-price2');
  const elP3 = document.getElementById('modal-item-price3');
  if(elP2) item.price2 = Math.round(toUSD(parseFloat(elP2.value)||0) * 10000) / 10000;
  if(elP3) item.price3 = Math.round(toUSD(parseFloat(elP3.value)||0) * 10000) / 10000;
  item.priceCurrency = currency;
  item.minStock = parseFloat(document.getElementById('modal-item-minstock')?.value)||0;
  saveData(db);
  document.getElementById('item-modal').classList.add('hidden');
  renderItems();
  showToast('✅ تم تحديث المادة','success');
}

function addNewItem() {
  const newId = 'NUM-'+ String(db.items.length+1).padStart(3,'0');
  db.items.push({id:newId,name:'مادة جديدة',type:'مواد بناء',unit:'قطعة',unit2:'',factor:1,cost:0,price:0,minStock:0,priceCurrency:'USD'});
  saveData(db);
  renderItems();
  editItem(newId);
}

// ============================================================
// CUSTOMERS
// ============================================================
function renderCustomers() {
  const tbody = document.getElementById('customers-tbody');
  if(db.customers.length===0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--text-muted)">لا يوجد زبائن بعد — سيُضافون تلقائياً عند إنشاء فاتورة بيع</td></tr>`;
    return;
  }
  tbody.innerHTML = db.customers.map((c,i) => {
    const sales = db.salesInvoices.filter(s=>s.customerName===c.name);
    const total = sales.reduce((s,inv)=>s+inv.total,0);
    const invoicesList = sales.length > 0
      ? sales.map(s=>`<span class="inv-link" onclick="openInvoiceDetail('${s.number}')">${s.number}</span>`).join(' ')
      : '—';
    const acc = getCustomerAccount(c.name);
    const remainingColor = acc.remaining > 0 ? 'var(--red-600)' : 'var(--green-700)';
    return `<tr>
      <td><span class="item-id">${c.id}</span></td>
      <td><input class="input input-sm" value="${c.name}" onchange="updateCustomer(${i},'name',this.value)" placeholder="اسم الزبون"></td>
      <td><input class="input input-sm" value="${c.phone||''}" onchange="updateCustomer(${i},'phone',this.value)" placeholder="الهاتف"></td>
      <td><input class="input input-sm" value="${c.address||''}" onchange="updateCustomer(${i},'address',this.value)" placeholder="العنوان"></td>
      <td><strong>${fmtUSD(acc.totalInvoices)}</strong></td>
      <td><strong style="color:var(--green-700)">${fmtUSD(acc.totalPaid)}</strong></td>
      <td><strong style="color:${remainingColor}">${fmtUSD(acc.remaining)}</strong></td>
      <td><button class="btn btn-primary btn-sm" onclick="openCustomerAccount('${c.name}')">💳 الحساب</button></td>
    </tr>`;
  }).join('');
}

// ===== SUPPLIERS =====
function renderSuppliers() {
  const tbody = document.getElementById('suppliers-tbody');
  if (!tbody) return;
  const suppliers = db.suppliers || [];
  if (suppliers.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--text-muted)">لا يوجد موردين بعد — سيُضافون تلقائياً عند إنشاء فاتورة شراء</td></tr>';
    return;
  }
  tbody.innerHTML = suppliers.map(function(s, i) {
    const purchases = db.purchaseInvoices.filter(function(p){ return p.supplierName === s.name; });
    const total = purchases.reduce(function(sum,inv){ return sum + inv.total; }, 0);
    const invLinks = purchases.length > 0
      ? purchases.map(function(p){ return '<span class="inv-link" onclick="openInvoiceDetail(\'' + p.number + '\')">' + p.number + '</span>'; }).join('')
      : '<span style="color:var(--text-muted);font-size:12px">—</span>';
    const sAcc = getSupplierAccount(s.name);
    const sRemColor = sAcc.remaining > 0 ? 'var(--red-600)' : 'var(--green-700)';
    return '<tr>' +
      '<td><span class="item-id">' + String(i+1).padStart(3,'0') + '</span></td>' +
      '<td style="font-weight:600">' + s.name + '</td>' +
      '<td>' + (s.phone||'—') + '</td>' +
      '<td>' + (s.address||'—') + '</td>' +
      '<td style="font-weight:700;color:var(--blue-link)">' + fmtUSD(sAcc.totalInvoices) + '</td>' +
      '<td style="font-weight:700;color:var(--green-700)">' + fmtUSD(sAcc.totalPaid) + '</td>' +
      '<td style="font-weight:700;color:' + sRemColor + '">' + fmtUSD(sAcc.remaining) + '</td>' +
      '<td><button class="btn btn-primary btn-sm" onclick="openSupplierAccount(\'' + s.name + '\')">' + '💳 الحساب</button></td>' +
      '</tr>';
  }).join('');
}

function addSupplier() {
  const name = prompt('اسم المورد:');
  if (!name || !name.trim()) return;
  if (!db.suppliers) db.suppliers = [];
  if (db.suppliers.find(function(s){ return s.name === name.trim(); })) {
    showToast('المورد موجود مسبقاً', 'error'); return;
  }
  db.suppliers.push({ name: name.trim(), phone: '', address: '' });
  saveData(db);
  renderSuppliers();
  showToast('✅ تم إضافة المورد');
}


function updateCustomer(i,field,val) { db.customers[i][field]=val; saveData(db); }

function addCustomer() {
  const newId = 'CUS-'+String(db.customers.length+1).padStart(3,'0');
  db.customers.push({id:newId,name:'',phone:'',address:''});
  saveData(db); renderCustomers();
}

// ============================================================
// SETTINGS
// ============================================================
function updateRateDisplay(val) {
  const rate = parseFloat(val) || 0;
  const oldEl = document.getElementById('rate-display-old');
  const newEl = document.getElementById('rate-display-new');
  if(oldEl) oldEl.textContent = rate ? new Intl.NumberFormat('ar-SY').format(rate) + ' ل.س ق' : '—';
  if(newEl) newEl.textContent = rate ? new Intl.NumberFormat('ar-SY').format(rate/100) + ' ل.س ج' : '—';
}

function renderSettings() {
  document.getElementById('set-name').value = db.company.name;
  document.getElementById('set-address').value = db.company.address;
  document.getElementById('set-phone').value = db.company.phone;
  document.getElementById('set-email').value = db.company.email;
  document.getElementById('set-slogan').value = db.company.slogan;
  if(!db.exchange) db.exchange = { usdToOld: 12000 };
  const rate = db.exchange.usdToOld;
  document.getElementById('set-usd-rate').value = rate;
  updateRateDisplay(rate);
}

function saveCompanyName(name) {
  if (!name || name === db.company.name) return;
  db.company.name = name;
  saveData(db);
  // حدّث حقل الإعدادات كمان
  const setName = document.getElementById('set-name');
  if (setName) setName.value = name;
  showToast('✅ تم حفظ اسم الشركة');
}

function saveSettings() {
  db.company.name = document.getElementById('set-name').value;
  db.company.address = document.getElementById('set-address').value;
  db.company.phone = document.getElementById('set-phone').value;
  db.company.email = document.getElementById('set-email').value;
  db.company.slogan = document.getElementById('set-slogan').value;
  if(!db.exchange) db.exchange = { usdToOld: 12000 };
  db.exchange.usdToOld = parseFloat(document.getElementById('set-usd-rate').value) || 12000;
  saveData(db);
  const hdr = document.getElementById('company-name-header');
  if (hdr) hdr.value = db.company.name;
  updateRateWidget();
  showToast('✅ تم حفظ الإعدادات — سعر الصرف: ' + db.exchange.usdToOld + ' ل.س ق/$','success');
}

// ويجت سعر الصرف في لوحة التحكم
function updateRateWidget() {
  if(!db.exchange) db.exchange = { usdToOld: 12000 };
  const rate = db.exchange.usdToOld;
  const el = document.getElementById('rate-widget-val');
  if(el) el.textContent = new Intl.NumberFormat('ar-SY').format(rate);
  const el2 = document.getElementById('rate-widget-new');
  if(el2) el2.textContent = new Intl.NumberFormat('ar-SY').format(rate/100);
  const inp = document.getElementById('rate-quick-input');
  if(inp) inp.value = rate;
}

function saveQuickRate() {
  const val = parseFloat(document.getElementById('rate-quick-input').value);
  if(!val || val < 1) { showToast('سعر صرف غير صحيح','error'); return; }
  if(!db.exchange) db.exchange = {};
  db.exchange.usdToOld = val;
  saveData(db);
  updateRateWidget();
  showToast('✅ تم تحديث سعر الصرف: ' + val + ' ل.س ق/$','success');
}

// ✅ إعادة التعيين — تحتفظ بالمواد
function resetData() {
  // confirm() بيتعطل أحياناً في Electron — نستخدم modal بسيط بدله
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;font-family:inherit;';
  overlay.innerHTML = `
    <div style="background:#fff;border-radius:16px;padding:32px;width:360px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.3);">
      <div style="font-size:40px;margin-bottom:12px;">⚠️</div>
      <h3 style="margin:0 0 8px;font-size:18px;color:#0f172a;">إعادة تعيين البيانات</h3>
      <p style="margin:0 0 24px;font-size:14px;color:#64748b;">سيتم حذف الفواتير والزبائن والموردين.<br>المواد لن تُحذف.</p>
      <div style="display:flex;gap:12px;justify-content:center;">
        <button id="reset-cancel" style="padding:10px 24px;border-radius:8px;border:1px solid #e2e8f0;background:#f8fafc;font-size:14px;cursor:pointer;font-family:inherit;">إلغاء</button>
        <button id="reset-confirm" style="padding:10px 24px;border-radius:8px;border:none;background:#ef4444;color:#fff;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">تأكيد الحذف</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  document.getElementById('reset-cancel').onclick = () => document.body.removeChild(overlay);
  document.getElementById('reset-confirm').onclick = () => {
    document.body.removeChild(overlay);
    db.salesInvoices = [];
    db.purchaseInvoices = [];
    db.customers = [];
    db.suppliers = [];
    db.invoiceCounters = {sale:0,purchase:0,returnSale:0,returnPurchase:0};
    saveData(db);
    showToast('✅ تم إعادة التعيين — المواد محفوظة', 'success');
    navigate('dashboard');
  };
}

// ============================================================
// تصدير واستيراد قاعدة البيانات (SQLite)
// ============================================================
async function exportDatabase() {
  if (!window.electronAPI || !window.electronAPI.exportDatabase) {
    showToast('هذه الميزة تعمل فقط داخل البرنامج', 'error');
    return;
  }
  const result = await window.electronAPI.exportDatabase();
  if (result && result.success) {
    showToast('✅ تم تصدير قاعدة البيانات بنجاح', 'success');
  } else if (result && !result.canceled) {
    showToast('❌ ' + (result.error || 'فشل التصدير'), 'error');
  }
}

async function importDatabase() {
  if (!window.electronAPI || !window.electronAPI.importDatabase) {
    showToast('هذه الميزة تعمل فقط داخل البرنامج', 'error');
    return;
  }
  const result = await window.electronAPI.importDatabase();
  if (result && result.success) {
    showToast('✅ تم استيراد قاعدة البيانات — سيُعاد تشغيل البرنامج', 'success');
    setTimeout(() => location.reload(), 1500);
  } else if (result && result.error) {
    showToast('❌ ' + result.error, 'error');
  }
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg,type='success') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast toast-'+type+' show';
  setTimeout(()=>toast.classList.remove('show'),3000);
}



// ============================================================
// التقارير
// ============================================================

function renderReports() {
  const filterType = document.getElementById('report-filter-type')?.value || 'monthly';
  const filterMonth = document.getElementById('report-filter-month')?.value || '';
  const filterYear = document.getElementById('report-filter-year')?.value || new Date().getFullYear();

  // فلترة الفواتير حسب الفترة
  function matchPeriod(inv) {
    const d = new Date(inv.date);
    if (filterType === 'daily') {
      const today = document.getElementById('report-filter-date')?.value || new Date().toISOString().split('T')[0];
      return inv.date === today;
    } else if (filterType === 'monthly') {
      return d.getMonth() + 1 === parseInt(filterMonth) && d.getFullYear() === parseInt(filterYear);
    } else if (filterType === 'yearly') {
      return d.getFullYear() === parseInt(filterYear);
    } else if (filterType === 'custom') {
      const from = document.getElementById('report-from')?.value;
      const to = document.getElementById('report-to')?.value;
      if (from && to) return inv.date >= from && inv.date <= to;
      return true;
    }
    return true;
  }

  const sales = db.salesInvoices.filter(matchPeriod);
  const purchases = db.purchaseInvoices.filter(matchPeriod);

  const totalSales = sales.reduce((s, i) => s + (i.total || 0), 0);
  const totalPurchases = purchases.reduce((s, i) => s + (i.total || 0), 0);
  const profit = totalSales - totalPurchases;
  const margin = totalSales > 0 ? ((profit / totalSales) * 100).toFixed(1) : 0;

  // KPI
  document.getElementById('rep-total-sales').textContent = fmtUSD(totalSales);
  document.getElementById('rep-sales-sub').textContent = sales.length + ' فاتورة';
  document.getElementById('rep-total-purchases').textContent = fmtUSD(totalPurchases);
  document.getElementById('rep-purchases-sub').textContent = purchases.length + ' فاتورة';
  const profitEl = document.getElementById('rep-profit');
  profitEl.textContent = fmtUSD(profit);
  profitEl.style.color = profit >= 0 ? 'var(--green-700)' : 'var(--red-600)';
  document.getElementById('rep-margin').textContent = 'هامش: ' + margin + '%';
  document.getElementById('rep-sales-count').textContent = fmtOld(usdToOld(totalSales));
  document.getElementById('rep-purchases-count').textContent = fmtOld(usdToOld(totalPurchases));
  document.getElementById('rep-profit-old').textContent = fmtOld(usdToOld(profit));

  // جدول المبيعات
  const salesTbody = document.getElementById('rep-sales-tbody');
  if (sales.length === 0) {
    salesTbody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:16px;color:var(--text-muted)">لا توجد فواتير في هذه الفترة</td></tr>';
  } else {
    salesTbody.innerHTML = sales.map(inv =>
      '<tr onclick="openInvoiceDetail(\'' + inv.number + '\')" style="cursor:pointer">' +
      '<td><span class="inv-num">' + inv.number + '</span></td>' +
      '<td>' + (inv.customerName || '—') + '</td>' +
      '<td>' + inv.date + '</td>' +
      '<td>' + (inv.discount > 0 ? inv.discount + '%' : '—') + '</td>' +
      '<td><strong>' + fmtUSD(inv.total) + '</strong></td>' +
      '</tr>'
    ).join('');
  }

  // جدول المشتريات
  const purTbody = document.getElementById('rep-purchases-tbody');
  if (purchases.length === 0) {
    purTbody.innerHTML = '<tr><td colspan="4" style="text-align:center;padding:16px;color:var(--text-muted)">لا توجد فواتير في هذه الفترة</td></tr>';
  } else {
    purTbody.innerHTML = purchases.map(inv =>
      '<tr onclick="openInvoiceDetail(\'' + inv.number + '\')" style="cursor:pointer">' +
      '<td><span class="inv-num">' + inv.number + '</span></td>' +
      '<td>' + (inv.supplierName || '—') + '</td>' +
      '<td>' + inv.date + '</td>' +
      '<td><strong>' + fmtUSD(inv.total) + '</strong></td>' +
      '</tr>'
    ).join('');
  }

  // تحديث عنوان التقرير
  updateReportTitle(filterType, filterMonth, filterYear);
}

function updateReportTitle(type, month, year) {
  const months = ['','يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  let title = 'تقرير ';
  if (type === 'daily') {
    const d = document.getElementById('report-filter-date')?.value || new Date().toISOString().split('T')[0];
    title += 'يومي — ' + d;
  } else if (type === 'monthly') {
    title += 'شهري — ' + (months[parseInt(month)] || '') + ' ' + year;
  } else if (type === 'yearly') {
    title += 'سنوي — ' + year;
  } else {
    const from = document.getElementById('report-from')?.value || '';
    const to = document.getElementById('report-to')?.value || '';
    title += 'مخصص — ' + from + ' إلى ' + to;
  }
  const el = document.getElementById('report-title');
  if (el) el.textContent = title;
}

function onReportFilterChange() {
  const type = document.getElementById('report-filter-type')?.value;
  document.getElementById('report-daily-row').style.display = type === 'daily' ? '' : 'none';
  document.getElementById('report-monthly-row').style.display = type === 'monthly' ? '' : 'none';
  document.getElementById('report-yearly-row').style.display = type === 'yearly' ? '' : 'none';
  document.getElementById('report-custom-row').style.display = type === 'custom' ? '' : 'none';
  renderReports();
}

function printReport() {
  const area = document.getElementById('report-print-area');
  if (!area) return;
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>تقرير</title>
<style>
  body { font-family:'Segoe UI',Tahoma,Arial,sans-serif; margin:0; padding:20px; color:#1a1a1a; direction:rtl; }
  h1 { font-size:20px; color:#1F3864; margin-bottom:4px; }
  .sub { font-size:12px; color:#64748b; margin-bottom:20px; }
  .kpi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:24px; }
  .kpi { background:#f0f4ff; border-radius:8px; padding:12px; text-align:center; }
  .kpi-label { font-size:11px; color:#64748b; margin-bottom:4px; }
  .kpi-value { font-size:18px; font-weight:700; color:#1F3864; }
  .kpi-sub { font-size:11px; color:#64748b; }
  table { width:100%; border-collapse:collapse; margin-bottom:20px; }
  thead th { background:#1F3864; color:white; padding:8px; font-size:12px; text-align:right; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  tbody td { padding:7px 8px; border-bottom:1px solid #e2e8f0; font-size:12px; }
  tbody tr:nth-child(even) { background:#f8fafc; }
  h3 { font-size:14px; color:#1F3864; margin:16px 0 8px; }
  .footer { text-align:center; font-size:11px; color:#94a3b8; margin-top:24px; border-top:1px solid #e2e8f0; padding-top:8px; }
  @media print { body { padding:10px; } }
</style>
</head>
<body>
${area.innerHTML}
<div class="footer">تم إنشاء التقرير بواسطة برنامج المحاسبة والمستودعات — ${new Date().toLocaleDateString('ar-SY')}</div>
<script>window.onload=()=>window.print();<\/script>
</body></html>`);
  win.document.close();
}


// ============================================================
// حساب الزبون — دين / دفع / باقي
// ============================================================

function getCustomerAccount(customerName) {
  const invoices = db.salesInvoices.filter(i => i.customerName === customerName);
  const cashInvoices     = invoices.filter(i => (i.paymentType||'cash') === 'cash');
  const deferredInvoices = invoices.filter(i => (i.paymentType||'cash') === 'deferred');

  const totalCash     = cashInvoices.reduce((s,i) => s + (i.total||0), 0);
  const totalDeferred = deferredInvoices.reduce((s,i) => s + (i.total||0), 0);
  const totalInvoices = invoices.reduce((s,i) => s + (i.total||0), 0);

  // كل الدفعات (مع الفاتورة + لاحقة) محفوظة في customerPayments
  const payments = (db.customerPayments || []).filter(p => p.customerName === customerName);
  const totalPaid = payments.reduce((s,p) => s + (p.amount||0) + (p.discountOnPayment||0), 0);

  // المتبقي = إجمالي الآجل - كل المدفوع
  const remaining = Math.max(0, totalDeferred - totalPaid);

  return { invoices, cashInvoices, deferredInvoices, payments,
           totalInvoices, totalCash, totalDeferred, totalPaidOnInvoice: 0, totalPaid, remaining };
}

function openCustomerAccount(customerName) {
  const acc = getCustomerAccount(customerName);
  const modal = document.getElementById('customer-account-modal');
  if (!modal) return;

  document.getElementById('ca-name').textContent = customerName;
  document.getElementById('ca-total-invoices').textContent = fmtUSD(acc.totalInvoices);
  document.getElementById('ca-total-paid').textContent = fmtUSD(acc.totalPaid);
  const remEl = document.getElementById('ca-remaining');
  remEl.textContent = fmtUSD(acc.remaining);
  remEl.style.color = acc.remaining > 0 ? 'var(--red-600)' : 'var(--green-700)';
  document.getElementById('ca-remaining-old').textContent = fmtOld(usdToOld(acc.remaining));

  // جدول الفواتير — مع تمييز نقدي/آجل
  const invTbody = document.getElementById('ca-invoices-tbody');
  invTbody.innerHTML = acc.invoices.length === 0
    ? '<tr><td colspan="5" style="text-align:center;padding:12px;color:var(--text-muted)">لا توجد فواتير</td></tr>'
    : acc.invoices.map(inv => {
        const isDeferred = (inv.paymentType||'cash') === 'deferred';
        const paid = inv.paidAmount || 0;
        const rem  = isDeferred ? Math.max(0, inv.total - paid) : 0;
        const tag  = isDeferred
          ? `<span style="font-size:11px;background:#fef2f2;color:#dc2626;padding:2px 6px;border-radius:10px">آجل</span>`
          : `<span style="font-size:11px;background:#f0fdf4;color:#16a34a;padding:2px 6px;border-radius:10px">نقدي</span>`;
        return '<tr onclick="openInvoiceDetail(\'' + inv.number + '\')" style="cursor:pointer">' +
          '<td><span class="inv-num">' + inv.number + '</span></td>' +
          '<td>' + inv.date + '</td>' +
          '<td>' + tag + '</td>' +
          '<td><strong>' + fmtUSD(inv.total) + '</strong></td>' +
          '<td style="color:' + (rem>0?'#dc2626':'#16a34a') + ';font-weight:700">' + (isDeferred ? fmtUSD(rem) : '—') + '</td>' +
          '</tr>';
      }).join('');

  // جدول الدفعات
  const payTbody = document.getElementById('ca-payments-tbody');
  payTbody.innerHTML = acc.payments.length === 0
    ? '<tr><td colspan="3" style="text-align:center;padding:12px;color:var(--text-muted)">لا توجد دفعات مسجلة</td></tr>'
    : acc.payments.map((p, i) =>
        '<tr>' +
        '<td>' + p.date + '</td>' +
        '<td>' + (p.note || '—') + '</td>' +
        '<td style="color:var(--green-700)"><strong>' + fmtUSD(p.amount) + '</strong></td>' +
        '<td><button class="btn btn-ghost btn-sm" onclick="deleteCustomerPayment(\'' + customerName + '\',' + i + ')" style="color:var(--red-600)">✕</button></td>' +
        '</tr>'
      ).join('');

  // حقل إضافة دفعة
  document.getElementById('ca-payment-name').value = customerName;
  document.getElementById('ca-payment-amount').value = '';
  document.getElementById('ca-payment-note').value = '';
  document.getElementById('ca-payment-date').value = new Date().toISOString().split('T')[0];

  modal.classList.remove('hidden');
  modal.style.display = 'flex';
}

function addCustomerPayment() {
  const customerName = document.getElementById('ca-payment-name').value;
  const amount = parseFloat(document.getElementById('ca-payment-amount').value) || 0;
  const note = document.getElementById('ca-payment-note').value.trim();
  const date = document.getElementById('ca-payment-date').value;

  if (!amount || amount <= 0) { showToast('أدخل مبلغ صحيح', 'error'); return; }
  if (!db.customerPayments) db.customerPayments = [];

  db.customerPayments.push({ customerName, amount, note, date });
  saveData(db);
  showToast('✅ تم تسجيل الدفعة: ' + fmtUSD(amount), 'success');
  openCustomerAccount(customerName);
}

function deleteCustomerPayment(customerName, index) {
  if (!confirm('هل تريد حذف هذه الدفعة؟')) return;
  const payments = (db.customerPayments || []).filter(p => p.customerName === customerName);
  const allPayments = db.customerPayments || [];
  // find actual index in full array
  let count = 0;
  for (let i = 0; i < allPayments.length; i++) {
    if (allPayments[i].customerName === customerName) {
      if (count === index) { allPayments.splice(i, 1); break; }
      count++;
    }
  }
  db.customerPayments = allPayments;
  saveData(db);
  showToast('🗑️ تم حذف الدفعة', 'success');
  openCustomerAccount(customerName);
}

function closeCustomerAccount() {
  const modal = document.getElementById('customer-account-modal');
  if (modal) { modal.classList.add('hidden'); modal.style.display = 'none'; }
}

function printCustomerAccount() {
  const name = document.getElementById('ca-name').textContent;
  const acc = getCustomerAccount(name);
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head><meta charset="UTF-8"><title>حساب ${name}</title>
<style>
  body{font-family:'Segoe UI',Tahoma,Arial,sans-serif;margin:0;padding:20px;color:#1a1a1a;direction:rtl;}
  .header{background:#1F3864;color:white;padding:16px 20px;border-radius:8px;margin-bottom:20px;}
  .header h2{margin:0;font-size:18px;}
  .header p{margin:4px 0 0;font-size:12px;opacity:0.8;}
  .kpi-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px;}
  .kpi{background:#f0f4ff;border-radius:8px;padding:12px;text-align:center;}
  .kpi label{font-size:11px;color:#64748b;display:block;margin-bottom:4px;}
  .kpi span{font-size:16px;font-weight:700;color:#1F3864;}
  table{width:100%;border-collapse:collapse;margin-bottom:16px;}
  thead th{background:#1F3864;color:white;padding:8px;font-size:12px;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
  tbody td{padding:7px 8px;border-bottom:1px solid #e2e8f0;font-size:12px;}
  h3{font-size:13px;color:#1F3864;margin:16px 0 8px;}
  .remaining{font-size:20px;font-weight:700;color:${acc.remaining > 0 ? '#dc2626' : '#16a34a'};}
</style></head><body>
<div class="header"><h2>حساب الزبون: ${name}</h2><p>تاريخ الطباعة: ${new Date().toLocaleDateString('ar-SY')}</p></div>
<div class="kpi-row">
  <div class="kpi"><label>إجمالي الفواتير</label><span>${fmtUSD(acc.totalInvoices)}</span></div>
  <div class="kpi"><label>إجمالي المدفوع</label><span>${fmtUSD(acc.totalPaid)}</span></div>
  <div class="kpi"><label>المتبقي</label><span class="remaining">${fmtUSD(acc.remaining)}</span></div>
</div>
<h3>🧾 الفواتير (${acc.invoices.length})</h3>
<table><thead><tr><th>رقم الفاتورة</th><th>التاريخ</th><th>الإجمالي</th></tr></thead>
<tbody>${acc.invoices.map(i => '<tr><td>' + i.number + '</td><td>' + i.date + '</td><td>' + fmtUSD(i.total) + '</td></tr>').join('')}</tbody></table>
<h3>💵 الدفعات (${acc.payments.length})</h3>
<table><thead><tr><th>التاريخ</th><th>ملاحظة</th><th>المبلغ</th></tr></thead>
<tbody>${acc.payments.map(p => '<tr><td>' + p.date + '</td><td>' + (p.note||'—') + '</td><td>' + fmtUSD(p.amount) + '</td></tr>').join('')}</tbody></table>
<script>window.onload=()=>window.print();<\/script>
</body></html>`);
  win.document.close();
}


// ============================================================
// حساب المورد — مشتريات / مدفوع / باقي
// ============================================================

function getSupplierAccount(supplierName) {
  const invoices = db.purchaseInvoices.filter(i => i.supplierName === supplierName);
  const cashInvoices     = invoices.filter(i => (i.paymentType||'cash') === 'cash');
  const deferredInvoices = invoices.filter(i => (i.paymentType||'cash') === 'deferred');

  const totalCash     = cashInvoices.reduce((s,i) => s + (i.total||0), 0);
  const totalDeferred = deferredInvoices.reduce((s,i) => s + (i.total||0), 0);
  const totalInvoices = invoices.reduce((s,i) => s + (i.total||0), 0);

  // كل الدفعات للمورد محفوظة في supplierPayments
  const payments = (db.supplierPayments || []).filter(p => p.supplierName === supplierName);
  const totalPaid = payments.reduce((s,p) => s + (p.amount||0), 0);

  // المتبقي = إجمالي الآجل - كل المدفوع
  const remaining = Math.max(0, totalDeferred - totalPaid);

  return { invoices, cashInvoices, deferredInvoices, payments,
           totalInvoices, totalCash, totalDeferred, totalPaidOnInvoice: 0, totalPaid, remaining };
}

function openSupplierAccount(supplierName) {
  const acc = getSupplierAccount(supplierName);
  const modal = document.getElementById('supplier-account-modal');
  if (!modal) return;

  document.getElementById('sa-name').textContent = supplierName;
  document.getElementById('sa-total-invoices').textContent = fmtUSD(acc.totalInvoices);
  document.getElementById('sa-total-paid').textContent = fmtUSD(acc.totalPaid);
  const remEl = document.getElementById('sa-remaining');
  remEl.textContent = fmtUSD(acc.remaining);
  remEl.style.color = acc.remaining > 0 ? 'var(--red-600)' : 'var(--green-700)';
  document.getElementById('sa-remaining-old').textContent = fmtOld(usdToOld(acc.remaining));

  // جدول الفواتير
  const invTbody = document.getElementById('sa-invoices-tbody');
  invTbody.innerHTML = acc.invoices.length === 0
    ? '<tr><td colspan="3" style="text-align:center;padding:12px;color:var(--text-muted)">لا توجد فواتير</td></tr>'
    : acc.invoices.map(inv =>
        '<tr onclick="openInvoiceDetail(\'' + inv.number + '\')" style="cursor:pointer">' +
        '<td><span class="inv-num">' + inv.number + '</span></td>' +
        '<td>' + inv.date + '</td>' +
        '<td><strong>' + fmtUSD(inv.total) + '</strong></td>' +
        '</tr>'
      ).join('');

  // جدول الدفعات
  const payTbody = document.getElementById('sa-payments-tbody');
  payTbody.innerHTML = acc.payments.length === 0
    ? '<tr><td colspan="4" style="text-align:center;padding:12px;color:var(--text-muted)">لا توجد دفعات مسجلة</td></tr>'
    : acc.payments.map((p, i) =>
        '<tr>' +
        '<td>' + p.date + '</td>' +
        '<td>' + (p.note || '—') + '</td>' +
        '<td style="color:var(--green-700)"><strong>' + fmtUSD(p.amount) + '</strong></td>' +
        '<td><button class="btn btn-ghost btn-sm" onclick="deleteSupplierPayment(\'' + supplierName + '\',' + i + ')" style="color:var(--red-600)">✕</button></td>' +
        '</tr>'
      ).join('');

  document.getElementById('sa-payment-name').value = supplierName;
  document.getElementById('sa-payment-amount').value = '';
  document.getElementById('sa-payment-note').value = '';
  document.getElementById('sa-payment-date').value = new Date().toISOString().split('T')[0];

  modal.classList.remove('hidden');
  modal.style.display = 'flex';
}

function addSupplierPayment() {
  const supplierName = document.getElementById('sa-payment-name').value;
  const amount = parseFloat(document.getElementById('sa-payment-amount').value) || 0;
  const note = document.getElementById('sa-payment-note').value.trim();
  const date = document.getElementById('sa-payment-date').value;

  if (!amount || amount <= 0) { showToast('أدخل مبلغ صحيح', 'error'); return; }
  if (!db.supplierPayments) db.supplierPayments = [];

  db.supplierPayments.push({ supplierName, amount, note, date });
  saveData(db);
  showToast('✅ تم تسجيل الدفعة: ' + fmtUSD(amount), 'success');
  openSupplierAccount(supplierName);
}

function deleteSupplierPayment(supplierName, index) {
  if (!confirm('هل تريد حذف هذه الدفعة؟')) return;
  const allPayments = db.supplierPayments || [];
  let count = 0;
  for (let i = 0; i < allPayments.length; i++) {
    if (allPayments[i].supplierName === supplierName) {
      if (count === index) { allPayments.splice(i, 1); break; }
      count++;
    }
  }
  db.supplierPayments = allPayments;
  saveData(db);
  showToast('🗑️ تم حذف الدفعة', 'success');
  openSupplierAccount(supplierName);
}

function closeSupplierAccount() {
  const modal = document.getElementById('supplier-account-modal');
  if (modal) { modal.classList.add('hidden'); modal.style.display = 'none'; }
}

function printSupplierAccount() {
  const name = document.getElementById('sa-name').textContent;
  const acc = getSupplierAccount(name);
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head><meta charset="UTF-8"><title>حساب ${name}</title>
<style>
  body{font-family:'Segoe UI',Tahoma,Arial,sans-serif;margin:0;padding:20px;color:#1a1a1a;direction:rtl;}
  .header{background:#15803d;color:white;padding:16px 20px;border-radius:8px;margin-bottom:20px;}
  .header h2{margin:0;font-size:18px;}
  .header p{margin:4px 0 0;font-size:12px;opacity:0.8;}
  .kpi-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px;}
  .kpi{background:#f0fdf4;border-radius:8px;padding:12px;text-align:center;}
  .kpi label{font-size:11px;color:#64748b;display:block;margin-bottom:4px;}
  .kpi span{font-size:16px;font-weight:700;color:#15803d;}
  table{width:100%;border-collapse:collapse;margin-bottom:16px;}
  thead th{background:#15803d;color:white;padding:8px;font-size:12px;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
  tbody td{padding:7px 8px;border-bottom:1px solid #e2e8f0;font-size:12px;}
  h3{font-size:13px;color:#15803d;margin:16px 0 8px;}
  .remaining{font-size:20px;font-weight:700;color:${acc.remaining > 0 ? '#dc2626' : '#16a34a'};}
</style></head><body>
<div class="header"><h2>حساب المورد: ${name}</h2><p>تاريخ الطباعة: ${new Date().toLocaleDateString('ar-SY')}</p></div>
<div class="kpi-row">
  <div class="kpi"><label>إجمالي المشتريات</label><span>${fmtUSD(acc.totalInvoices)}</span></div>
  <div class="kpi"><label>إجمالي المدفوع</label><span>${fmtUSD(acc.totalPaid)}</span></div>
  <div class="kpi"><label>المتبقي</label><span class="remaining">${fmtUSD(acc.remaining)}</span></div>
</div>
<h3>🛒 فواتير الشراء (${acc.invoices.length})</h3>
<table><thead><tr><th>رقم الفاتورة</th><th>التاريخ</th><th>الإجمالي</th></tr></thead>
<tbody>${acc.invoices.map(i => '<tr><td>' + i.number + '</td><td>' + i.date + '</td><td>' + fmtUSD(i.total) + '</td></tr>').join('')}</tbody></table>
<h3>💵 الدفعات (${acc.payments.length})</h3>
<table><thead><tr><th>التاريخ</th><th>ملاحظة</th><th>المبلغ</th></tr></thead>
<tbody>${acc.payments.map(p => '<tr><td>' + p.date + '</td><td>' + (p.note||'—') + '</td><td>' + fmtUSD(p.amount) + '</td></tr>').join('')}</tbody></table>
<script>window.onload=()=>window.print();<\/script>
</body></html>`);
  win.document.close();
}


// ============================================================
// المرتجعات — رد بضاعة بيع / رد بضاعة شراء
// ============================================================
let returnLines = [{ itemId:'', qty:1, price:0, total:0 }];

function renderReturns() {
  renderReturnLines();
  renderReturnTotal();
  renderReturnsList();
  // datalists
  const cdl = document.getElementById('return-customers-datalist');
  if(cdl) cdl.innerHTML = db.customers.filter(c=>c.name).map(c=>`<option value="${c.name}">`).join('');
  const sdl = document.getElementById('return-suppliers-datalist');
  if(sdl) sdl.innerHTML = (db.suppliers||[]).filter(s=>s.name).map(s=>`<option value="${s.name}">`).join('');
  // set date
  const dateEl = document.getElementById('return-date');
  if(dateEl && !dateEl.value) dateEl.value = new Date().toISOString().split('T')[0];
  // set next number
  const type = document.getElementById('return-type')?.value || 'sale';
  updateReturnNumber(type);
}

function updateReturnNumber(type) {
  const returns = (db.returns || []);
  const saleCount = returns.filter(r=>r.type==='sale').length;
  const purCount = returns.filter(r=>r.type==='purchase').length;
  const numEl = document.getElementById('return-inv-num');
  if(numEl) {
    numEl.textContent = type === 'sale'
      ? 'RET-S-' + String(saleCount+1).padStart(3,'0')
      : 'RET-P-' + String(purCount+1).padStart(3,'0');
  }
  // show/hide party fields
  document.getElementById('return-customer-row').style.display = type === 'sale' ? '' : 'none';
  document.getElementById('return-supplier-row').style.display = type === 'purchase' ? '' : 'none';
}

function onReturnTypeChange() {
  const type = document.getElementById('return-type').value;
  updateReturnNumber(type);
  returnLines = [{ itemId:'', qty:1, price:0, total:0 }];
  renderReturnLines();
  renderReturnTotal();
}

function renderReturnLines() {
  const tbody = document.getElementById('return-lines');
  if(!tbody) return;
  const type = document.getElementById('return-type')?.value || 'sale';
  tbody.innerHTML = returnLines.map((line, i) => {
    const item = db.items.find(it=>it.id===line.itemId);
    // بناء dropdown الوحدة — مثل فاتورة البيع
    let unitSelect = '';
    if(item) {
      const hasUnit2 = item.unit2 && item.unit2.trim();
      if(hasUnit2) {
        unitSelect = `<select onchange="onReturnUnitChange(${i},this.value)" class="input input-sm" style="width:90px">
          <option value="unit" ${(line.unitType||'unit')==='unit'?'selected':''}>${item.unit}</option>
          <option value="unit2" ${line.unitType==='unit2'?'selected':''}>${item.unit2}</option>
        </select>`;
      } else {
        unitSelect = `<span class="text-muted">${item.unit||''}</span>`;
      }
    } else {
      unitSelect = '<span class="text-muted">—</span>';
    }
    return `<tr>
      <td>${i+1}</td>
      <td>
        <select onchange="onReturnItemChange(${i},this.value)" class="input input-sm">
          <option value="">-- اختر --</option>
          ${db.items.map(it=>`<option value="${it.id}" ${it.id===line.itemId?'selected':''}>${it.id} - ${it.name}</option>`).join('')}
        </select>
      </td>
      <td>${unitSelect}</td>
      <td><input type="number" class="input input-sm" value="${line.qty}" min="0.01" step="0.01"
          onchange="onReturnQtyChange(${i},this.value)" style="width:80px"></td>
      <td><input type="number" class="input input-sm" value="${line.price}" min="0"
          onchange="onReturnPriceChange(${i},this.value)" style="width:110px"></td>
      <td><strong>${line.total ? fmtUSD(line.total) : '—'}</strong></td>
      <td><button class="btn btn-ghost btn-sm" onclick="removeReturnLine(${i})" style="color:var(--red-600)">✕</button></td>
    </tr>`;
  }).join('');
}

function onReturnItemChange(i, itemId) {
  const type = document.getElementById('return-type')?.value || 'sale';
  const item = db.items.find(it=>it.id===itemId);
  returnLines[i].itemId = itemId;
  returnLines[i].unitType = 'unit'; // reset للوحدة الأساسية
  returnLines[i].price = item ? (type === 'sale' ? item.price : item.cost) : 0;
  returnLines[i].total = returnLines[i].price * returnLines[i].qty;
  renderReturnLines(); renderReturnTotal();
}
function onReturnUnitChange(i, unitType) {
  const type = document.getElementById('return-type')?.value || 'sale';
  const item = db.items.find(it=>it.id===returnLines[i].itemId);
  if(!item) return;
  returnLines[i].unitType = unitType;
  const basePrice = type === 'sale' ? item.price : item.cost;
  if(unitType === 'unit2') {
    returnLines[i].price = basePrice * (item.factor || 1);
  } else {
    returnLines[i].price = basePrice;
  }
  returnLines[i].total = returnLines[i].price * returnLines[i].qty;
  renderReturnLines(); renderReturnTotal();
}
function onReturnQtyChange(i, qty) {
  returnLines[i].qty = parseFloat(qty)||0;
  returnLines[i].total = returnLines[i].price * returnLines[i].qty;
  renderReturnLines(); renderReturnTotal();
}
function onReturnPriceChange(i, price) {
  returnLines[i].price = parseFloat(price)||0;
  returnLines[i].total = returnLines[i].price * returnLines[i].qty;
  renderReturnLines(); renderReturnTotal();
}
function removeReturnLine(i) {
  returnLines.splice(i,1);
  if(returnLines.length===0) returnLines.push({itemId:'',qty:1,price:0,total:0});
  renderReturnLines(); renderReturnTotal();
}
function addReturnLine() {
  returnLines.push({itemId:'',qty:1,price:0,total:0});
  renderReturnLines();
}
function renderReturnTotal() {
  const total = returnLines.reduce((s,l)=>s+l.total,0);
  const el = document.getElementById('return-total');
  if(el) el.textContent = fmtUSD(total);
  const eqEl = document.getElementById('return-total-equiv');
  if(eqEl) eqEl.innerHTML = '<span style="color:var(--text-muted);font-size:13px">' + fmtOld(usdToOld(total)) + ' | ' + fmtNew(usdToNew(total)) + '</span>';
}

function saveReturn() {
  const lines = returnLines.filter(l=>l.itemId&&l.qty>0);
  if(lines.length===0){ showToast('أضف مادة واحدة على الأقل','error'); return; }
  const type = document.getElementById('return-type').value;
  const total = lines.reduce((s,l)=>s+l.total,0);
  const party = type === 'sale'
    ? document.getElementById('return-customer-input').value.trim()
    : document.getElementById('return-supplier-input').value.trim();
  const date = document.getElementById('return-date').value;
  const note = document.getElementById('return-note').value.trim();
  const numEl = document.getElementById('return-inv-num');
  const number = numEl ? numEl.textContent : ('RET-' + Date.now());

  if(!db.returns) db.returns = [];
  const ret = { number, type, date, party, lines, total, note };
  db.returns.push(ret);

  // إعادة المخزون — رد البيع يزيد المخزون، رد الشراء ينقصه
  // (المخزون يحسب تلقائياً من calcInventory)

  saveData(db);
  returnLines = [{itemId:'',qty:1,price:0,total:0}];
  // مسح اسم الزبون أو المورد بعد الحفظ
  const custInput = document.getElementById('return-customer-input');
  const suppInput = document.getElementById('return-supplier-input');
  if(custInput) custInput.value = '';
  if(suppInput) suppInput.value = '';
  showToast('✅ تم حفظ المرتجع ' + number, 'success');
  renderReturns();
}

function renderReturnsList() {
  const el = document.getElementById('returns-list');
  if(!el) return;
  const returns = (db.returns || []).slice().reverse();
  const searchVal = (document.getElementById('returns-search')?.value||'').toLowerCase().trim();
  const typeFilter = document.getElementById('returns-type-filter')?.value || 'all';
  const filtered = returns.filter(r => {
    const matchType = typeFilter === 'all' || r.type === typeFilter;
    const matchSearch = !searchVal || (r.number||'').toLowerCase().includes(searchVal) || (r.party||'').toLowerCase().includes(searchVal);
    return matchType && matchSearch;
  });
  const countEl = document.getElementById('returns-count');
  if(countEl) countEl.textContent = filtered.length + ' مرتجع';
  if(filtered.length === 0) {
    el.innerHTML = '<div class="empty-state">لا توجد مرتجعات بعد</div>';
    return;
  }
  el.innerHTML = filtered.map(r =>
    '<div class="invoice-row" onclick="printReturnInvoice(\'' + r.number + '\')" style="cursor:pointer" title="اضغط للطباعة">' +
    '<span class="inv-num">' + r.number + '</span>' +
    '<span class="inv-customer">' + (r.party||'—') + '</span>' +
    '<span class="inv-type ' + (r.type==='sale'?'type-sale':'type-purchase') + '">' + (r.type==='sale'?'رد بيع':'رد شراء') + '</span>' +
    '<span class="inv-total">' + fmtUSD(r.total) + '</span>' +
    '<span class="inv-date">' + r.date + '</span>' +
    '</div>'
  ).join('');
}

function printReturnInvoice(number) {
  const ret = (db.returns||[]).find(r=>r.number===number);
  if(!ret) return;
  const linesHTML = ret.lines.map((l,i) => {
    const item = db.items.find(it=>it.id===l.itemId);
    return `<tr>
      <td style="padding:8px;border:1px solid #ddd;text-align:center">${i+1}</td>
      <td style="padding:8px;border:1px solid #ddd">${item?.name||l.itemId}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center">${item?.unit||''}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center">${l.qty}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center">${fmtUSD(l.price)}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center;font-weight:bold">${fmtUSD(l.total)}</td>
    </tr>`;
  }).join('');
  const win = window.open('','_blank');
  win.document.write(`<!DOCTYPE html>
<html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>مرتجع ${ret.number}</title>
<style>
  body{font-family:'Segoe UI',Tahoma,Arial,sans-serif;margin:0;padding:20px;color:#1a1a1a;}
  .header{background:#dc2626;color:white;padding:20px;border-radius:8px;margin-bottom:20px;text-align:center;}
  .header h1{margin:0;font-size:22px;}
  .header p{margin:4px 0;font-size:12px;opacity:0.85;}
  .badge{background:#fef2f2;color:#dc2626;padding:6px 16px;border-radius:6px;font-weight:700;font-size:15px;display:inline-block;margin-bottom:16px;}
  .info{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;}
  .info-box{background:#f8f9fa;padding:10px;border-radius:6px;border-right:3px solid #dc2626;}
  .info-box label{font-size:11px;color:#666;display:block;}
  .info-box span{font-size:14px;font-weight:600;}
  table{width:100%;border-collapse:collapse;margin-bottom:16px;}
  thead th{background:#dc2626;color:white;padding:8px;text-align:center;font-size:12px;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
  .total-box{background:#dc2626;color:white;padding:14px 20px;border-radius:8px;text-align:center;display:inline-block;min-width:180px;}
  .note{background:#fef2f2;padding:10px;border-radius:6px;font-size:13px;margin-top:12px;}
  @media print{body{padding:10px;}}
</style></head><body>
<div class="header">
  <h1>${db.company.name}</h1>
  <p>${db.company.address}${db.company.phone?' | ☎ '+db.company.phone:''}</p>
</div>
<div style="text-align:center;margin-bottom:16px;">
  <span class="badge">🔄 ${ret.type==='sale'?'مرتجع بيع':'مرتجع شراء'} — ${ret.number}</span>
</div>
<div class="info">
  <div class="info-box"><label>${ret.type==='sale'?'الزبون':'المورد'}</label><span>${ret.party||'—'}</span></div>
  <div class="info-box"><label>التاريخ</label><span>${ret.date}</span></div>
</div>
<table>
  <thead><tr><th>#</th><th>المادة</th><th>الوحدة</th><th>الكمية</th><th>السعر</th><th>الإجمالي</th></tr></thead>
  <tbody>${linesHTML}</tbody>
</table>
<div style="text-align:left;margin-top:8px;">
  <div class="total-box"><div style="font-size:11px;opacity:0.8;">الإجمالي</div><div style="font-size:20px;font-weight:700;">${fmtUSD(ret.total)}</div></div>
</div>
${ret.note?'<div class="note">📝 ملاحظة: '+ret.note+'</div>':''}
<div style="text-align:center;margin-top:24px;font-size:11px;color:#94a3b8;border-top:1px solid #eee;padding-top:8px;">${db.company.slogan}</div>
<script>window.onload=()=>window.print();<\/script>
</body></html>`);
  win.document.close();
}


// ============================================================
// تعديل كلمة السر
// ============================================================
function togglePassField(fieldId, btn) {
  const inp = document.getElementById(fieldId);
  if (inp.type === 'password') {
    inp.type = 'text';
    btn.textContent = '🙈';
  } else {
    inp.type = 'password';
    btn.textContent = '👁️';
  }
}

function changePassword() {
  const currentPass = document.getElementById('pass-current').value;
  const newPass = document.getElementById('pass-new').value;
  const confirmPass = document.getElementById('pass-confirm').value;

  // تحقق من الحقول
  if (!currentPass || !newPass || !confirmPass) {
    showToast('يرجى تعبئة جميع الحقول', 'error'); return;
  }
  if (newPass.length < 4) {
    showToast('كلمة السر الجديدة يجب أن تكون 4 أحرف على الأقل', 'error'); return;
  }
  if (newPass !== confirmPass) {
    showToast('كلمة السر الجديدة وتأكيدها غير متطابقتين', 'error'); return;
  }

  // تحقق من كلمة السر الحالية
  const currentHash = btoa(unescape(encodeURIComponent(currentPass)));
  const storedHash = localStorage.getItem('app_password') || btoa(unescape(encodeURIComponent('Ali#1997')));

  if (currentHash !== storedHash) {
    showToast('❌ كلمة السر الحالية غير صحيحة', 'error');
    document.getElementById('pass-current').value = '';
    return;
  }

  // حفظ كلمة السر الجديدة
  const newHash = btoa(unescape(encodeURIComponent(newPass)));
  localStorage.setItem('app_password', newHash);

  // مسح الحقول
  document.getElementById('pass-current').value = '';
  document.getElementById('pass-new').value = '';
  document.getElementById('pass-confirm').value = '';

  showToast('✅ تم تغيير كلمة السر بنجاح', 'success');
}

// ============================================================
// SETUP SCREEN — يظهر مرة واحدة فقط
// ============================================================
function resetBusinessType() {
  const ADMIN_HASH = btoa(unescape(encodeURIComponent('AdminAli1997')));
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;font-family:inherit;';
  overlay.innerHTML = `
    <div style="background:#fff;border-radius:16px;padding:32px;width:380px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.3);">
      <div style="font-size:40px;margin-bottom:12px;">🔐</div>
      <h3 style="margin:0 0 8px;font-size:18px;color:#0f172a;">إعادة اختيار نوع النشاط</h3>
      <p style="margin:0 0 16px;font-size:14px;color:#64748b;">أدخل كلمة سر المدير للمتابعة</p>
      <input id="rbt-pass" type="password" placeholder="كلمة السر" style="width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;font-family:inherit;margin-bottom:8px;box-sizing:border-box;text-align:right;">
      <div id="rbt-error" style="color:#ef4444;font-size:12px;margin-bottom:12px;display:none;">❌ كلمة السر غير صحيحة</div>
      <div style="display:flex;gap:12px;justify-content:center;">
        <button id="rbt-cancel" style="padding:10px 24px;border-radius:8px;border:1px solid #e2e8f0;background:#f8fafc;font-size:14px;cursor:pointer;font-family:inherit;">إلغاء</button>
        <button id="rbt-confirm" style="padding:10px 24px;border-radius:8px;border:none;background:#7c3aed;color:#fff;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">تأكيد</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  document.getElementById('rbt-cancel').onclick = () => document.body.removeChild(overlay);
  document.getElementById('rbt-pass').onkeydown = (e) => { if(e.key==='Enter') document.getElementById('rbt-confirm').click(); };
  document.getElementById('rbt-confirm').onclick = () => {
    const input = document.getElementById('rbt-pass').value;
    const inputHash = btoa(unescape(encodeURIComponent(input)));
    if(inputHash !== ADMIN_HASH) {
      document.getElementById('rbt-error').style.display = 'block';
      document.getElementById('rbt-pass').value = '';
      document.getElementById('rbt-pass').focus();
      return;
    }
    document.body.removeChild(overlay);
    localStorage.removeItem('business_type');
    showSetupScreen();
    showToast('اختر نوع النشاط الجديد', 'success');
  };
}

function checkSetup() {
  const chosen = localStorage.getItem('business_type');
  if (chosen) return; // سبق وتم الاختيار
  showSetupScreen();
}

function showSetupScreen() {
  const overlay = document.getElementById('setup-screen');
  if (overlay) {
    overlay.classList.remove('hidden');
    overlay.style.display = 'flex';
  }
}

function selectBusiness(type) {
  // حفظ الاختيار
  localStorage.setItem('business_type', type);

  // تحميل المواد الافتراضية
  const items = BUSINESS_ITEMS[type];
  if (items && items.length > 0) {
    db.items = JSON.parse(JSON.stringify(items));
    saveData(db);
  }

  // إخفاء الشاشة
  const overlay = document.getElementById('setup-screen');
  if (overlay) overlay.classList.add('hidden');

  const info = BUSINESS_LABELS[type];
  showToast('✅ تم اختيار: ' + info.icon + ' ' + info.label, 'success');
  navigate('dashboard');
}

// ============================================================
// INIT
// ============================================================
// ============================================================
// LOGIN + INIT
// ============================================================
const PASS_HASH = btoa(unescape(encodeURIComponent('Ali#1997')));

function checkLogin() {
  const input = document.getElementById('login-password').value;
  const inputHash = btoa(unescape(encodeURIComponent(input)));
  const storedHash = localStorage.getItem('app_password') || PASS_HASH;
  const btn = document.getElementById('login-btn');
  if (inputHash === storedHash) {
    btn.style.background = 'linear-gradient(135deg,#10b981,#059669)';
    btn.textContent = '✓ جاري الدخول...';
    setTimeout(() => {
      document.getElementById('login-screen').style.display = 'none';
      sessionStorage.setItem('auth', '1');
      initApp();
    }, 400);
  } else {
    document.getElementById('login-error').style.display = 'block';
    document.getElementById('login-password').value = '';
    document.getElementById('login-password').focus();
    const screen = document.getElementById('login-screen');
    screen.style.animation = 'none';
    document.querySelector('#login-screen > div:nth-child(3)').style.animation = 'shake 0.4s ease';
    setTimeout(() => {
      document.querySelector('#login-screen > div:nth-child(3)').style.animation = '';
    }, 400);
  }
}

async function initApp() {
  await initDB();
  if(!db.exchange) db.exchange = { usdToOld: 12000 };
  const hdr = document.getElementById('company-name-header');
  if (hdr) hdr.value = db.company.name;
  updateRateWidget();
  navigate('dashboard');
  checkSetup();
}

window.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('auth') === '1') {
    document.getElementById('login-screen').style.display = 'none';
    initApp();
  }
});

// طباعة الفاتورة الحالية المفتوحة
function printCurrentInvoice() {
  const num = document.getElementById('sale-inv-num')?.textContent;
  // Get last saved invoice or build preview from current lines
  const lines = saleLines.filter(l=>l.itemId&&l.qty>0);
  if(lines.length===0){showToast('أضف مادة أولاً ثم احفظ الفاتورة للطباعة','error');return;}
  const subtotal = lines.reduce((s,l)=>s+l.total,0);
  const discount = parseFloat(document.getElementById('sale-discount')?.value||0);
  const total = subtotal*(1-discount/100);
  const customerName = document.getElementById('sale-customer-input')?.value||'';
  const date = document.getElementById('sale-date')?.value||'';
  const fakeInv = { number:num, date, customerName, lines, subtotal, discount, total };
  // Temporarily add to salesInvoices for print
  db.salesInvoices.push(fakeInv);
  printInvoice(num);
  db.salesInvoices.pop();
}

// ============================================================
// عرض تفاصيل الفاتورة + تعديلها
// ============================================================
function openInvoiceDetail(number) {
  const inv = db.salesInvoices.find(i=>i.number===number) ||
              db.purchaseInvoices.find(i=>i.number===number);
  if(!inv) return;
  const isSale = !!db.salesInvoices.find(i=>i.number===number);

  // Fill modal
  document.getElementById('detail-inv-number').textContent = number;
  document.getElementById('detail-inv-type').textContent = isSale ? '🧾 فاتورة بيع' : '🛒 فاتورة شراء';
  document.getElementById('detail-inv-type').className = 'inv-type ' + (isSale ? 'type-sale' : 'type-purchase');
  document.getElementById('detail-date').value = inv.date;
  document.getElementById('detail-party-label').textContent = isSale ? 'اسم الزبون' : 'المورد';
  document.getElementById('detail-party').value = inv.customerName || inv.supplierName || '';
  document.getElementById('detail-discount-row').style.display = isSale ? '' : 'none';
  document.getElementById('detail-discount').value = inv.discount || 0;

  // Lines
  renderDetailLines(inv, isSale);

  // Store current invoice ref
  document.getElementById('invoice-detail-modal').dataset.number = number;
  document.getElementById('invoice-detail-modal').dataset.type = isSale ? 'sale' : 'purchase';
  document.getElementById('invoice-detail-modal').classList.remove('hidden');
}

let detailLines = [];

function renderDetailLines(inv, isSale) {
  detailLines = inv.lines.map(l => ({...l}));
  _renderDetailLinesTable(isSale);
  _calcDetailTotal(isSale);
}

function _renderDetailLinesTable(isSale) {
  const tbody = document.getElementById('detail-lines');
  tbody.innerHTML = detailLines.map((line, i) => {
    const item = db.items.find(it=>it.id===line.itemId);
    return `<tr>
      <td>${i+1}</td>
      <td>
        <select onchange="onDetailItemChange(${i},this.value)" class="input input-sm">
          <option value="">-- اختر --</option>
          ${db.items.map(it=>`<option value="${it.id}" ${it.id===line.itemId?'selected':''}>${it.id} - ${it.name}</option>`).join('')}
        </select>
      </td>
      <td><span class="text-muted">${item?.unit||''}</span></td>
      <td><input type="number" class="input input-sm" value="${line.qty}" min="0.01" step="0.01"
           onchange="onDetailQtyChange(${i},this.value)" style="width:75px"></td>
      ${isSale
        ? `<td><span class="price-display">${line.price?new Intl.NumberFormat('ar-SY').format(line.price):'—'}</span></td>`
        : `<td><input type="number" class="input input-sm" value="${line.price}" min="0"
             onchange="onDetailPriceChange(${i},this.value)" style="width:100px"></td>`
      }
      <td><strong>${line.total?new Intl.NumberFormat('ar-SY').format(line.total):'—'}</strong></td>
      <td><button class="btn btn-ghost btn-sm" onclick="removeDetailLine(${i})" style="color:var(--red-600)">✕</button></td>
    </tr>`;
  }).join('');
}

function onDetailItemChange(i, itemId) {
  const isSale = document.getElementById('invoice-detail-modal').dataset.type === 'sale';
  const item = db.items.find(it=>it.id===itemId);
  detailLines[i].itemId = itemId;
  detailLines[i].price = item ? (isSale ? item.price : item.cost) : 0;
  detailLines[i].total = detailLines[i].price * detailLines[i].qty;
  _renderDetailLinesTable(isSale); _calcDetailTotal(isSale);
}
function onDetailQtyChange(i, qty) {
  const isSale = document.getElementById('invoice-detail-modal').dataset.type === 'sale';
  detailLines[i].qty = parseFloat(qty)||0;
  detailLines[i].total = detailLines[i].price * detailLines[i].qty;
  _renderDetailLinesTable(isSale); _calcDetailTotal(isSale);
}
function onDetailPriceChange(i, price) {
  const isSale = document.getElementById('invoice-detail-modal').dataset.type === 'sale';
  detailLines[i].price = parseFloat(price)||0;
  detailLines[i].total = detailLines[i].price * detailLines[i].qty;
  _renderDetailLinesTable(isSale); _calcDetailTotal(isSale);
}
function removeDetailLine(i) {
  const isSale = document.getElementById('invoice-detail-modal').dataset.type === 'sale';
  detailLines.splice(i,1);
  if(detailLines.length===0) detailLines.push({itemId:'',qty:1,price:0,total:0});
  _renderDetailLinesTable(isSale); _calcDetailTotal(isSale);
}
function addDetailLine() {
  const isSale = document.getElementById('invoice-detail-modal').dataset.type === 'sale';
  detailLines.push({itemId:'',qty:1,price:0,total:0});
  _renderDetailLinesTable(isSale);
}
function _calcDetailTotal(isSale) {
  const subtotal = detailLines.reduce((s,l)=>s+l.total,0);
  const discount = isSale ? (parseFloat(document.getElementById('detail-discount').value)||0) : 0;
  const total = subtotal * (1 - discount/100);
  document.getElementById('detail-subtotal').textContent = new Intl.NumberFormat('ar-SY').format(subtotal);
  document.getElementById('detail-total').textContent = new Intl.NumberFormat('ar-SY').format(total);
}

function saveInvoiceDetail() {
  const modal = document.getElementById('invoice-detail-modal');
  const number = modal.dataset.number;
  const isSale = modal.dataset.type === 'sale';
  const lines = detailLines.filter(l=>l.itemId&&l.qty>0);
  if(lines.length===0){showToast('أضف مادة واحدة على الأقل','error');return;}

  const subtotal = lines.reduce((s,l)=>s+l.total,0);
  const discount = isSale ? (parseFloat(document.getElementById('detail-discount').value)||0) : 0;
  const total = subtotal*(1-discount/100);
  const party = document.getElementById('detail-party').value.trim();
  const date = document.getElementById('detail-date').value;

  if(isSale) {
    const idx = db.salesInvoices.findIndex(i=>i.number===number);
    if(idx>=0) {
      db.salesInvoices[idx] = {...db.salesInvoices[idx], date, customerName:party, lines, subtotal, discount, total};
      // Update customer if new name
      if(party && !db.customers.find(c=>c.name===party)) {
        db.customers.push({id:'CUS-'+String(db.customers.length+1).padStart(3,'0'),name:party,phone:'',address:''});
      }
    }
  } else {
    const idx = db.purchaseInvoices.findIndex(i=>i.number===number);
    if(idx>=0) {
      db.purchaseInvoices[idx] = {...db.purchaseInvoices[idx], date, supplierName:party, lines, total};
    }
  }

  saveData(db);
  modal.classList.add('hidden');
  showToast('✅ تم تحديث الفاتورة '+number,'success');
  render(currentPage);
}

function printDetailInvoice() {
  const number = document.getElementById('invoice-detail-modal').dataset.number;
  printInvoice(number);
}

function closeDetailModal() {
  document.getElementById('invoice-detail-modal').classList.add('hidden');
}


// ============================================================
// BARCODE SCAN — يضيف مادة تلقائياً عند مسح الباركود
// ============================================================
function handleBarcodeScan(page, value) {
  const code = value.trim();
  if (!code) return;
  const item = db.items.find(it => it.barcode && it.barcode === code);
  if (!item) {
    showToast('❌ لا توجد مادة بهذا الباركود: ' + code, 'error');
    // مسح الحقل
    const el = document.getElementById(page + '-barcode-input');
    if (el) el.value = '';
    return;
  }
  if (page === 'sale') {
    // ابحث عن سطر فارغ أو أضف سطر جديد
    const emptyIdx = saleLines.findIndex(l => !l.itemId);
    if (emptyIdx >= 0) {
      saleLines[emptyIdx].itemId = item.id;
      saleLines[emptyIdx].price = item.price;
      saleLines[emptyIdx].total = item.price * saleLines[emptyIdx].qty;
    } else {
      saleLines.push({ itemId: item.id, qty: 1, price: item.price, total: item.price, unitType: 'unit' });
    }
    renderSaleLines();
    renderSaleTotal();
  } else if (page === 'purchase') {
    const emptyIdx = purchaseLines.findIndex(l => !l.itemId);
    if (emptyIdx >= 0) {
      purchaseLines[emptyIdx].itemId = item.id;
      purchaseLines[emptyIdx].price = item.cost;
      purchaseLines[emptyIdx].total = item.cost * purchaseLines[emptyIdx].qty;
    } else {
      purchaseLines.push({ itemId: item.id, qty: 1, price: item.cost, total: item.cost, unitType: 'unit' });
    }
    renderPurchaseLines();
    renderPurchaseTotal();
  }
  showToast('✅ تمت إضافة: ' + item.name, 'success');
  // مسح الحقل بعد الإضافة
  const el = document.getElementById(page + '-barcode-input');
  if (el) el.value = '';
}



// ============================================================
// إيصالات القبض والدفع
// ============================================================
// ============================================================
// إيصالات القبض — مع جدول الفواتير الآجل المحدّث
// ============================================================

// ============================================================
// قبض من زبون — كامل ومترابط مع فواتير البيع الآجلة
// ============================================================

function rcPopulateCustomers() {
  var sel = document.getElementById('rc-customer');
  if(!sel) return;
  var current = sel.value;

  // الزبائن الذين عندهم فواتير آجل غير مسددة
  var custWithDebt = (db.customers||[]).filter(function(c) {
    return getDeferredInvoicesForCustomer(c.name).length > 0;
  });

  sel.innerHTML = '<option value="">-- اختر زبون --</option>';
  custWithDebt.forEach(function(c) {
    var acc = getCustomerAccount(c.name);
    var opt = document.createElement('option');
    opt.value = c.name;
    opt.textContent = c.name + '  (متبقي: ' + fmtUSD(acc.remaining) + ')';
    if(c.name === current) opt.selected = true;
    sel.appendChild(opt);
  });

  // إذا ما في زبائن آجل
  if(custWithDebt.length === 0) {
    sel.innerHTML = '<option value="">لا يوجد زبائن بفواتير آجلة</option>';
  }
}

function getDeferredInvoicesForCustomer(customerName) {
  return (db.salesInvoices||[]).filter(function(inv) {
    if(inv.customerName !== customerName) return false;
    if((inv.paymentType||'cash') !== 'deferred') return false;
    // احسب المدفوع على هذه الفاتورة
    var paid = (db.customerPayments||[])
      .filter(function(p) {
        return p.customerName === customerName &&
          (p.linkedInvoice === inv.number ||
           (p.description||'') === ('دفعة مع الفاتورة ' + inv.number));
      })
      .reduce(function(s,p) { return s + (p.amount||0) + (p.discountOnPayment||0); }, 0);
    // أضف paidAmount الأصلي من الفاتورة (المدفوع عند الإنشاء)
    var origPaid = inv.paidAmountOriginal || 0;
    return Math.max(0, inv.total - origPaid - paid) > 0.005;
  });
}

function rcGetInvoiceRemaining(inv, customerName) {
  var paid = (db.customerPayments||[])
    .filter(function(p) {
      return p.customerName === customerName &&
        (p.linkedInvoice === inv.number ||
         (p.description||'') === ('دفعة مع الفاتورة ' + inv.number));
    })
    .reduce(function(s,p) { return s + (p.amount||0) + (p.discountOnPayment||0); }, 0);
  var origPaid = inv.paidAmountOriginal || 0;
  return Math.max(0, inv.total - origPaid - paid);
}

function rcOnCustomerChange() {
  var custName = document.getElementById('rc-customer').value;
  var invSel = document.getElementById('rc-invoice');
  var details = document.getElementById('rc-invoice-details');

  invSel.innerHTML = '<option value="">-- اختر فاتورة آجلة --</option>';
  if(details) details.style.display = 'none';
  rcClearBalance();

  if(!custName) return;

  var invs = getDeferredInvoicesForCustomer(custName);
  invs.forEach(function(inv) {
    var rem = rcGetInvoiceRemaining(inv, custName);
    var opt = document.createElement('option');
    opt.value = inv.number;
    opt.textContent = inv.number + '  |  ' + inv.date + '  |  متبقي: ' + fmtUSD(rem);
    invSel.appendChild(opt);
  });

  // إذا في فاتورة وحدة بس اختارها تلقائياً
  if(invs.length === 1) {
    invSel.value = invs[0].number;
    rcOnInvoiceChange();
  }
}

function rcOnInvoiceChange() {
  var custName = document.getElementById('rc-customer').value;
  var invNum   = document.getElementById('rc-invoice').value;
  var details  = document.getElementById('rc-invoice-details');

  if(!invNum) {
    if(details) details.style.display = 'none';
    rcClearBalance();
    return;
  }

  var inv = (db.salesInvoices||[]).find(function(i){ return i.number === invNum; });
  if(!inv) return;

  var paid = inv.total - rcGetInvoiceRemaining(inv, custName);
  var rem  = rcGetInvoiceRemaining(inv, custName);

  // عرض تفاصيل الفاتورة
  document.getElementById('rc-inv-date').textContent = inv.date;
  document.getElementById('rc-inv-total').textContent = fmtUSD(inv.total);
  document.getElementById('rc-inv-paid').textContent  = fmtUSD(paid);
  document.getElementById('rc-inv-remaining').textContent = fmtUSD(rem);
  if(details) details.style.display = 'block';

  // ضع المبلغ المتبقي تلقائياً
  var amtEl = document.getElementById('rc-amount');
  if(amtEl) { amtEl.value = Math.round(rem * 100) / 100; }

  // تحديث البيان تلقائياً
  var descEl = document.getElementById('rc-desc');
  if(descEl && !descEl.value) descEl.value = 'سداد فاتورة ' + invNum;

  rcUpdatePreview();
}

function rcOnCurrencyChange() {
  var cur = document.getElementById('rc-currency').value;
  var labels = { USD: '$', SYP_OLD: 'ل.س ق', SYP_NEW: 'ل.س ج' };
  var lbl = document.getElementById('rc-currency-label');
  if(lbl) lbl.textContent = labels[cur] || '$';
  rcUpdatePreview();
}

function rcGetAmountInUSD() {
  var raw = parseFloat(document.getElementById('rc-amount')?.value || 0);
  var cur = document.getElementById('rc-currency')?.value || 'USD';
  var rate = db.exchange ? db.exchange.usdToOld : 12000;
  if(cur === 'SYP_OLD') return raw / rate;
  if(cur === 'SYP_NEW') return raw / (rate / 100);
  return raw;
}

function rcUpdatePreview() {
  var usd = rcGetAmountInUSD();
  var prev = document.getElementById('rc-amount-preview');
  if(!prev) return;

  if(!usd || usd <= 0) {
    prev.style.display = 'none';
    rcClearBalance();
    return;
  }

  prev.style.display = 'block';
  var rate = db.exchange ? db.exchange.usdToOld : 12000;
  document.getElementById('rc-prev-usd').textContent = fmtUSD(usd);
  document.getElementById('rc-prev-old').textContent = fmtOld(usd * rate);
  document.getElementById('rc-prev-new').textContent = fmtNew(usd * rate / 100);

  // الرصيد بعد الدفع
  var custName = document.getElementById('rc-customer')?.value;
  var invNum   = document.getElementById('rc-invoice')?.value;
  var balEl    = document.getElementById('rc-balance-after');
  if(!balEl) return;

  if(custName && invNum) {
    var inv = (db.salesInvoices||[]).find(function(i){ return i.number === invNum; });
    if(inv) {
      var rem = rcGetInvoiceRemaining(inv, custName);
      var after = Math.max(0, rem - usd);
      balEl.textContent = fmtUSD(after) + '  |  ' + fmtOld(after * rate);
      balEl.style.background = after < 0.01 ? '#f0fdf4' : '#fef2f2';
      balEl.style.color      = after < 0.01 ? '#16a34a' : '#dc2626';
      balEl.style.borderColor= after < 0.01 ? '#bbf7d0' : '#fecaca';
    }
  } else if(custName) {
    var acc = getCustomerAccount(custName);
    var after2 = Math.max(0, acc.remaining - usd);
    balEl.textContent = fmtUSD(after2) + '  |  ' + fmtOld(after2 * rate);
    balEl.style.background  = after2 < 0.01 ? '#f0fdf4' : '#fef2f2';
    balEl.style.color       = after2 < 0.01 ? '#16a34a' : '#dc2626';
    balEl.style.borderColor = after2 < 0.01 ? '#bbf7d0' : '#fecaca';
  }
}

function rcClearBalance() {
  var el = document.getElementById('rc-balance-after');
  if(el) { el.textContent='—'; el.style.background='#fef2f2'; el.style.color='#dc2626'; el.style.borderColor='#fecaca'; }
  var prev = document.getElementById('rc-amount-preview');
  if(prev) prev.style.display='none';
}

function rcClear() {
  var els = ['rc-customer','rc-invoice','rc-amount','rc-desc','rc-cheque','rc-note'];
  els.forEach(function(id){
    var el = document.getElementById(id);
    if(!el) return;
    if(el.tagName === 'SELECT') el.value = '';
    else el.value = '';
  });
  var det = document.getElementById('rc-invoice-details');
  if(det) det.style.display = 'none';
  if(document.getElementById('rc-currency')) document.getElementById('rc-currency').value = 'USD';
  var lbl = document.getElementById('rc-currency-label');
  if(lbl) lbl.textContent = '$';
  rcClearBalance();
  rcPopulateCustomers();
}

function rcSave() {
  var custName = document.getElementById('rc-customer')?.value?.trim();
  var invNum   = document.getElementById('rc-invoice')?.value;
  var amountUSD = rcGetAmountInUSD();
  var date     = document.getElementById('rc-date')?.value || new Date().toISOString().split('T')[0];
  var method   = document.getElementById('rc-method')?.value || 'cash';
  var desc     = document.getElementById('rc-desc')?.value || '';
  var cheque   = document.getElementById('rc-cheque')?.value || '';
  var note     = document.getElementById('rc-note')?.value || '';
  var cur      = document.getElementById('rc-currency')?.value || 'USD';
  var rawAmt   = parseFloat(document.getElementById('rc-amount')?.value||0);

  if(!custName){ showToast('اختر اسم الزبون','error'); return; }
  if(!amountUSD || amountUSD <= 0){ showToast('أدخل قيمة الدفعة','error'); return; }

  // تحقق ما تتجاوز المتبقي
  if(invNum) {
    var inv = (db.salesInvoices||[]).find(function(i){ return i.number === invNum; });
    if(inv) {
      var rem = rcGetInvoiceRemaining(inv, custName);
      if(amountUSD > rem + 0.005) {
        showToast('المبلغ أكبر من المتبقي على الفاتورة (' + fmtUSD(rem) + ')','error');
        return;
      }
    }
  }

  db.invoiceCounters.receipt = (db.invoiceCounters.receipt||0) + 1;
  var receiptNum = 'REC-' + String(db.invoiceCounters.receipt).padStart(3,'0');

  // سجّل الدفعة
  db.customerPayments = db.customerPayments || [];
  db.customerPayments.push({
    receiptNum:       receiptNum,
    customerName:     custName,
    amount:           amountUSD,
    rawAmount:        rawAmt,
    currency:         cur,
    paymentMethod:    method,
    chequeNum:        cheque,
    description:      desc || (invNum ? 'سداد فاتورة ' + invNum : 'دفعة'),
    discountOnPayment:0,
    note:             note,
    date:             date,
    linkedInvoice:    invNum || ''
  });

  saveData(db);

  var acc = getCustomerAccount(custName);
  showToast('✅ تم حفظ الإيصال ' + receiptNum + ' — المتبقي: ' + fmtUSD(acc.remaining), 'success');

  rcClear();
  renderReceiptCustomer();
}

function rcRenderList() {
  var el = document.getElementById('rc-list');
  if(!el) return;
  var list = (db.customerPayments||[]).slice().sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  }).slice(0,20);

  var countEl = document.getElementById('rc-list-count');
  if(countEl) countEl.textContent = (db.customerPayments||[]).length + ' إيصال';

  if(list.length === 0) {
    el.innerHTML = '<div class="empty-state">لا توجد إيصالات قبض بعد</div>';
    return;
  }

  el.innerHTML = list.map(function(p) {
    return '<div class="invoice-row" style="cursor:default;">' +
      '<span class="inv-num">' + (p.receiptNum||'—') + '</span>' +
      '<span class="inv-customer">' + (p.customerName||'—') + '</span>' +
      (p.linkedInvoice
        ? '<span style="font-size:11px;background:#EBF3FB;color:#1F3864;padding:2px 8px;border-radius:10px;">' + p.linkedInvoice + '</span>'
        : '<span style="font-size:11px;color:var(--text-muted);">—</span>') +
      '<span class="inv-type type-sale">قبض</span>' +
      '<span class="inv-total">' + fmtUSD(p.amount) + '</span>' +
      '<span class="inv-date">' + (p.date||'') + '</span>' +
    '</div>';
  }).join('');
}

function rcPrint() {
  var custName  = document.getElementById('rc-customer')?.value;
  var invNum    = document.getElementById('rc-invoice')?.value;
  var amountUSD = rcGetAmountInUSD();
  var date      = document.getElementById('rc-date')?.value || '';
  var desc      = document.getElementById('rc-desc')?.value || '';
  var method    = document.getElementById('rc-method')?.value || 'cash';
  var methodLabel = {cash:'نقداً', cheque:'شيك', transfer:'حوالة'}[method]||'نقداً';
  var rate      = db.exchange ? db.exchange.usdToOld : 12000;

  if(!custName || !amountUSD){ showToast('أدخل الزبون والمبلغ أولاً','error'); return; }

  var acc   = getCustomerAccount(custName);
  var after = Math.max(0, acc.remaining - amountUSD);
  var numEl = document.getElementById('rc-num');
  var recNum = numEl ? numEl.textContent : 'REC-PREVIEW';

  var win = window.open('','_blank');
  win.document.write('<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8">' +
    '<title>إيصال قبض ' + recNum + '</title>' +
    '<style>body{font-family:Segoe UI,Tahoma,Arial,sans-serif;margin:0;padding:20px;direction:rtl;}' +
    '.hdr{background:#1F3864;color:white;padding:16px 20px;border-radius:8px;margin-bottom:16px;text-align:center;}' +
    '.hdr h2{margin:0;font-size:20px;}.hdr p{margin:4px 0 0;font-size:12px;opacity:.85;}' +
    '.row{display:grid;grid-template-columns:140px 1fr 140px 1fr;gap:8px;margin-bottom:10px;align-items:center;border-bottom:1px dashed #e2e8f0;padding-bottom:8px;}' +
    '.lbl{font-size:12px;color:#64748b;font-weight:600;}.val{font-size:14px;font-weight:600;color:#1a1a1a;}' +
    '.total-box{background:#1F3864;color:white;padding:16px;border-radius:8px;text-align:center;margin:16px 0;}' +
    '.signs{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:30px;}' +
    '.sign{text-align:center;border-top:1px solid #ccc;padding-top:8px;font-size:12px;color:#666;}' +
    '@media print{body{padding:10px;}}</style></head><body>' +
    '<div class="hdr"><h2>🧾 إيصال قبض</h2><p>' + db.company.name + '</p></div>' +
    '<div class="row"><span class="lbl">رقم السند</span><span class="val" style="color:#1F3864">' + recNum + '</span>' +
      '<span class="lbl">التاريخ</span><span class="val">' + date + '</span></div>' +
    '<div class="row"><span class="lbl">اسم الزبون</span><span class="val">' + custName + '</span>' +
      '<span class="lbl">طريقة الدفع</span><span class="val">' + methodLabel + '</span></div>' +
    (invNum ? '<div class="row"><span class="lbl">الفاتورة</span><span class="val" style="color:#1F3864">' + invNum + '</span>' +
      '<span class="lbl">البيان</span><span class="val">' + (desc||'—') + '</span></div>' : '') +
    '<div class="total-box">' +
      '<div style="font-size:12px;opacity:.8;">المبلغ المقبوض</div>' +
      '<div style="font-size:28px;font-weight:700;">' + fmtUSD(amountUSD) + '</div>' +
      '<div style="font-size:13px;opacity:.85;margin-top:4px;">' + fmtOld(amountUSD * rate) + '  |  ' + fmtNew(amountUSD * rate / 100) + '</div>' +
    '</div>' +
    '<div class="row"><span class="lbl">الرصيد السابق</span><span class="val" style="color:#dc2626">' + fmtUSD(acc.remaining) + '</span>' +
      '<span class="lbl">الرصيد بعد الإيصال</span><span class="val" style="color:' + (after<0.01?'#16a34a':'#dc2626') + '">' + fmtUSD(after) + '</span></div>' +
    '<div class="signs"><div class="sign">توقيع المحاسب</div><div class="sign">توقيع الزبون</div></div>' +
    '<script>window.onload=function(){window.print();};<\/script></body></html>');
  win.document.close();
}

function renderDeferredSuppliers() {
  var el = document.getElementById('rec-deferred-suppliers');
  if(!el) return;

  var debtors = (db.suppliers||[])
    .map(function(s){ return Object.assign({}, s, {acc: getSupplierAccount(s.name)}); })
    .filter(function(s){ return s.acc.remaining > 0; })
    .sort(function(a,b){ return b.acc.remaining - a.acc.remaining; });

  if(debtors.length === 0) {
    el.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-muted);background:#f0fdf4;border-radius:8px;font-size:13px;">✅ لا توجد مستحقات للموردين</div>';
    return;
  }

  var html = '';
  debtors.forEach(function(s) {
    var deferredInvs = s.acc.deferredInvoices || [];
    var rowsHTML = '';
    deferredInvs.forEach(function(inv) {
      var paidOnInv = (db.supplierPayments||[])
        .filter(function(p){
          return p.supplierName === s.name &&
            (p.linkedInvoice === inv.number || (p.description||'') === ('دفعة مع الفاتورة ' + inv.number));
        })
        .reduce(function(sum,p){ return sum + (p.amount||0); }, 0);
      var invRem = Math.max(0, inv.total - paidOnInv);
      if(invRem <= 0) return;
      rowsHTML += '<tr style="border-bottom:1px solid #e2e8f0;">' +
        '<td style="padding:7px 10px;font-weight:600;color:#15803d;font-size:12px;">' + inv.number + '</td>' +
        '<td style="padding:7px 10px;color:var(--text-muted);font-size:12px;">' + inv.date + '</td>' +
        '<td style="padding:7px 10px;font-size:12px;">' + fmtUSD(inv.total) + '</td>' +
        '<td style="padding:7px 10px;color:#16a34a;font-size:12px;">' + fmtUSD(paidOnInv) + '</td>' +
        '<td style="padding:7px 10px;color:#dc2626;font-weight:700;font-size:12px;">' + fmtUSD(invRem) + '</td>' +
        '<td style="padding:7px 10px;text-align:center;">' +
          '<button data-sname="' + s.name + '" data-invnum="' + inv.number + '" data-invrem="' + invRem + '" ' +
            'onclick="paySupplierInvoiceAmountBtn(this)" ' +
            'style="padding:4px 12px;font-size:11px;background:#15803d;color:white;border:none;border-radius:6px;cursor:pointer;font-weight:600;">دفع</button>' +
        '</td>' +
        '</tr>';
    });
    if(!rowsHTML) return;
    html += '<div style="margin-bottom:10px;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">' +
      '<div data-sname="' + s.name + '" data-srem="' + s.acc.remaining + '" onclick="selectDeferredSupplierBtn(this)" ' +
        'style="background:#15803d;color:white;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;">' +
        '<span style="font-weight:700;font-size:13px;">🏭 ' + s.name + '</span>' +
        '<div style="display:flex;gap:12px;align-items:center;font-size:12px;">' +
          '<span>إجمالي الآجل: ' + fmtUSD(s.acc.totalDeferred) + '</span>' +
          '<span style="background:#dc2626;padding:3px 10px;border-radius:10px;font-weight:700;">المتبقي: ' + fmtUSD(s.acc.remaining) + '</span>' +
        '</div>' +
      '</div>' +
      '<table style="width:100%;border-collapse:collapse;">' +
        '<thead><tr style="background:#f0fdf4;">' +
          '<th style="padding:6px 10px;text-align:right;font-size:11px;color:#64748b;font-weight:600;">رقم الفاتورة</th>' +
          '<th style="padding:6px 10px;text-align:right;font-size:11px;color:#64748b;font-weight:600;">التاريخ</th>' +
          '<th style="padding:6px 10px;text-align:right;font-size:11px;color:#64748b;font-weight:600;">الإجمالي</th>' +
          '<th style="padding:6px 10px;text-align:right;font-size:11px;color:#64748b;font-weight:600;">المدفوع</th>' +
          '<th style="padding:6px 10px;text-align:right;font-size:11px;color:#64748b;font-weight:600;">المتبقي</th>' +
          '<th style="padding:6px 10px;text-align:center;font-size:11px;color:#64748b;font-weight:600;">دفع</th>' +
        '</tr></thead>' +
        '<tbody>' + rowsHTML + '</tbody>' +
      '</table>' +
    '</div>';
  });
  el.innerHTML = html || '<div style="padding:20px;text-align:center;color:var(--text-muted);background:#f0fdf4;border-radius:8px;font-size:13px;">✅ كل الفواتير مسددة</div>';
}

function paySupplierInvoiceAmountBtn(btn) {
  paySupplierInvoiceAmount(btn.dataset.sname, btn.dataset.invnum, parseFloat(btn.dataset.invrem));
}
function selectDeferredSupplierBtn(el) {
  selectDeferredSupplier(el.dataset.sname, parseFloat(el.dataset.srem));
}
function paySupplierInvoiceAmount(supplierName, invoiceNumber, remaining) {
  const nameEl = document.getElementById('rec-sup-name');
  const amtEl  = document.getElementById('rec-sup-amount');
  const descEl = document.getElementById('rec-sup-desc');
  if(nameEl) nameEl.value = supplierName;
  if(amtEl)  amtEl.value  = Math.round(remaining * 100) / 100;
  if(descEl) descEl.value = 'سداد فاتورة ' + invoiceNumber;
  document.getElementById('rec-sup-amount').dataset.linkedInvoice = invoiceNumber;
  document.getElementById('rec-sup-name')?.scrollIntoView({ behavior:'smooth', block:'center' });
}

function selectDeferredSupplier(name, remaining) {
  const nameEl = document.getElementById('rec-sup-name');
  const amtEl  = document.getElementById('rec-sup-amount');
  if(nameEl) nameEl.value = name;
  if(amtEl)  { amtEl.value = Math.round(remaining * 100) / 100; amtEl.dataset.linkedInvoice = ''; }
  document.getElementById('rec-sup-name')?.scrollIntoView({ behavior:'smooth', block:'center' });
}

function renderReceiptSupplierList() {
  const el = document.getElementById('rec-sup-list');
  if(!el) return;
  const list = (db.supplierPayments||[]).slice().sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,20);
  if(list.length===0){ el.innerHTML='<div class="empty-state">لا توجد إيصالات دفع بعد</div>'; return; }
  el.innerHTML = list.map(p=>`
    <div class="invoice-row">
      <span class="inv-num">${p.receiptNum||'—'}</span>
      <span class="inv-customer">${p.supplierName||'—'}</span>
      <span class="inv-type type-purchase">دفع</span>
      <span class="inv-total">${fmtUSD(p.amount)}</span>
      <span class="inv-date">${p.date||''}</span>
      ${p.linkedInvoice ? `<span style="font-size:11px;color:#15803d;background:#f0fdf4;padding:2px 6px;border-radius:10px">${p.linkedInvoice}</span>` : ''}
    </div>`).join('');
}

// ============================================================
// دوال مساعدة لصفحتي الإيصالات
// ============================================================

function onCustNameInput(name) {
  updateCustBalance();
  // لو اختار زبون موجود - اعرض فواتيره
  if(db.customers.find(c=>c.name===name)) {
    renderDeferredCustomers();
  }
}

function printReceiptCustomer() {
  const customerName = document.getElementById('rec-cust-name')?.value?.trim();
  const amount = parseFloat(document.getElementById('rec-cust-amount')?.value||0);
  if(!customerName||!amount){ showToast('أدخل اسم الزبون والمبلغ أولاً','error'); return; }
  const date = document.getElementById('rec-cust-date')?.value||new Date().toISOString().split('T')[0];
  const desc = document.getElementById('rec-cust-desc')?.value||'';
  const method = document.getElementById('rec-cust-method')?.value||'cash';
  const methodLabel = {cash:'نقداً', cheque:'شيك', transfer:'حوالة'}[method]||'نقداً';
  const acc = getCustomerAccount(customerName);
  const discount = parseFloat(document.getElementById('rec-cust-discount')?.value||0);
  const after = Math.max(0, acc.remaining - amount - discount);
  const win = window.open('','_blank');
  win.document.write(`<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8">
<title>إيصال قبض</title>
<style>body{font-family:'Segoe UI',Tahoma,Arial,sans-serif;margin:0;padding:20px;direction:rtl;}
.header{background:#1F3864;color:white;padding:16px 20px;border-radius:8px;margin-bottom:16px;text-align:center;}
.row{display:grid;grid-template-columns:150px 1fr 150px 1fr;gap:8px;margin-bottom:10px;align-items:center;border-bottom:1px dashed #e2e8f0;padding-bottom:8px;}
.lbl{font-size:12px;color:#64748b;font-weight:600;}
.val{font-size:14px;font-weight:600;color:#1a1a1a;}
.total{background:#1F3864;color:white;padding:16px;border-radius:8px;text-align:center;margin:16px 0;}
.signs{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:30px;}
.sign{text-align:center;border-top:1px solid #ccc;padding-top:8px;font-size:12px;color:#666;}
@media print{body{padding:10px;}}</style></head><body>
<div class="header"><h2 style="margin:0">🧾 إيصال قبض</h2><p style="margin:4px 0;font-size:12px;opacity:.85">${db.company.name}</p></div>
<div class="row"><span class="lbl">رقم السند</span><span class="val" style="color:#1F3864">REC-PREVIEW</span><span class="lbl">التاريخ</span><span class="val">${date}</span></div>
<div class="row"><span class="lbl">اسم الزبون</span><span class="val">${customerName}</span><span class="lbl">طريقة الدفع</span><span class="val">${methodLabel}</span></div>
<div class="row"><span class="lbl">البيان</span><span class="val" style="grid-column:span 3">${desc||'—'}</span></div>
<div class="total"><div style="font-size:12px;opacity:.8">المبلغ المقبوض</div><div style="font-size:28px;font-weight:700">${fmtUSD(amount)}</div><div style="font-size:13px;opacity:.85;margin-top:4px">${fmtOld(usdToOld(amount))}</div></div>
<div class="row"><span class="lbl">الرصيد السابق</span><span class="val" style="color:#dc2626">${fmtUSD(acc.remaining)}</span><span class="lbl">الرصيد بعد الإيصال</span><span class="val" style="color:${after>0?'#dc2626':'#16a34a'}">${fmtUSD(after)}</span></div>
<div class="signs"><div class="sign">توقيع المحاسب</div><div class="sign">توقيع الزبون</div></div>
<script>window.onload=()=>window.print();<\/script></body></html>`);
  win.document.close();
}

function onSupNameInput(name) {
  updateSupBalance();
  if((db.suppliers||[]).find(s=>s.name===name)) {
    renderDeferredSuppliers();
  }
}

function updateSupBalance() {
  const name   = document.getElementById('rec-sup-name')?.value?.trim();
  const amount = parseFloat(document.getElementById('rec-sup-amount')?.value||0);
  const discount= parseFloat(document.getElementById('rec-sup-discount')?.value||0);
  const el     = document.getElementById('rec-sup-balance-preview');
  if(!el) return;
  if(!name) { el.textContent = '—'; return; }
  const acc = getSupplierAccount(name);
  const after = Math.max(0, acc.remaining - amount - discount);
  el.textContent = fmtUSD(after) + ' | ' + fmtOld(usdToOld(after));
  el.style.color = after > 0 ? '#dc2626' : '#16a34a';
  el.style.background = after > 0 ? '#fef2f2' : '#f0fdf4';
  el.style.borderColor = after > 0 ? '#fecaca' : '#bbf7d0';
}

function printReceiptSupplier() {
  const supplierName = document.getElementById('rec-sup-name')?.value?.trim();
  const amount = parseFloat(document.getElementById('rec-sup-amount')?.value||0);
  if(!supplierName||!amount){ showToast('أدخل اسم المورد والمبلغ أولاً','error'); return; }
  const date = document.getElementById('rec-sup-date')?.value||new Date().toISOString().split('T')[0];
  const desc = document.getElementById('rec-sup-desc')?.value||'';
  const method = document.getElementById('rec-sup-method')?.value||'cash';
  const methodLabel = {cash:'نقداً', cheque:'شيك', transfer:'حوالة'}[method]||'نقداً';
  const acc = getSupplierAccount(supplierName);
  const discount = parseFloat(document.getElementById('rec-sup-discount')?.value||0);
  const after = Math.max(0, acc.remaining - amount - discount);
  const win = window.open('','_blank');
  win.document.write(`<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8">
<title>إيصال دفع</title>
<style>body{font-family:'Segoe UI',Tahoma,Arial,sans-serif;margin:0;padding:20px;direction:rtl;}
.header{background:#15803d;color:white;padding:16px 20px;border-radius:8px;margin-bottom:16px;text-align:center;}
.row{display:grid;grid-template-columns:150px 1fr 150px 1fr;gap:8px;margin-bottom:10px;align-items:center;border-bottom:1px dashed #e2e8f0;padding-bottom:8px;}
.lbl{font-size:12px;color:#64748b;font-weight:600;}
.val{font-size:14px;font-weight:600;color:#1a1a1a;}
.total{background:#15803d;color:white;padding:16px;border-radius:8px;text-align:center;margin:16px 0;}
.signs{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:30px;}
.sign{text-align:center;border-top:1px solid #ccc;padding-top:8px;font-size:12px;color:#666;}
@media print{body{padding:10px;}}</style></head><body>
<div class="header"><h2 style="margin:0">💸 إيصال دفع لمورد</h2><p style="margin:4px 0;font-size:12px;opacity:.85">${db.company.name}</p></div>
<div class="row"><span class="lbl">رقم السند</span><span class="val" style="color:#15803d">PAY-PREVIEW</span><span class="lbl">التاريخ</span><span class="val">${date}</span></div>
<div class="row"><span class="lbl">اسم المورد</span><span class="val">${supplierName}</span><span class="lbl">طريقة الدفع</span><span class="val">${methodLabel}</span></div>
<div class="row"><span class="lbl">البيان</span><span class="val" style="grid-column:span 3">${desc||'—'}</span></div>
<div class="total"><div style="font-size:12px;opacity:.8">المبلغ المدفوع</div><div style="font-size:28px;font-weight:700">${fmtUSD(amount)}</div><div style="font-size:13px;opacity:.85;margin-top:4px">${fmtOld(usdToOld(amount))}</div></div>
<div class="row"><span class="lbl">الرصيد السابق</span><span class="val" style="color:#dc2626">${fmtUSD(acc.remaining)}</span><span class="lbl">الرصيد بعد الإيصال</span><span class="val" style="color:${after>0?'#dc2626':'#16a34a'}">${fmtUSD(after)}</span></div>
<div class="signs"><div class="sign">توقيع المحاسب</div><div class="sign">توقيع المورد</div></div>
<script>window.onload=()=>window.print();<\/script></body></html>`);
  win.document.close();
}

// ============================================================
// النسخ الاحتياطية
// ============================================================

// استقبال طلب النسخة التلقائية من main process
if (window.electronAPI) {
  window.electronAPI.onRequestBackupData(() => {
    const jsonStr = JSON.stringify(db);
    window.electronAPI.sendBackupData(jsonStr);
  });
}

// تصدير يدوي
async function exportBackupManual() {
  if (!window.electronAPI) { showToast('هذه الميزة تعمل فقط داخل البرنامج', 'error'); return; }
  const jsonStr = JSON.stringify(db, null, 2);
  const result = await window.electronAPI.exportBackup(jsonStr);
  if (result.success) {
    showToast('✅ تم حفظ النسخة الاحتياطية', 'success');
  } else {
    showToast('تم الإلغاء', 'error');
  }
}

// استيراد نسخة احتياطية
async function importBackupManual() {
  if (!window.electronAPI) { showToast('هذه الميزة تعمل فقط داخل البرنامج', 'error'); return; }
  if (!confirm('⚠️ سيتم استبدال البيانات الحالية بالنسخة المستوردة. هل أنت متأكد؟')) return;
  const result = await window.electronAPI.importBackup();
  if (result.success) {
    try {
      const imported = JSON.parse(result.data);
      db = imported;
      saveData(db);
      showToast('✅ تم استيراد البيانات بنجاح', 'success');
      navigate('dashboard');
    } catch(e) {
      showToast('❌ الملف غير صالح', 'error');
    }
  }
}

// عرض قائمة النسخ المحفوظة
async function showBackupsList() {
  if (!window.electronAPI) { showToast('هذه الميزة تعمل فقط داخل البرنامج', 'error'); return; }
  const result = await window.electronAPI.listBackups();
  const el = document.getElementById('backups-list');
  if (!el) return;
  if (!result.success || result.files.length === 0) {
    el.innerHTML = '<div style="color:var(--text-muted);font-size:13px;padding:8px 0;">لا توجد نسخ احتياطية بعد</div>';
    return;
  }
  el.innerHTML = '<div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">📁 ' + result.dir + '</div>' +
    result.files.map(f =>
      '<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border-subtle);font-size:13px;">' +
      '<span>📄 ' + f + '</span>' +
      '</div>'
    ).join('');
}


// ============================================================
// نظام المستودعات — Warehouses
// ============================================================

function renderWarehouses() {
  const inv = calcInventoryByWarehouse();
  const search = document.getElementById('wh-search')?.value?.toLowerCase() || '';

  // بطاقات المستودعات
  const whGrid = document.getElementById('wh-cards');
  if (whGrid) {
    const whs = (db.warehouses || []).filter(w =>
      !search || w.name.toLowerCase().includes(search) || (w.location||'').toLowerCase().includes(search)
    );
    if (whs.length === 0) {
      whGrid.innerHTML = '<div class="empty-state">لا توجد مستودعات — أضف مستودعاً جديداً</div>';
    } else {
      whGrid.innerHTML = whs.map(w => {
        const whInv = inv[w.id] || {};
        const itemCount = Object.values(whInv).filter(q => q > 0).length;
        const totalVal = db.items.reduce((s, item) => s + (whInv[item.id] || 0) * item.cost, 0);
        return `<div class="wh-card" onclick="openWarehouseDetail('${w.id}')">
          <div class="wh-card-header">
            <span class="wh-icon">🏭</span>
            <div>
              <div class="wh-name">${w.name}</div>
              <div class="wh-loc">${w.location || '—'}</div>
            </div>
            <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();deleteWarehouse('${w.id}')" style="color:var(--red-600);margin-right:auto">🗑️</button>
          </div>
          <div class="wh-stats">
            <div><span class="wh-stat-val">${itemCount}</span><span class="wh-stat-lbl">مادة</span></div>
            <div><span class="wh-stat-val">${fmtUSD(totalVal)}</span><span class="wh-stat-lbl">قيمة المخزون</span></div>
          </div>
        </div>`;
      }).join('');
    }
  }

  // جدول نقل البضاعة — آخر العمليات
  renderTransfersList();
}

function calcInventoryByWarehouse() {
  // inv[warehouseId][itemId] = qty
  const inv = {};
  const defaultWh = getDefaultWarehouse();

  (db.warehouses || []).forEach(w => { inv[w.id] = {}; });
  if (defaultWh) {
    if (!inv[defaultWh]) inv[defaultWh] = {};
  }

  // فواتير الشراء تضيف للمستودع المحدد (أو الافتراضي)
  (db.purchaseInvoices || []).forEach(pinv => {
    const whId = pinv.warehouseId || defaultWh;
    if (!whId) return;
    if (!inv[whId]) inv[whId] = {};
    (pinv.lines || []).forEach(l => {
      inv[whId][l.itemId] = (inv[whId][l.itemId] || 0) + (parseFloat(l.qty) || 0);
    });
  });

  // فواتير البيع تنقص من المستودع المحدد (أو الافتراضي)
  (db.salesInvoices || []).forEach(sinv => {
    const whId = sinv.warehouseId || defaultWh;
    if (!whId) return;
    if (!inv[whId]) inv[whId] = {};
    (sinv.lines || []).forEach(l => {
      inv[whId][l.itemId] = (inv[whId][l.itemId] || 0) - (parseFloat(l.qty) || 0);
    });
  });

  // المرتجعات
  (db.returns || []).forEach(ret => {
    const whId = ret.warehouseId || defaultWh;
    if (!whId) return;
    if (!inv[whId]) inv[whId] = {};
    (ret.lines || []).forEach(l => {
      if (ret.type === 'sale') inv[whId][l.itemId] = (inv[whId][l.itemId] || 0) + (parseFloat(l.qty) || 0);
      else inv[whId][l.itemId] = (inv[whId][l.itemId] || 0) - (parseFloat(l.qty) || 0);
    });
  });

  // عمليات النقل
  (db.transfers || []).forEach(t => {
    if (!inv[t.fromWh]) inv[t.fromWh] = {};
    if (!inv[t.toWh]) inv[t.toWh] = {};
    inv[t.fromWh][t.itemId] = (inv[t.fromWh][t.itemId] || 0) - (parseFloat(t.qty) || 0);
    inv[t.toWh][t.itemId] = (inv[t.toWh][t.itemId] || 0) + (parseFloat(t.qty) || 0);
  });

  // التالف يخصم من المستودع
  (db.damages || []).forEach(d => {
    const whId = d.warehouseId || defaultWh;
    if (!whId) return;
    if (!inv[whId]) inv[whId] = {};
    inv[whId][d.itemId] = (inv[whId][d.itemId] || 0) - (parseFloat(d.qty) || 0);
  });

  return inv;
}

function getDefaultWarehouse() {
  if (!db.warehouses || db.warehouses.length === 0) return null;
  return db.warehouses[0].id;
}

function addWarehouse() {
  const name = document.getElementById('wh-new-name')?.value?.trim();
  const loc  = document.getElementById('wh-new-loc')?.value?.trim();
  if (!name) { showToast('أدخل اسم المستودع', 'error'); return; }
  if (!db.warehouses) db.warehouses = [];
  if (db.warehouses.find(w => w.name === name)) { showToast('المستودع موجود مسبقاً', 'error'); return; }
  const id = 'WH-' + String(db.warehouses.length + 1).padStart(3, '0');
  db.warehouses.push({ id, name, location: loc || '' });
  saveData(db);
  document.getElementById('wh-new-name').value = '';
  if (document.getElementById('wh-new-loc')) document.getElementById('wh-new-loc').value = '';
  showToast('✅ تم إضافة المستودع: ' + name, 'success');
  renderWarehouses();
  updateWarehouseSelects();
}

function deleteWarehouse(id) {
  const wh = (db.warehouses || []).find(w => w.id === id);
  if (!wh) return;
  if (!confirm('هل تريد حذف المستودع "' + wh.name + '"؟\nسيتم حذف كل عمليات النقل المرتبطة به.')) return;
  db.warehouses = db.warehouses.filter(w => w.id !== id);
  saveData(db);
  showToast('🗑️ تم حذف المستودع', 'success');
  renderWarehouses();
  updateWarehouseSelects();
}

function openWarehouseDetail(whId) {
  const wh = (db.warehouses || []).find(w => w.id === whId);
  if (!wh) return;
  const inv = calcInventoryByWarehouse();
  const whInv = inv[whId] || {};

  const modal = document.getElementById('wh-detail-modal');
  document.getElementById('wh-detail-name').textContent = wh.name;
  document.getElementById('wh-detail-loc').textContent = wh.location || '—';

  const tbody = document.getElementById('wh-detail-tbody');
  const items = db.items.filter(item => (whInv[item.id] || 0) !== 0);
  if (items.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;padding:16px;color:var(--text-muted)">لا يوجد مخزون في هذا المستودع</td></tr>';
  } else {
    tbody.innerHTML = items.map(item => {
      const qty = whInv[item.id] || 0;
      const val = qty * item.cost;
      const isLow = qty < item.minStock;
      return `<tr class="${isLow ? 'row-warning' : ''}">
        <td><span class="item-id">${item.id}</span></td>
        <td><strong>${item.name}</strong></td>
        <td><span class="stock-num ${isLow ? 'badge-warning' : ''}">${qty} ${item.unit}</span></td>
        <td>${fmtUSD(val)}</td>
      </tr>`;
    }).join('');
  }

  modal.classList.remove('hidden');
  modal.style.display = 'flex';
}

function closeWhDetailModal() {
  const modal = document.getElementById('wh-detail-modal');
  if (modal) { modal.classList.add('hidden'); modal.style.display = 'none'; }
}

// نقل بضاعة بين مستودعات
function updateTransferItems() {
  const fromWh = document.getElementById('tr-from-wh')?.value;
  const inv = calcInventoryByWarehouse();
  const whInv = fromWh ? (inv[fromWh] || {}) : {};
  const sel = document.getElementById('tr-item');
  if (!sel) return;
  sel.innerHTML = '<option value="">-- اختر مادة --</option>';
  db.items.forEach(item => {
    const qty = whInv[item.id] || 0;
    if (qty > 0) {
      const opt = document.createElement('option');
      opt.value = item.id;
      opt.textContent = item.name + '  (متاح: ' + qty + ' ' + item.unit + ')';
      sel.appendChild(opt);
    }
  });
}

function updateTransferMaxQty() {
  const fromWh = document.getElementById('tr-from-wh')?.value;
  const itemId = document.getElementById('tr-item')?.value;
  if (!fromWh || !itemId) return;
  const inv = calcInventoryByWarehouse();
  const available = (inv[fromWh] || {})[itemId] || 0;
  const qtyEl = document.getElementById('tr-qty');
  if (qtyEl) { qtyEl.max = available; qtyEl.placeholder = 'الحد الأقصى: ' + available; }
}

function saveTransfer() {
  const fromWh = document.getElementById('tr-from-wh')?.value;
  const toWh   = document.getElementById('tr-to-wh')?.value;
  const itemId = document.getElementById('tr-item')?.value;
  const qty    = parseFloat(document.getElementById('tr-qty')?.value || 0);
  const date   = document.getElementById('tr-date')?.value || new Date().toISOString().split('T')[0];
  const note   = document.getElementById('tr-note')?.value || '';

  if (!fromWh) { showToast('اختر مستودع المصدر', 'error'); return; }
  if (!toWh)   { showToast('اختر مستودع الوجهة', 'error'); return; }
  if (fromWh === toWh) { showToast('المستودعان متماثلان!', 'error'); return; }
  if (!itemId) { showToast('اختر المادة', 'error'); return; }
  if (!qty || qty <= 0) { showToast('أدخل كمية صحيحة', 'error'); return; }

  // تحقق من الكمية المتاحة
  const inv = calcInventoryByWarehouse();
  const available = (inv[fromWh] || {})[itemId] || 0;
  if (qty > available) { showToast('الكمية المطلوبة أكبر من المتاح (' + available + ')', 'error'); return; }

  if (!db.transfers) db.transfers = [];
  const id = 'TRF-' + String(db.transfers.length + 1).padStart(3, '0');
  const fromName = (db.warehouses || []).find(w => w.id === fromWh)?.name || fromWh;
  const toName   = (db.warehouses || []).find(w => w.id === toWh)?.name || toWh;
  const item = db.items.find(i => i.id === itemId);

  db.transfers.push({ id, fromWh, toWh, fromName, toName, itemId, itemName: item?.name || itemId, qty, date, note });
  saveData(db);

  // مسح الحقول
  ['tr-item','tr-qty','tr-note'].forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
  showToast('✅ تم نقل ' + qty + ' ' + (item?.unit||'') + ' من ' + fromName + ' إلى ' + toName, 'success');
  renderWarehouses();
}

function renderTransfersList() {
  const el = document.getElementById('transfers-list');
  if (!el) return;
  const transfers = (db.transfers || []).slice().reverse();
  if (transfers.length === 0) {
    el.innerHTML = '<div class="empty-state">لا توجد عمليات نقل بعد</div>';
    return;
  }
  el.innerHTML = transfers.map(t => {
    const item = db.items.find(i => i.id === t.itemId);
    return `<div class="invoice-row">
      <span class="item-id">${t.id}</span>
      <span>${t.itemName || t.itemId}</span>
      <span style="color:var(--red-600)">من: ${t.fromName}</span>
      <span style="color:var(--green-700)">إلى: ${t.toName}</span>
      <span class="stock-num">${t.qty} ${item?.unit||''}</span>
      <span class="inv-date">${t.date}</span>
    </div>`;
  }).join('');
}

function updateWarehouseSelects() {
  const whs = db.warehouses || [];
  ['tr-from-wh', 'tr-to-wh', 'sale-warehouse', 'pur-warehouse'].forEach(selId => {
    const sel = document.getElementById(selId);
    if (!sel) return;
    const cur = sel.value;
    sel.innerHTML = '<option value="">-- اختر مستودع --</option>';
    whs.forEach(w => {
      const opt = document.createElement('option');
      opt.value = w.id;
      opt.textContent = w.name;
      if (w.id === cur) opt.selected = true;
      sel.appendChild(opt);
    });
  });
}


// ============================================================
// نظام التالف — Damages
// ============================================================

function renderDamageStats() {
  const damages = db.damages || [];
  const totalLoss = damages.reduce((s, d) => {
    const item = db.items.find(i => i.id === d.itemId);
    return s + (parseFloat(d.qty) || 0) * (item?.cost || d.cost || 0);
  }, 0);
  const el = document.getElementById('dmg-total-loss');
  if (el) el.textContent = fmtUSD(totalLoss);
  const el2 = document.getElementById('dmg-count');
  if (el2) el2.textContent = damages.length + ' سجل';
}

function renderDamagesList(search) {
  const el = document.getElementById('damages-list');
  if (!el) return;
  const damages = (db.damages || []).slice().reverse();
  const filtered = search
    ? damages.filter(d => (d.itemName || '').toLowerCase().includes(search) || (d.reason || '').toLowerCase().includes(search) || (d.number || '').toLowerCase().includes(search))
    : damages;

  if (filtered.length === 0) {
    el.innerHTML = search ? '<div class="empty-state">🔍 لا توجد نتائج</div>' : '<div class="empty-state">لا توجد سجلات تالف بعد</div>';
    return;
  }

  el.innerHTML = filtered.map(d => {
    const item = db.items.find(i => i.id === d.itemId);
    const loss = (parseFloat(d.qty) || 0) * (item?.cost || d.cost || 0);
    const whName = d.warehouseId ? ((db.warehouses || []).find(w => w.id === d.warehouseId)?.name || d.warehouseId) : '—';
    return `<div class="invoice-row">
      <span class="item-id">${d.number || '—'}</span>
      <span><strong>${d.itemName || d.itemId}</strong></span>
      <span class="badge-warning">${d.qty} ${item?.unit || ''}</span>
      <span style="color:var(--text-muted);font-size:12px">${d.reason || '—'}</span>
      <span style="color:var(--red-600);font-weight:600">${fmtUSD(loss)}</span>
      <span style="color:var(--text-muted);font-size:12px">🏭 ${whName}</span>
      <span class="inv-date">${d.date}</span>
      <button class="btn btn-ghost btn-sm" onclick="deleteDamage('${d.number}')" style="color:var(--red-600)">🗑️</button>
    </div>`;
  }).join('');
}

function saveDamage() {
  const itemId = document.getElementById('dmg-item')?.value;
  const qty    = parseFloat(document.getElementById('dmg-qty')?.value || 0);
  const reason = document.getElementById('dmg-reason')?.value?.trim() || '';
  const date   = document.getElementById('dmg-date')?.value || new Date().toISOString().split('T')[0];
  const note   = document.getElementById('dmg-note')?.value?.trim() || '';
  const whId   = document.getElementById('dmg-warehouse')?.value || getDefaultWarehouse() || '';

  if (!itemId) { showToast('اختر المادة', 'error'); return; }
  if (!qty || qty <= 0) { showToast('أدخل كمية صحيحة', 'error'); return; }
  if (!reason) { showToast('اذكر سبب التالف', 'error'); return; }

  // تحقق من المخزون المتاح
  const inv = calcInventoryByWarehouse();
  const defaultWh = whId || getDefaultWarehouse();
  const available = defaultWh ? ((inv[defaultWh] || {})[itemId] || 0) : (calcInventory()[itemId] || 0);
  if (qty > available + 0.001) {
    showToast('الكمية التالفة (' + qty + ') أكبر من المخزون المتاح (' + available + ')', 'error');
    return;
  }

  if (!db.damages) db.damages = [];
  const item = db.items.find(i => i.id === itemId);
  const number = 'DMG-' + String(db.damages.length + 1).padStart(3, '0');
  const cost = item?.cost || 0;

  db.damages.push({
    number, itemId, itemName: item?.name || itemId,
    qty, reason, date, note,
    cost,
    warehouseId: whId || ''
  });

  saveData(db);

  // مسح الحقول
  ['dmg-item', 'dmg-qty', 'dmg-reason', 'dmg-note'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { if (el.tagName === 'SELECT') el.value = ''; else el.value = ''; }
  });
  const dateEl = document.getElementById('dmg-date');
  if (dateEl) dateEl.value = new Date().toISOString().split('T')[0];

  const loss = qty * cost;
  showToast('✅ تم تسجيل التالف: ' + item?.name + ' — خسارة: ' + fmtUSD(loss), 'success');
  renderDamages();
}

function deleteDamage(number) {
  if (!confirm('هل تريد حذف هذا السجل؟')) return;
  db.damages = (db.damages || []).filter(d => d.number !== number);
  saveData(db);
  showToast('🗑️ تم حذف السجل', 'success');
  renderDamages();
}

function printDamagesReport() {
  const damages = db.damages || [];
  const totalLoss = damages.reduce((s, d) => {
    const item = db.items.find(i => i.id === d.itemId);
    return s + (parseFloat(d.qty) || 0) * (item?.cost || d.cost || 0);
  }, 0);

  const rows = damages.map((d, i) => {
    const item = db.items.find(it => it.id === d.itemId);
    const loss = (parseFloat(d.qty) || 0) * (item?.cost || d.cost || 0);
    return `<tr>
      <td>${i+1}</td>
      <td>${d.number}</td>
      <td>${d.itemName || d.itemId}</td>
      <td>${d.qty} ${item?.unit||''}</td>
      <td>${d.reason || '—'}</td>
      <td>${d.date}</td>
      <td style="color:#dc2626;font-weight:700">${fmtUSD(loss)}</td>
    </tr>`;
  }).join('');

  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head><meta charset="UTF-8"><title>تقرير المواد التالفة</title>
<style>
  body{font-family:'Segoe UI',Tahoma,Arial,sans-serif;margin:0;padding:20px;color:#1a1a1a;}
  .header{background:#dc2626;color:white;padding:20px;border-radius:8px;margin-bottom:20px;text-align:center;}
  .header h1{margin:0;font-size:22px;}
  .header p{margin:4px 0;font-size:12px;opacity:.85;}
  .kpi{display:inline-block;background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:12px 24px;margin-bottom:20px;text-align:center;}
  .kpi-val{font-size:22px;font-weight:700;color:#dc2626;}
  .kpi-lbl{font-size:12px;color:#64748b;}
  table{width:100%;border-collapse:collapse;}
  thead th{background:#dc2626;color:white;padding:8px;font-size:12px;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
  tbody td{padding:7px 8px;border-bottom:1px solid #e2e8f0;font-size:12px;}
  tbody tr:nth-child(even){background:#fef2f2;}
  .footer{text-align:center;margin-top:20px;font-size:11px;color:#94a3b8;border-top:1px solid #eee;padding-top:8px;}
  @media print{body{padding:10px;}}
</style></head><body>
<div class="header">
  <h1>${db.company.name}</h1>
  <p>تقرير المواد التالفة — ${new Date().toLocaleDateString('ar-SY')}</p>
</div>
<div class="kpi">
  <div class="kpi-val">${fmtUSD(totalLoss)}</div>
  <div class="kpi-lbl">إجمالي الخسائر من التالف</div>
</div>
<table>
  <thead><tr><th>#</th><th>رقم السجل</th><th>المادة</th><th>الكمية</th><th>السبب</th><th>التاريخ</th><th>الخسارة</th></tr></thead>
  <tbody>${rows}</tbody>
</table>
<div class="footer">تم إنشاء التقرير بواسطة برنامج المحاسبة والمستودعات</div>
<script>window.onload=()=>window.print();<\/script>
</body></html>`);
  win.document.close();
}

// تحديث حساب المخزون الأصلي ليشمل التالف
const _origCalcInventory = calcInventory;
function calcInventory() {
  const inv = _origCalcInventory();
  // خصم التالف
  (db.damages || []).forEach(d => {
    if (!inv[d.itemId]) inv[d.itemId] = 0;
    inv[d.itemId] -= parseFloat(d.qty) || 0;
  });
  return inv;
}

// تحديث قوائم المواد في صفحة التالف
function populateDamageItems() {
  const sel = document.getElementById('dmg-item');
  if (!sel) return;
  const inv = calcInventory();
  sel.innerHTML = '<option value="">-- اختر مادة --</option>';
  db.items.forEach(item => {
    const qty = inv[item.id] || 0;
    if (qty > 0) {
      const opt = document.createElement('option');
      opt.value = item.id;
      opt.textContent = item.name + '  (مخزون: ' + qty + ' ' + item.unit + ')';
      sel.appendChild(opt);
    }
  });
}

// override renderDamages لتضمين populate
const _origRenderDamages = renderDamages;
function renderDamages() {
  _origRenderDamages();
  populateDamageItems();
}


// ============================================================
// دوال العملة في إيصالات القبض والدفع
// ============================================================

function getAmountInUSD(amount, currency) {
  const rate = db.exchange ? db.exchange.usdToOld : 12000;
  if (currency === 'SYP_OLD') return amount / rate;
  if (currency === 'SYP_NEW') return amount / (rate / 100);
  return amount; // USD
}

function formatEquiv(amountUSD) {
  const rate = db.exchange ? db.exchange.usdToOld : 12000;
  return fmtUSD(amountUSD) + ' = ' + fmtOld(amountUSD * rate) + ' = ' + fmtNew(amountUSD * rate / 100);
}

// ====== إيصال الزبون ======
function updateCustCurrency() {
  const currency = document.getElementById('rec-cust-currency')?.value || 'USD';
  const raw = parseFloat(document.getElementById('rec-cust-amount')?.value || 0);
  const el = document.getElementById('rec-cust-equiv');
  if (!el) return;
  if (!raw || raw <= 0) { el.textContent = '—'; return; }
  const usd = getAmountInUSD(raw, currency);
  el.textContent = formatEquiv(usd);
  updateCustBalance();
}

// override updateCustBalance لتحسب بالعملة الصحيحة
const _origUpdateCustBalance = typeof updateCustBalance === 'function' ? updateCustBalance : null;
function updateCustBalance() {
  const name     = document.getElementById('rec-cust-name')?.value?.trim();
  const raw      = parseFloat(document.getElementById('rec-cust-amount')?.value || 0);
  const currency = document.getElementById('rec-cust-currency')?.value || 'USD';
  const amount   = getAmountInUSD(raw, currency);
  const discount = parseFloat(document.getElementById('rec-cust-discount')?.value || 0);
  const el       = document.getElementById('rec-cust-balance-preview');
  if (!el) return;
  if (!name || !amount) { el.style.display = 'none'; return; }
  const acc = getCustomerAccount(name);
  const after = Math.max(0, acc.remaining - amount + discount);
  el.style.display = 'block';
  el.innerHTML = `متبقي بعد الدفع: <strong style="color:${after<0.01?'var(--green-700)':'var(--red-600)'}">${fmtUSD(after)}</strong>`;
  // تحديث المعادل
  const equiv = document.getElementById('rec-cust-equiv');
  if (equiv && raw > 0) equiv.textContent = formatEquiv(amount);
}

// override saveReceiptCustomer لتحويل العملة قبل الحفظ
const _origSaveReceiptCustomer = typeof saveReceiptCustomer === 'function' ? saveReceiptCustomer : null;
// ====== إيصال المورد ======
function updateSupCurrency() {
  const currency = document.getElementById('rec-sup-currency')?.value || 'USD';
  const raw = parseFloat(document.getElementById('rec-sup-amount')?.value || 0);
  const el = document.getElementById('rec-sup-equiv');
  if (!el) return;
  if (!raw || raw <= 0) { el.textContent = '—'; return; }
  const usd = getAmountInUSD(raw, currency);
  el.textContent = formatEquiv(usd);
}

// override saveReceiptSupplier
const _origSaveReceiptSupplier = typeof saveReceiptSupplier === 'function' ? saveReceiptSupplier : null;
// ============================================================
// ربط الإيصالات بالفواتير — زبون ومورد
// ============================================================

// ====== متغيرات الربط ======
let _custLinkedInvoice = null;  // رقم فاتورة البيع المربوطة
let _supLinkedInvoice  = null;  // رقم فاتورة الشراء المربوطة

// ====== جانب الزبون ======

function loadCustDeferredInvoices() {
  const name = document.getElementById('rec-cust-name')?.value?.trim();
  const panel = document.getElementById('cust-deferred-panel');
  const list  = document.getElementById('cust-deferred-list');
  if (!panel || !list) return;

  // إلغاء الربط عند تغيير الزبون
  _custLinkedInvoice = null;
  hideCustLinkedBadge();

  if (!name) { panel.style.display = 'none'; return; }

  // فواتير آجلة غير مسددة بالكامل
  const invs = getDeferredInvoicesForCustomer(name);
  if (invs.length === 0) { panel.style.display = 'none'; return; }

  panel.style.display = 'block';
  list.innerHTML = invs.map(inv => {
    const rem = rcGetInvoiceRemaining(inv, name);
    return `<div class="inv-link-row" onclick="linkCustInvoice('${inv.number}', ${rem})"
      style="display:flex;align-items:center;justify-content:space-between;background:white;border:1px solid #fde68a;border-radius:8px;padding:8px 12px;cursor:pointer;transition:background .15s;"
      onmouseover="this.style.background='#fef9c3'" onmouseout="this.style.background='white'">
      <span style="font-weight:700;font-family:monospace;color:#92400e">${inv.number}</span>
      <span style="font-size:12px;color:#64748b">${inv.date}</span>
      <span style="font-size:12px">إجمالي: <strong>${fmtUSD(inv.total)}</strong></span>
      <span style="color:#dc2626;font-weight:700">متبقي: ${fmtUSD(rem)}</span>
      <span style="font-size:11px;background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:10px">اضغط للربط</span>
    </div>`;
  }).join('');
}

function linkCustInvoice(invNum, remaining) {
  _custLinkedInvoice = invNum;

  // تعبئة المبلغ تلقائياً بالمتبقي
  const amtEl = document.getElementById('rec-cust-amount');
  if (amtEl) { amtEl.value = Math.round(remaining * 100) / 100; }

  // تعبئة البيان
  const descEl = document.getElementById('rec-cust-desc');
  if (descEl && !descEl.value) descEl.value = 'سداد فاتورة ' + invNum;

  // إظهار badge الربط
  const badge = document.getElementById('cust-linked-inv');
  const num   = document.getElementById('cust-linked-inv-num');
  if (badge) badge.style.display = 'block';
  if (num)   num.textContent = invNum;

  updateCustBalance();
  updateCustCurrency();
  showToast('🔗 تم ربط الإيصال بالفاتورة ' + invNum, 'success');
}

function unlinkCustInvoice() {
  _custLinkedInvoice = null;
  hideCustLinkedBadge();
  showToast('تم إلغاء ربط الفاتورة', 'success');
}

function hideCustLinkedBadge() {
  const badge = document.getElementById('cust-linked-inv');
  if (badge) badge.style.display = 'none';
}

// ====== جانب المورد ======

function loadSupDeferredInvoices() {
  const name  = document.getElementById('rec-sup-name')?.value?.trim();
  const panel = document.getElementById('sup-deferred-panel');
  const list  = document.getElementById('sup-deferred-list');
  if (!panel || !list) return;

  _supLinkedInvoice = null;
  hideSupLinkedBadge();

  if (!name) { panel.style.display = 'none'; return; }

  // فواتير شراء آجلة غير مسددة
  const invs = getDeferredInvoicesForSupplier(name);
  if (invs.length === 0) { panel.style.display = 'none'; return; }

  panel.style.display = 'block';
  list.innerHTML = invs.map(inv => {
    const rem = getSupInvoiceRemaining(inv, name);
    return `<div onclick="linkSupInvoice('${inv.number}', ${rem})"
      style="display:flex;align-items:center;justify-content:space-between;background:white;border:1px solid #bbf7d0;border-radius:8px;padding:8px 12px;cursor:pointer;transition:background .15s;"
      onmouseover="this.style.background='#f0fdf4'" onmouseout="this.style.background='white'">
      <span style="font-weight:700;font-family:monospace;color:#15803d">${inv.number}</span>
      <span style="font-size:12px;color:#64748b">${inv.date}</span>
      <span style="font-size:12px">إجمالي: <strong>${fmtUSD(inv.total)}</strong></span>
      <span style="color:#dc2626;font-weight:700">متبقي: ${fmtUSD(rem)}</span>
      <span style="font-size:11px;background:#dcfce7;color:#15803d;padding:2px 8px;border-radius:10px">اضغط للربط</span>
    </div>`;
  }).join('');
}

function getDeferredInvoicesForSupplier(supplierName) {
  return (db.purchaseInvoices || []).filter(inv => {
    if (inv.supplierName !== supplierName) return false;
    if ((inv.paymentType || 'cash') !== 'deferred') return false;
    return getSupInvoiceRemaining(inv, supplierName) > 0.005;
  });
}

function getSupInvoiceRemaining(inv, supplierName) {
  const paid = (db.supplierPayments || [])
    .filter(p => p.supplierName === supplierName &&
      (p.linkedInvoice === inv.number || (p.description || '') === ('سداد فاتورة ' + inv.number)))
    .reduce((s, p) => s + (p.amount || 0) + (p.discountOnPayment || 0), 0);
  const origPaid = inv.paidAmountOriginal || 0;
  return Math.max(0, inv.total - origPaid - paid);
}

function linkSupInvoice(invNum, remaining) {
  _supLinkedInvoice = invNum;

  const amtEl = document.getElementById('rec-sup-amount');
  if (amtEl) { amtEl.value = Math.round(remaining * 100) / 100; }

  const descEl = document.getElementById('rec-sup-desc');
  if (descEl && !descEl.value) descEl.value = 'سداد فاتورة ' + invNum;

  const badge = document.getElementById('sup-linked-inv');
  const num   = document.getElementById('sup-linked-inv-num');
  if (badge) badge.style.display = 'block';
  if (num)   num.textContent = invNum;

  updateSupCurrency();
  showToast('🔗 تم ربط الدفعة بالفاتورة ' + invNum, 'success');
}

function unlinkSupInvoice() {
  _supLinkedInvoice = null;
  hideSupLinkedBadge();
  showToast('تم إلغاء ربط الفاتورة', 'success');
}

function hideSupLinkedBadge() {
  const badge = document.getElementById('sup-linked-inv');
  if (badge) badge.style.display = 'none';
}

// ====== override saveReceiptCustomer لتضمين الربط ======
function saveReceiptCustomer() {
  const customerName = document.getElementById('rec-cust-name')?.value?.trim();
  const raw          = parseFloat(document.getElementById('rec-cust-amount')?.value || 0);
  const currency     = document.getElementById('rec-cust-currency')?.value || 'USD';
  const amountUSD    = getAmountInUSD(raw, currency);
  const date         = document.getElementById('rec-cust-date')?.value || new Date().toISOString().split('T')[0];
  const desc         = document.getElementById('rec-cust-desc')?.value || '';
  const method       = document.getElementById('rec-cust-method')?.value || 'cash';
  const cheque       = document.getElementById('rec-cust-cheque')?.value || '';
  const note         = document.getElementById('rec-cust-note')?.value || '';
  const discount     = parseFloat(document.getElementById('rec-cust-discount')?.value || 0);

  if (!customerName) { showToast('اختر اسم الزبون', 'error'); return; }
  if (!amountUSD || amountUSD <= 0) { showToast('أدخل المبلغ', 'error'); return; }

  // تحقق من عدم تجاوز المتبقي على الفاتورة المربوطة
  if (_custLinkedInvoice) {
    const inv = db.salesInvoices.find(i => i.number === _custLinkedInvoice);
    if (inv) {
      const rem = rcGetInvoiceRemaining(inv, customerName);
      if (amountUSD > rem + 0.005) {
        showToast('المبلغ أكبر من المتبقي على الفاتورة ' + _custLinkedInvoice + ' (' + fmtUSD(rem) + ')', 'error');
        return;
      }
    }
  }

  db.invoiceCounters.receipt = (db.invoiceCounters.receipt || 0) + 1;
  const receiptNum = 'REC-' + String(db.invoiceCounters.receipt).padStart(3, '0');

  db.customerPayments = db.customerPayments || [];
  db.customerPayments.push({
    receiptNum, customerName,
    amount: amountUSD,
    rawAmount: raw,
    currency,
    discountOnPayment: discount,
    paymentMethod: method,
    chequeNum: cheque,
    description: desc || (_custLinkedInvoice ? 'سداد فاتورة ' + _custLinkedInvoice : ''),
    linkedInvoice: _custLinkedInvoice || '',
    note, date
  });

  // تحديث رصيد الزبون
  const cust = db.customers.find(c => c.name === customerName);
  if (cust) cust.balance = Math.max(0, (cust.balance || 0) - amountUSD - discount);

  // إذا كانت مربوطة بفاتورة — تحقق هل اكتملت
  if (_custLinkedInvoice) {
    const inv = db.salesInvoices.find(i => i.number === _custLinkedInvoice);
    if (inv) {
      const rem = rcGetInvoiceRemaining(inv, customerName) - amountUSD - discount;
      if (rem <= 0.005) {
        inv.paymentStatus = 'paid';
        showToast('🎉 تمت تسوية الفاتورة ' + _custLinkedInvoice + ' بالكامل!', 'success');
      }
    }
  }

  saveData(db);

  const currencyLabel = { USD: 'دولار', SYP_NEW: 'ل.س جديدة', SYP_OLD: 'ل.س قديمة' }[currency] || '';
  const linkMsg = _custLinkedInvoice ? ' ← ' + _custLinkedInvoice : '';
  showToast('✅ تم حفظ الإيصال ' + receiptNum + linkMsg + ' — ' + raw + ' ' + currencyLabel, 'success');

  // reset
  _custLinkedInvoice = null;
  hideCustLinkedBadge();
  ['rec-cust-name','rec-cust-amount','rec-cust-cheque','rec-cust-desc','rec-cust-note'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  if (document.getElementById('rec-cust-discount')) document.getElementById('rec-cust-discount').value = '0';
  if (document.getElementById('rec-cust-equiv'))    document.getElementById('rec-cust-equiv').textContent = '—';
  if (document.getElementById('rec-cust-currency')) document.getElementById('rec-cust-currency').value = 'USD';
  const panel = document.getElementById('cust-deferred-panel');
  if (panel) panel.style.display = 'none';
  renderReceiptCustomer();
}

// ====== override saveReceiptSupplier لتضمين الربط ======
function saveReceiptSupplier() {
  const supplierName = document.getElementById('rec-sup-name')?.value?.trim();
  const raw          = parseFloat(document.getElementById('rec-sup-amount')?.value || 0);
  const currency     = document.getElementById('rec-sup-currency')?.value || 'USD';
  const amountUSD    = getAmountInUSD(raw, currency);
  const date         = document.getElementById('rec-sup-date')?.value || new Date().toISOString().split('T')[0];
  const desc         = document.getElementById('rec-sup-desc')?.value || '';
  const method       = document.getElementById('rec-sup-method')?.value || 'cash';
  const cheque       = document.getElementById('rec-sup-cheque')?.value || '';
  const note         = document.getElementById('rec-sup-note')?.value || '';
  const discount     = parseFloat(document.getElementById('rec-sup-discount')?.value || 0);

  if (!supplierName) { showToast('اختر اسم المورد', 'error'); return; }
  if (!amountUSD || amountUSD <= 0) { showToast('أدخل المبلغ', 'error'); return; }

  // تحقق من عدم تجاوز المتبقي
  if (_supLinkedInvoice) {
    const inv = db.purchaseInvoices.find(i => i.number === _supLinkedInvoice);
    if (inv) {
      const rem = getSupInvoiceRemaining(inv, supplierName);
      if (amountUSD > rem + 0.005) {
        showToast('المبلغ أكبر من المتبقي على الفاتورة ' + _supLinkedInvoice + ' (' + fmtUSD(rem) + ')', 'error');
        return;
      }
    }
  }

  db.invoiceCounters.receipt = (db.invoiceCounters.receipt || 0) + 1;
  const receiptNum = 'REC-' + String(db.invoiceCounters.receipt).padStart(3, '0');

  db.supplierPayments = db.supplierPayments || [];
  db.supplierPayments.push({
    receiptNum, supplierName,
    amount: amountUSD,
    rawAmount: raw,
    currency,
    discountOnPayment: discount,
    paymentMethod: method,
    chequeNum: cheque,
    description: desc || (_supLinkedInvoice ? 'سداد فاتورة ' + _supLinkedInvoice : ''),
    linkedInvoice: _supLinkedInvoice || '',
    note, date
  });

  // تحديث رصيد المورد
  const sup = (db.suppliers || []).find(s => s.name === supplierName);
  if (sup) sup.balance = Math.max(0, (sup.balance || 0) - amountUSD - discount);

  // تحقق اكتمال الفاتورة
  if (_supLinkedInvoice) {
    const inv = db.purchaseInvoices.find(i => i.number === _supLinkedInvoice);
    if (inv) {
      const rem = getSupInvoiceRemaining(inv, supplierName) - amountUSD - discount;
      if (rem <= 0.005) {
        inv.paymentStatus = 'paid';
        showToast('🎉 تمت تسوية الفاتورة ' + _supLinkedInvoice + ' بالكامل!', 'success');
      }
    }
  }

  saveData(db);

  const currencyLabel = { USD: 'دولار', SYP_NEW: 'ل.س جديدة', SYP_OLD: 'ل.س قديمة' }[currency] || '';
  const linkMsg = _supLinkedInvoice ? ' ← ' + _supLinkedInvoice : '';
  showToast('✅ تم حفظ إيصال الدفع ' + receiptNum + linkMsg + ' — ' + raw + ' ' + currencyLabel, 'success');

  // reset
  _supLinkedInvoice = null;
  hideSupLinkedBadge();
  ['rec-sup-name','rec-sup-amount','rec-sup-cheque','rec-sup-desc','rec-sup-note'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  if (document.getElementById('rec-sup-currency')) document.getElementById('rec-sup-currency').value = 'USD';
  if (document.getElementById('rec-sup-equiv'))    document.getElementById('rec-sup-equiv').textContent = '—';
  if (document.getElementById('rec-sup-discount')) document.getElementById('rec-sup-discount').value = '0';
  const panel = document.getElementById('sup-deferred-panel');
  if (panel) panel.style.display = 'none';
  renderReceiptSupplier();
}

// ============================================================
// دوال مساعدة للصفحتين المعادتَين
// ============================================================

function clearReceiptCustomerForm() {
  ['rec-cust-name','rec-cust-amount','rec-cust-cheque','rec-cust-desc','rec-cust-note'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  if (document.getElementById('rec-cust-discount')) document.getElementById('rec-cust-discount').value = '0';
  if (document.getElementById('rec-cust-equiv'))    document.getElementById('rec-cust-equiv').textContent = '—';
  if (document.getElementById('rec-cust-currency')) document.getElementById('rec-cust-currency').value = 'USD';
  if (document.getElementById('rec-cust-balance-preview')) document.getElementById('rec-cust-balance-preview').textContent = '—';
  const panel = document.getElementById('cust-deferred-panel');
  if (panel) panel.style.display = 'none';
  _custLinkedInvoice = null;
  hideCustLinkedBadge();
}

function clearReceiptSupplierForm() {
  ['rec-sup-name','rec-sup-amount','rec-sup-cheque','rec-sup-desc','rec-sup-note'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  if (document.getElementById('rec-sup-discount')) document.getElementById('rec-sup-discount').value = '0';
  if (document.getElementById('rec-sup-equiv'))    document.getElementById('rec-sup-equiv').textContent = '—';
  if (document.getElementById('rec-sup-currency')) document.getElementById('rec-sup-currency').value = 'USD';
  if (document.getElementById('rec-sup-balance-preview')) document.getElementById('rec-sup-balance-preview').textContent = '—';
  const panel = document.getElementById('sup-deferred-panel');
  if (panel) panel.style.display = 'none';
  _supLinkedInvoice = null;
  hideSupLinkedBadge();
}

// تحديث renderReceiptCustomer لتعبئة رقم السند والتاريخ والقائمة
const _origRRC = renderReceiptCustomer;
function renderReceiptCustomer() {
  const nextNum = 'REC-' + String((db.invoiceCounters.receipt||0)+1).padStart(3,'0');
  ['rec-cust-num','rec-cust-num-display'].forEach(id => {
    const el = document.getElementById(id); if (el) el.textContent = nextNum;
  });
  const dateEl = document.getElementById('rec-cust-date');
  if (dateEl && !dateEl.value) dateEl.value = new Date().toISOString().split('T')[0];
  // datalist
  const dl = document.getElementById('rec-cust-datalist');
  if (dl) dl.innerHTML = db.customers.filter(c=>c.name).map(c=>`<option value="${c.name}">`).join('');
  // قائمة آخر الإيصالات
  const listEl = document.getElementById('rec-cust-list');
  if (listEl) {
    const payments = (db.customerPayments||[]).slice().reverse().slice(0,20);
    if (payments.length === 0) {
      listEl.innerHTML = '<div class="empty-state">لا توجد إيصالات بعد</div>';
    } else {
      listEl.innerHTML = payments.map(p => {
        const linked = p.linkedInvoice ? `<span style="font-size:10px;background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:8px;margin-right:4px">🔗 ${p.linkedInvoice}</span>` : '';
        const cur = { USD:'$', SYP_NEW:'ل.ج', SYP_OLD:'ل.ق' }[p.currency||'USD']||'$';
        return `<div class="invoice-row">
          <span class="item-id">${p.receiptNum||'—'}</span>
          <span><strong>${p.customerName}</strong></span>
          ${linked}
          <span style="color:var(--green-700);font-weight:700">${p.rawAmount||p.amount} ${cur}</span>
          <span style="color:var(--text-muted);font-size:11px">≈ ${fmtUSD(p.amount)}</span>
          <span class="inv-date">${p.date}</span>
        </div>`;
      }).join('');
    }
  }
}

// تحديث renderReceiptSupplier
const _origRRS = renderReceiptSupplier;
function renderReceiptSupplier() {
  const nextNum = 'PAY-' + String((db.invoiceCounters.receipt||0)+1).padStart(3,'0');
  ['rec-sup-num','rec-sup-num-display'].forEach(id => {
    const el = document.getElementById(id); if (el) el.textContent = nextNum;
  });
  const dateEl = document.getElementById('rec-sup-date');
  if (dateEl && !dateEl.value) dateEl.value = new Date().toISOString().split('T')[0];
  // datalist
  const dl = document.getElementById('rec-sup-datalist');
  if (dl) dl.innerHTML = (db.suppliers||[]).filter(s=>s.name).map(s=>`<option value="${s.name}">`).join('');
  // قائمة آخر الإيصالات
  const listEl = document.getElementById('rec-sup-list');
  if (listEl) {
    const payments = (db.supplierPayments||[]).slice().reverse().slice(0,20);
    if (payments.length === 0) {
      listEl.innerHTML = '<div class="empty-state">لا توجد إيصالات بعد</div>';
    } else {
      listEl.innerHTML = payments.map(p => {
        const linked = p.linkedInvoice ? `<span style="font-size:10px;background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:8px;margin-right:4px">🔗 ${p.linkedInvoice}</span>` : '';
        const cur = { USD:'$', SYP_NEW:'ل.ج', SYP_OLD:'ل.ق' }[p.currency||'USD']||'$';
        return `<div class="invoice-row">
          <span class="item-id">${p.receiptNum||'—'}</span>
          <span><strong>${p.supplierName}</strong></span>
          ${linked}
          <span style="color:var(--blue-link);font-weight:700">${p.rawAmount||p.amount} ${cur}</span>
          <span style="color:var(--text-muted);font-size:11px">≈ ${fmtUSD(p.amount)}</span>
          <span class="inv-date">${p.date}</span>
        </div>`;
      }).join('');
    }
  }
}
