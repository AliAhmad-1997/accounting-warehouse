
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
  invoiceCounters: { sale:0, purchase:0, returnSale:0, returnPurchase:0 }
};

function loadData() {
  try {
    const saved = localStorage.getItem(DB_KEY);
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  return JSON.parse(JSON.stringify(defaultData));
}

function saveData(data) { localStorage.setItem(DB_KEY, JSON.stringify(data)); }

let db = loadData();

// ============================================================
// حساب المخزون
// ============================================================
function calcInventory() {
  const inv = {};
  db.items.forEach(item => { inv[item.id] = 0; });
  db.purchaseInvoices.forEach(inv_ => {
    inv_.lines.forEach(l => { if(!inv[l.itemId]) inv[l.itemId]=0; inv[l.itemId] += parseFloat(l.qty)||0; });
  });
  db.salesInvoices.forEach(inv_ => {
    inv_.lines.forEach(l => { if(!inv[l.itemId]) inv[l.itemId]=0; inv[l.itemId] -= parseFloat(l.qty)||0; });
  });
  return inv;
}

function getStats() {
  const totalSales = db.salesInvoices.reduce((s,i)=>s+(i.total||0),0);
  const totalPurchases = db.purchaseInvoices.reduce((s,i)=>s+(i.total||0),0);
  const profit = totalSales - totalPurchases;
  const inv = calcInventory();
  const lowStock = db.items.filter(item => (inv[item.id]||0) < item.minStock);
  const invValue = db.items.reduce((s,item)=>s+(inv[item.id]||0)*item.cost,0);
  return { totalSales, totalPurchases, profit, lowStock, invValue,
           salesCount: db.salesInvoices.length, purchasesCount: db.purchaseInvoices.length };
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
const pages = ['dashboard','invoice-sale','invoice-purchase','items','customers','suppliers','settings','reports'];
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

  const filtered = searchVal
    ? all.filter(inv =>
        (inv.number || '').toLowerCase().includes(searchVal) ||
        (inv.customerName || '').toLowerCase().includes(searchVal) ||
        (inv.supplierName || '').toLowerCase().includes(searchVal)
      )
    : all;

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
    return '<div class="invoice-row" onclick="openInvoiceDetail(\'' + num + '\')" style="cursor:pointer">' +
      '<span class="inv-num">' + num + '</span>' +
      '<span class="inv-customer">' + party + '</span>' +
      '<span class="inv-type ' + (isSale ? 'type-sale' : 'type-purchase') + '">' + inv.type + '</span>' +
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
  const filtered = searchVal
    ? all.filter(inv => (inv.number||'').toLowerCase().includes(searchVal) || (inv.customerName||'').toLowerCase().includes(searchVal))
    : all;
  const countEl = document.getElementById('sale-invoices-count');
  if(countEl) countEl.textContent = filtered.length + ' فاتورة';
  if(filtered.length === 0) {
    el.innerHTML = searchVal ? '<div class="empty-state">🔍 لا توجد نتائج لـ "' + searchVal + '"</div>' : '<div class="empty-state">لا توجد فواتير بيع بعد</div>';
    return;
  }
  el.innerHTML = filtered.map(inv =>
    '<div class="invoice-row" onclick="openInvoiceDetail(\'' + inv.number + '\')" style="cursor:pointer">' +
    '<span class="inv-num">' + inv.number + '</span>' +
    '<span class="inv-customer">' + (inv.customerName||'—') + '</span>' +
    '<span class="inv-type type-sale">بيع</span>' +
    '<span class="inv-total">' + fmtUSD(inv.total) + '</span>' +
    '<span class="inv-date">' + inv.date + '</span>' +
    '</div>'
  ).join('');
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
  saleLines[i].unitType = 'unit'; // reset للوحدة الأساسية
  saleLines[i].price = item ? item.price : 0;
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
  const discount = parseFloat(document.getElementById('sale-discount').value||0);
  const total = subtotal*(1-discount/100);
  const customerName = document.getElementById('sale-customer-input').value.trim();

  // ✅ إضافة الزبون تلقائياً إذا ما كان موجود
  if(customerName && !db.customers.find(c=>c.name===customerName)) {
    const newId = 'CUS-' + String(db.customers.length+1).padStart(3,'0');
    db.customers.push({id:newId, name:customerName, phone:'', address:''});
    showToast(`✅ تم إضافة الزبون "${customerName}" تلقائياً`,'success');
  }

  db.invoiceCounters.sale++;
  const inv = {
    number: 'INV-'+String(db.invoiceCounters.sale).padStart(3,'0'),
    date: document.getElementById('sale-date').value,
    customerName,
    lines, subtotal, discount, total,
    currency: 'USD',
    usdToOld: getRate()
  };
  db.salesInvoices.push(inv);
  saveData(db);
  saleLines = [{itemId:'',qty:1,price:0,total:0}];
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
      <td style="padding:8px;border:1px solid #ddd;text-align:center">${new Intl.NumberFormat('ar-SY').format(l.price)}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center;font-weight:bold">${new Intl.NumberFormat('ar-SY').format(l.total)}</td>
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
    <div class="amount">${new Intl.NumberFormat('ar-SY').format(inv.total)} ل.س</div>
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
  const filtered = searchVal
    ? all.filter(inv => (inv.number||'').toLowerCase().includes(searchVal) || (inv.supplierName||'').toLowerCase().includes(searchVal))
    : all;
  const countEl = document.getElementById('pur-invoices-count');
  if(countEl) countEl.textContent = filtered.length + ' فاتورة';
  if(filtered.length === 0) {
    el.innerHTML = searchVal ? '<div class="empty-state">🔍 لا توجد نتائج لـ "' + searchVal + '"</div>' : '<div class="empty-state">لا توجد فواتير شراء بعد</div>';
    return;
  }
  el.innerHTML = filtered.map(inv =>
    '<div class="invoice-row" onclick="openInvoiceDetail(\'' + inv.number + '\')" style="cursor:pointer">' +
    '<span class="inv-num">' + inv.number + '</span>' +
    '<span class="inv-customer">' + (inv.supplierName||'—') + '</span>' +
    '<span class="inv-type type-purchase">شراء</span>' +
    '<span class="inv-total">' + fmtUSD(inv.total) + '</span>' +
    '<span class="inv-date">' + inv.date + '</span>' +
    '</div>'
  ).join('');
}

function savePurchaseInvoice() {
  const lines = purchaseLines.filter(l=>l.itemId&&l.qty>0);
  if(lines.length===0){showToast('أضف مادة واحدة على الأقل','error');return;}
  const total = lines.reduce((s,l)=>s+l.total,0);
  const supplierName = document.getElementById('pur-supplier-input').value.trim();

  // إضافة المورد تلقائياً
  if(supplierName && !db.suppliers.find(s=>s.name===supplierName)) {
    const newId = 'SUP-'+String(db.suppliers.length+1).padStart(3,'0');
    db.suppliers.push({id:newId, name:supplierName, phone:'', address:''});
  }

  db.invoiceCounters.purchase++;
  const inv = {
    number: 'PUR-'+String(db.invoiceCounters.purchase).padStart(3,'0'),
    date: document.getElementById('pur-date').value,
    supplierName, lines, total
  };
  db.purchaseInvoices.push(inv);
  saveData(db);
  purchaseLines = [{itemId:'',qty:1,price:0,total:0}];
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
  // الوحدات
  document.getElementById('modal-item-unit').value = item.unit || '';
  document.getElementById('modal-item-unit2').value = item.unit2 || '';
  document.getElementById('modal-item-factor').value = item.factor || 1;
  document.getElementById('modal-item-barcode').value = item.barcode || '';
  // العملة والأسعار
  const currency = item.priceCurrency || 'USD';
  document.getElementById('modal-price-currency').value = currency;
  // تحويل الأسعار للعملة المختارة للعرض
  const rate = getRate();
  let costDisplay = item.cost;
  let priceDisplay = item.price;
  if(currency === 'OLD') { costDisplay = item.cost * rate; priceDisplay = item.price * rate; }
  else if(currency === 'NEW') { costDisplay = item.cost * rate / 100; priceDisplay = item.price * rate / 100; }
  document.getElementById('modal-item-cost').value = Math.round(costDisplay * 100) / 100;
  document.getElementById('modal-item-price').value = Math.round(priceDisplay * 100) / 100;
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
  // تحويل السعر المُدخل إلى دولار للتخزين
  const currency = document.getElementById('modal-price-currency').value;
  const rate = getRate();
  let costInput = parseFloat(document.getElementById('modal-item-cost').value) || 0;
  let priceInput = parseFloat(document.getElementById('modal-item-price').value) || 0;
  if(currency === 'OLD') { costInput = costInput / rate; priceInput = priceInput / rate; }
  else if(currency === 'NEW') { costInput = costInput / (rate/100); priceInput = priceInput / (rate/100); }
  item.cost = Math.round(costInput * 10000) / 10000;
  item.price = Math.round(priceInput * 10000) / 10000;
  item.priceCurrency = currency;
  // حذف minStock
  item.minStock = 0;
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
    return '<tr>' +
      '<td><span class="item-id">' + String(i+1).padStart(3,'0') + '</span></td>' +
      '<td style="font-weight:600">' + s.name + '</td>' +
      '<td>' + (s.phone||'—') + '</td>' +
      '<td>' + (s.address||'—') + '</td>' +
      '<td style="font-weight:700;color:var(--blue-link)">' + fmtUSD(total) + '</td>' +
      '<td>' + invLinks + '</td>' +
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
  saveData();
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
function renderSettings() {
  document.getElementById('set-name').value = db.company.name;
  document.getElementById('set-address').value = db.company.address;
  document.getElementById('set-phone').value = db.company.phone;
  document.getElementById('set-email').value = db.company.email;
  document.getElementById('set-slogan').value = db.company.slogan;
  if(!db.exchange) db.exchange = { usdToOld: 12000 };
  document.getElementById('set-usd-rate').value = db.exchange.usdToOld;
}

function saveCompanyName(name) {
  if (!name || name === db.company.name) return;
  db.company.name = name;
  saveData();
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
      '<tr onclick="openInvoiceDetail('' + inv.number + '')" style="cursor:pointer">' +
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
      '<tr onclick="openInvoiceDetail('' + inv.number + '')" style="cursor:pointer">' +
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
  const totalInvoices = invoices.reduce((s, i) => s + (i.total || 0), 0);
  const payments = (db.customerPayments || []).filter(p => p.customerName === customerName);
  const totalPaid = payments.reduce((s, p) => s + (p.amount || 0), 0);
  const remaining = totalInvoices - totalPaid;
  return { invoices, payments, totalInvoices, totalPaid, remaining };
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

  // جدول الفواتير
  const invTbody = document.getElementById('ca-invoices-tbody');
  invTbody.innerHTML = acc.invoices.length === 0
    ? '<tr><td colspan="3" style="text-align:center;padding:12px;color:var(--text-muted)">لا توجد فواتير</td></tr>'
    : acc.invoices.map(inv =>
        '<tr onclick="openInvoiceDetail('' + inv.number + '')" style="cursor:pointer">' +
        '<td><span class="inv-num">' + inv.number + '</span></td>' +
        '<td>' + inv.date + '</td>' +
        '<td><strong>' + fmtUSD(inv.total) + '</strong></td>' +
        '</tr>'
      ).join('');

  // جدول الدفعات
  const payTbody = document.getElementById('ca-payments-tbody');
  payTbody.innerHTML = acc.payments.length === 0
    ? '<tr><td colspan="3" style="text-align:center;padding:12px;color:var(--text-muted)">لا توجد دفعات مسجلة</td></tr>'
    : acc.payments.map((p, i) =>
        '<tr>' +
        '<td>' + p.date + '</td>' +
        '<td>' + (p.note || '—') + '</td>' +
        '<td style="color:var(--green-700)"><strong>' + fmtUSD(p.amount) + '</strong></td>' +
        '<td><button class="btn btn-ghost btn-sm" onclick="deleteCustomerPayment('' + customerName + '',' + i + ')" style="color:var(--red-600)">✕</button></td>' +
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
// SETUP SCREEN — يظهر مرة واحدة فقط
// ============================================================
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
window.addEventListener('DOMContentLoaded',()=>{
  if(!db.exchange) db.exchange = { usdToOld: 12000 };
  const hdr = document.getElementById('company-name-header');
  if (hdr) hdr.value = db.company.name;
  updateRateWidget();
  navigate('dashboard');
  // تحقق من الإعداد الأولي
  checkSetup();
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
