import { app, BrowserWindow, protocol, ipcMain } from 'electron';
import createProtocol from 'umi-plugin-electron-builder/lib/createProtocol';
import path from 'path';
// import installExtension, {
//   REACT_DEVELOPER_TOOLS,
// } from 'electron-devtools-installer';

const isDevelopment = process.env.NODE_ENV === 'development';

type WinMap = Record<string, BrowserWindow>;

const winMap: WinMap = {};

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } },
]);

function createWindow(name: string = 'mainWin') {
  const IS_MAIN = name === 'mainWin';
  const url = isDevelopment
    ? `http://localhost:8000/#/${IS_MAIN ? '' : name}`
    : `${IS_MAIN ? '.' : './' + name}/index.html/#/${IS_MAIN ? '' : name}`;
  winMap[name] = new BrowserWindow({
    width: 900,
    height: 600,
    resizable: name !== 'page2',
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  winMap[name].webContents.send('test-event');
  if (isDevelopment) {
    winMap[name].loadURL(url);
  } else {
    createProtocol('app');
    winMap[name].loadURL(`app://${url}`);
  }
}

ipcMain.handle('new-win', (e, params) => {
  if (!winMap[params.winName] || winMap[params.winName].isDestroyed()) {
    createWindow(params.winName);
  } else {
    winMap[params.winName].show();
  }
});

ipcMain.handle('close-win', (e, params) => {
  const { winName } = params;
  if (winMap[winName] && !winMap[winName].isDestroyed()) {
    winMap[winName].close();
  }
});

app.on('ready', async () => {
  // if (isDevelopment) {
  //   await installExtension(REACT_DEVELOPER_TOOLS);
  // }
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (winMap.mainWin === null) {
    createWindow();
  }
});
