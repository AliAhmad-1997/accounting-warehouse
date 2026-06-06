const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Auto backup
  onRequestBackupData: (cb) => ipcRenderer.on('request-backup-data', cb),
  sendBackupData: (data) => ipcRenderer.send('backup-data', data),

  // تصدير يدوي
  exportBackup: (data) => ipcRenderer.invoke('export-backup', data),

  // استيراد
  importBackup: () => ipcRenderer.invoke('import-backup'),

  // قائمة النسخ
  listBackups: () => ipcRenderer.invoke('list-backups'),
});
