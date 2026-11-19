const { app, BrowserWindow, desktopCapturer, dialog, ipcMain, shell, screen, session, systemPreferences } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow = null;
let bubbleWindow = null;
let teleprompterWindow = null;

function createMainWindow() {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;

  mainWindow = new BrowserWindow({
    width: Math.min(1080, width - 80),
    height: Math.min(780, height - 80),
    minWidth: 860,
    minHeight: 620,
    backgroundColor: '#0f1117',
    title: 'Loomus Studio',
    icon: path.join(__dirname, '../renderer/assets/logo.svg'),
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default',
    trafficLightPosition: { x: 20, y: 22 },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      webSecurity: true
    }
  });

  mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
    if (bubbleWindow) {
      bubbleWindow.close();
      bubbleWindow = null;
    }
    if (teleprompterWindow) {
      teleprompterWindow.close();
      teleprompterWindow = null;
    }
  });
}

function createBubbleWindow() {
  if (bubbleWindow) {
    bubbleWindow.show();
    return;
  }

  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;
  const bubbleSize = 220;

  bubbleWindow = new BrowserWindow({
    width: bubbleSize,
    height: bubbleSize,
    x: 40,
    y: height - bubbleSize - 40,
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    hasShadow: false,
    alwaysOnTop: true,
    resizable: false, // Prevents OS rectangle/resize borders around circular window
    roundedCorners: false,
    skipTaskbar: true,
    movable: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  if (process.platform === 'darwin') {
    bubbleWindow.setAlwaysOnTop(true, 'floating');
    bubbleWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
    bubbleWindow.setHasShadow(false);
  }

  bubbleWindow.loadFile(path.join(__dirname, '../renderer/bubble.html'));

  bubbleWindow.on('closed', () => {
    bubbleWindow = null;
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('bubble:state-changed', { visible: false });
    }
  });
}

function createTeleprompterWindow() {
  if (teleprompterWindow) {
    teleprompterWindow.show();
    return;
  }

  const primaryDisplay = screen.getPrimaryDisplay();
  const { width } = primaryDisplay.workAreaSize;
  const tWidth = 460;
  const tHeight = 280;

  teleprompterWindow = new BrowserWindow({
    width: tWidth,
    height: tHeight,
    minWidth: 300,
    minHeight: 180,
    maxWidth: 850,
    maxHeight: 650,
    x: Math.round((width - tWidth) / 2),
    y: 40,
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    hasShadow: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    movable: true,
    resizable: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  // Exclude teleprompter window from screen recordings completely
  teleprompterWindow.setContentProtection(true);

  if (process.platform === 'darwin') {
    teleprompterWindow.setAlwaysOnTop(true, 'floating');
    teleprompterWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  }

  teleprompterWindow.loadFile(path.join(__dirname, '../renderer/teleprompter.html'));

  teleprompterWindow.on('closed', () => {
    teleprompterWindow = null;
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('teleprompter:state-changed', { visible: false });
    }
  });
}

app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    const allowed = ['media', 'mediaKeySystem', 'display-capture', 'screen'];
    callback(allowed.includes(permission));
  });

  session.defaultSession.setPermissionCheckHandler((webContents, permission) => {
    const allowed = ['media', 'mediaKeySystem', 'display-capture', 'screen'];
    return allowed.includes(permission);
  });

  createMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// ========================
// IPC HANDLERS
// ========================

// 1. Get desktop & window sources
ipcMain.handle('get-sources', async () => {
  try {
    const sources = await desktopCapturer.getSources({
      types: ['screen', 'window'],
      thumbnailSize: { width: 500, height: 280 },
      fetchWindowIcons: true
    });

    return sources.map((s) => ({
      id: s.id,
      name: s.name,
      thumbnail: s.thumbnail.toDataURL(),
      appIcon: s.appIcon ? s.appIcon.toDataURL() : null,
      display_id: s.display_id
    }));
  } catch (err) {
    console.error('Error in get-sources:', err);
    throw err;
  }
});

// 2. Save video recording to local disk
ipcMain.handle('save-recording', async (_event, { buffer, defaultName }) => {
  try {
    const { canceled, filePath } = await dialog.showSaveDialog(mainWindow, {
      title: 'Guardar Grabación Loomus',
      defaultPath: defaultName || `Loomus_Grabacion_${new Date().toISOString().replace(/[:.]/g, '-')}.webm`,
      filters: [
        { name: 'Video WebM (*.webm)', extensions: ['webm'] },
        { name: 'Video MP4 (*.mp4)', extensions: ['mp4'] },
        { name: 'Todos los archivos (*.*)', extensions: ['*'] }
      ]
    });

    if (canceled || !filePath) {
      return { success: false, canceled: true };
    }

    await fs.promises.writeFile(filePath, Buffer.from(buffer));
    return { success: true, filePath };
  } catch (err) {
    console.error('Error saving recording:', err);
    return { success: false, error: err.message };
  }
});

