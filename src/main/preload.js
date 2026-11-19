const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('loomus', {
  platform: process.platform,
  // Screen and window sources
  getSources: () => ipcRenderer.invoke('get-sources'),

  // Recording file storage
  saveRecording: (arrayBuffer, defaultName) =>
    ipcRenderer.invoke('save-recording', { buffer: arrayBuffer, defaultName }),
  showInFolder: (filePath) =>
    ipcRenderer.invoke('show-item-in-folder', filePath),

  // System locale detection
  getSystemLocale: () => ipcRenderer.invoke('get-system-locale'),

  // Floating camera bubble controls
  toggleCameraBubble: (show, options) =>
    ipcRenderer.invoke('bubble:toggle', { show, options }),
  updateCameraBubble: (options) =>
    ipcRenderer.invoke('bubble:update', options),
  onBubbleStateChanged: (callback) => {
    ipcRenderer.on('bubble:state-changed', (_event, data) => callback(data));
  },
  onBubbleApplyOptions: (callback) => {
    ipcRenderer.on('bubble:apply-options', (_event, data) => callback(data));
  },

  // Floating teleprompter controls
  toggleTeleprompter: (show, scriptText) =>
    ipcRenderer.invoke('teleprompter:toggle', { show, scriptText }),
  updateTeleprompter: (options) =>
    ipcRenderer.invoke('teleprompter:update', options),
  onTeleprompterStateChanged: (callback) => {
    ipcRenderer.on('teleprompter:state-changed', (_event, data) => callback(data));
  },
  onTeleprompterSetScript: (callback) => {
    ipcRenderer.on('teleprompter:set-script', (_event, data) => callback(data));
  },
  onTeleprompterApplyOptions: (callback) => {
    ipcRenderer.on('teleprompter:apply-options', (_event, data) => callback(data));
  },

  // Window controls
  minimizeWindow: () => ipcRenderer.invoke('window:minimize'),
  closeWindow: () => ipcRenderer.invoke('window:close'),
  setAlwaysOnTop: (flag) => ipcRenderer.invoke('window:always-on-top', flag),

  // macOS Permissions & Onboarding
  checkPermissions: () => ipcRenderer.invoke('permissions:check'),
  requestPermission: (type) => ipcRenderer.invoke('permissions:request', type),
  openSettings: (pane) => ipcRenderer.invoke('permissions:open-settings', pane)
});
