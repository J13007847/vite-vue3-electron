const Path = require('path');
const join = Path.join;
const Electron = require('electron');
const app = Electron.app;
const BrowserWindow = Electron.BrowserWindow;

const isDev = !app.isPackaged;

async function createWindow() {
  try {
    const win = new BrowserWindow({
      width: 1000,
      height: 800,
      webPreferences: {
        nodeIntegration: true,
        webSecurity: false,
        enableRemoteModule: true,
        contextIsolation: false,
      },
      autoHideMenuBar: isDev ? false : true,
    });

    win.maximize();
    const URL = isDev
      ? `http://localhost:3000`
      : `file://${join(app.getAppPath(), 'dist/index.html')}`;
    win.loadURL(URL);

    if (isDev) {
      win.webContents.openDevTools();
    }

    win.on('closed', () => {
      win.destroy();
    });
  } catch (error) {
    app.quit();
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('ready', async () => {
  createWindow();
});

if (isDev) {
 
}
