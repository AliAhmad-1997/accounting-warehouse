// ============================================================
// preload.js — محدَّث لدعم SQLite
// أُضيفت: dbLoad, dbSave, dbMigrate, dbHasData
// كل الـ API القديم محفوظ كما هو
// ============================================================

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {

  // ============================================================
  // SQLite API (جديد)
  // ============================================================

  // تحميل كل البيانات من SQLite
  dbLoad: () => ipcRenderer.invoke('db-load'),

  // حفظ كل البيانات إلى SQLite
  dbSave: (data) => ipcRenderer.invoke('db-save', data),

  // ترحيل بيانات localStorage القديمة (يُستدعى مرة واحدة)
  dbMigrate: (jsonData) => ipcRenderer.invoke('db-migrate', jsonData),

  // التحقق هل في بيانات في SQLite
  dbHasData: () => ipcRenderer.invoke('db-has-data'),

  // تصدير واستيراد DB
  exportDatabase: () => ipcRenderer.invoke('export-database'),
  importDatabase: () => ipcRenderer.invoke('import-database'),

  // ============================================================
  // Backup API (محفوظ كما هو)
  // ============================================================

  // Auto backup
  onRequestBackupData: (cb) => ipcRenderer.on('request-backup-data', cb),
  sendBackupData: (data) => ipcRenderer.send('backup-data', data),

  // تصدير يدوي
  exportBackup: (data) => ipcRenderer.invoke('export-backup', data),

  // استيراد
  importBackup: () => ipcRenderer.invoke('import-backup'),

  // قائمة النسخ
  listBackups: () => ipcRenderer.invoke('list-backups'),

  // ============================================================
  // AUTH — كلمة السر (آمن عبر Node/crypto)
  // ============================================================
  authCheck: (plain) => ipcRenderer.invoke('auth-check', plain),
  authChange: (current, newPass) => ipcRenderer.invoke('auth-change', current, newPass),
  authCheckAdmin: (plain) => ipcRenderer.invoke('auth-check-admin', plain),

  // ============================================================
  // Incremental DB Operations
  // ============================================================
  dbSaveInvoice: (inv, type) => ipcRenderer.invoke('db-save-invoice', inv, type),
  dbDeleteInvoice: (number, type) => ipcRenderer.invoke('db-delete-invoice', number, type),
  dbSaveItem: (item) => ipcRenderer.invoke('db-save-item', item),
  dbDeleteItem: (id) => ipcRenderer.invoke('db-delete-item', id),
  dbSaveCustomer: (customer) => ipcRenderer.invoke('db-save-customer', customer),
  dbSaveSupplier: (supplier) => ipcRenderer.invoke('db-save-supplier', supplier),
  dbAddPayment: (type, payment) => ipcRenderer.invoke('db-add-payment', type, payment),
});
