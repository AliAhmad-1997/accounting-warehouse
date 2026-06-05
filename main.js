const { app, BrowserWindow, Menu, session } = require('electron');
const path = require('path');

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
      // السماح بـ localStorage و sessionStorage بشكل كامل
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
  });

  // إخفاء قائمة التطبيق الافتراضية
  Menu.setApplicationMenu(null);
}

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
