const { app, BrowserWindow, Menu, session, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

// ===== الحل الرئيسي: حدد مجلد البيانات في AppData للمستخدم =====
// هذا يضمن إن البرنامج يكتب في مكان عند المستخدم صلاحيات عليه
// بدل مجلد التثبيت (C:\Program Files) اللي محتاج Admin
app.setPath('userData', path.join(app.getPath('appData'), 'AccountingWarehouse'));

// منع تعدد النوافذ
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) { app.quit(); }

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: 'برنامج المحاسبة والمستودعات',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      partition: 'persist:accounting',
    },
    // أيقونة البرنامج
    // icon: path.join(__dirname, 'assets/icon.ico'),
    show: false,
  });

  // تحميل الصفحة
  win.loadFile(path.join(__dirname, 'index.html'));

  // نعرضها بعد ما تجهز (بدون flash)
  win.once('ready-to-show', () => {
    win.show();
    win.focus();
    // تشغيل النسخة الاحتياطية اليومية بعد 3 ثواني من الفتح
    setTimeout(() => runDailyBackup(win), 3000);
  });

  // إخفاء قائمة التطبيق الافتراضية
  Menu.setApplicationMenu(null);
}

// ============================================================
// BACKUP HELPERS
// ============================================================
function getBackupDir() {
  const docs = app.getPath('documents');
  const dir = path.join(docs, 'AccountingBackups');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
}

function runDailyBackup(win) {
  try {
    const dir = getBackupDir();
    const today = new Date().toISOString().split('T')[0]; // 2026-06-05
    const filePath = path.join(dir, `backup-${today}.json`);
    // لو النسخة موجودة اليوم ما نكررها
    if (fs.existsSync(filePath)) return;
    // اطلب البيانات من الـ renderer
    win.webContents.send('request-backup-data');
  } catch(e) {
    console.error('Backup error:', e);
  }
}

function cleanOldBackups(keepDays = 30) {
  try {
    const dir = getBackupDir();
    const files = fs.readdirSync(dir).filter(f => f.startsWith('backup-') && f.endsWith('.json'));
    const cutoff = Date.now() - keepDays * 24 * 60 * 60 * 1000;
    files.forEach(f => {
      const full = path.join(dir, f);
      const stat = fs.statSync(full);
      if (stat.mtimeMs < cutoff) fs.unlinkSync(full);
    });
  } catch(e) {}
}

// IPC: استقبال البيانات من renderer وحفظها
ipcMain.on('backup-data', (event, jsonStr) => {
  try {
    const dir = getBackupDir();
    const today = new Date().toISOString().split('T')[0];
    const filePath = path.join(dir, `backup-${today}.json`);
    fs.writeFileSync(filePath, jsonStr, 'utf-8');
    cleanOldBackups(30);
    console.log('✅ Backup saved:', filePath);
  } catch(e) {
    console.error('Save backup error:', e);
  }
});

// IPC: تصدير يدوي — يفتح مربع حوار الحفظ
ipcMain.handle('export-backup', async (event, jsonStr) => {
  const { dialog } = require('electron');
  const today = new Date().toISOString().split('T')[0];
  const result = await dialog.showSaveDialog({
    title: 'حفظ نسخة احتياطية',
    defaultPath: `accounting-backup-${today}.json`,
    filters: [{ name: 'JSON', extensions: ['json'] }]
  });
  if (!result.canceled && result.filePath) {
    fs.writeFileSync(result.filePath, jsonStr, 'utf-8');
    return { success: true, path: result.filePath };
  }
  return { success: false };
});

// IPC: استيراد — يفتح مربع حوار الفتح
ipcMain.handle('import-backup', async () => {
  const { dialog } = require('electron');
  const result = await dialog.showOpenDialog({
    title: 'استيراد نسخة احتياطية',
    filters: [{ name: 'JSON', extensions: ['json'] }],
    properties: ['openFile']
  });
  if (!result.canceled && result.filePaths.length > 0) {
    const data = fs.readFileSync(result.filePaths[0], 'utf-8');
    return { success: true, data };
  }
  return { success: false };
});

// IPC: قائمة النسخ المحفوظة
ipcMain.handle('list-backups', () => {
  try {
    const dir = getBackupDir();
    const files = fs.readdirSync(dir)
      .filter(f => f.startsWith('backup-') && f.endsWith('.json'))
      .sort().reverse();
    return { success: true, files, dir };
  } catch(e) {
    return { success: false, files: [] };
  }
});

app.whenReady().then(() => {
  // السماح لجميع المستخدمين بالكتابة في session storage
  session.fromPartition('persist:accounting').setPermissionRequestHandler(
    (webContents, permission, callback) => {
      callback(true);
    }
  );

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  app.quit();
});

// فتح النافذة الموجودة لو حاول يشغل نسخة ثانية
app.on('second-instance', () => {
  const windows = BrowserWindow.getAllWindows();
  if (windows.length > 0) {
    if (windows[0].isMinimized()) windows[0].restore();
    windows[0].focus();
  }
});