// 3. Show file in Finder / Explorer
ipcMain.handle('show-item-in-folder', async (_event, filePath) => {
  if (filePath && fs.existsSync(filePath)) {
    shell.showItemInFolder(filePath);
    return true;
  }
  return false;
});

// 4. Get system locale (e.g. "es-419", "es-ES", "en-US")
ipcMain.handle('get-system-locale', () => {
  return app.getLocale();
});

// 5. Floating Camera Bubble controls
ipcMain.handle('bubble:toggle', async (_event, { show, options }) => {
  if (show) {
    if (!bubbleWindow) {
      createBubbleWindow();
    }
    bubbleWindow.show();
    if (options && bubbleWindow.webContents) {
      bubbleWindow.webContents.send('bubble:apply-options', options);
    }
  } else {
    if (bubbleWindow) {
      bubbleWindow.hide();
    }
  }
  return { visible: !!(bubbleWindow && bubbleWindow.isVisible()) };
});

ipcMain.handle('bubble:update', async (_event, options) => {
  if (!bubbleWindow || bubbleWindow.isDestroyed()) return false;

  if (options.size) {
    const currentBounds = bubbleWindow.getBounds();
    bubbleWindow.setBounds({
      x: currentBounds.x,
      y: currentBounds.y,
      width: options.size,
      height: options.size
    });
  }

  bubbleWindow.webContents.send('bubble:apply-options', options);
  return true;
});

// 6. Floating Teleprompter controls
ipcMain.handle('teleprompter:toggle', async (_event, { show, scriptText }) => {
  if (show === undefined) {
    show = !teleprompterWindow || !teleprompterWindow.isVisible();
  }
  if (show) {
    if (!teleprompterWindow) {
      createTeleprompterWindow();
    }
    teleprompterWindow.show();
    if (scriptText !== undefined && teleprompterWindow.webContents) {
      teleprompterWindow.webContents.send('teleprompter:set-script', scriptText);
    }
  } else {
    if (teleprompterWindow) {
      teleprompterWindow.hide();
    }
  }
  return { visible: !!(teleprompterWindow && teleprompterWindow.isVisible()) };
});

ipcMain.handle('teleprompter:update', async (_event, options) => {
  if (!teleprompterWindow || teleprompterWindow.isDestroyed()) return false;
  teleprompterWindow.webContents.send('teleprompter:apply-options', options);
  return true;
});

// 7. Window actions
ipcMain.handle('window:minimize', () => {
  if (mainWindow) mainWindow.minimize();
});

ipcMain.handle('window:close', () => {
  if (mainWindow) mainWindow.close();
});

ipcMain.handle('window:always-on-top', (_event, flag) => {
  if (mainWindow) mainWindow.setAlwaysOnTop(!!flag);
});

// 8. macOS Permissions & Onboarding API
ipcMain.handle('permissions:check', async () => {
  if (process.platform !== 'darwin' || !systemPreferences.getMediaAccessStatus) {
    return { microphone: 'granted', camera: 'granted', screen: 'granted' };
  }
  return {
    microphone: systemPreferences.getMediaAccessStatus('microphone'),
    camera: systemPreferences.getMediaAccessStatus('camera'),
    screen: systemPreferences.getMediaAccessStatus('screen')
  };
});

ipcMain.handle('permissions:request', async (_event, type) => {
  if (process.platform !== 'darwin') return true;
  try {
    if (type === 'microphone' || type === 'camera') {
      return await systemPreferences.askForMediaAccess(type);
    }
    if (type === 'screen') {
      await desktopCapturer.getSources({ types: ['screen'], thumbnailSize: { width: 1, height: 1 } });
      return systemPreferences.getMediaAccessStatus('screen') === 'granted';
    }
  } catch (err) {
    console.warn(`Error requesting ${type} permission:`, err);
  }
  return false;
});

ipcMain.handle('permissions:open-settings', async (_event, pane) => {
  if (process.platform !== 'darwin') return;
  const panes = {
    screen: 'x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture',
    microphone: 'x-apple.systempreferences:com.apple.preference.security?Privacy_Microphone',
    camera: 'x-apple.systempreferences:com.apple.preference.security?Privacy_Camera'
  };
  const target = panes[pane] || 'x-apple.systempreferences:com.apple.preference.security';
  shell.openExternal(target);
});
