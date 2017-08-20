const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const {BrowserWindow, Tray} = require('electron')

const path = require('path')
const url = require('url')
const Menu = electron.Menu
const ipc = electron.ipcMain
const dialog = electron.dialog
const shell = electron.shell
const globalShortcut = electron.globalShortcut
let quote = require('./build/assets/js/quote.js');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.

  let windowOptions = {
    width: 650,
    height: 12 * 2 + 12 + 8 + (32 + 2) * 18,
    maximizable: false,
    resizable: false,
    autoHideMenuBar: true,
    frame: false
  }

  if(process.platform === 'linux') {
    windowOptions.icon = path.join(__dirname, '/build/assets/img/logo.png');
  }

  mainWindow = new BrowserWindow(windowOptions);

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
app.on('ready', () => {
  globalShortcut.register('CommandOrControl+Alt+Q', function () {
    mainWindow.close();
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

let appIcon = null
let iconName

ipc.on('put-in-tray',  (event) => {

  if(process.platform === 'win32') {
    iconName = '/build/assets/img/logo.ico';

  } else if(process.platform === 'darwin') {
    iconName = '/build/assets/img/logo.icns';

  } else {
    iconName = '/build/assets/img/logo.png';
  }

  const iconPath = path.join(__dirname, iconName)
  appIcon = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate([

  {
    label: 'About',
    click: () => {
      shell.openExternal('https://theiyd.github.io/source-me/index.html');
    },
  },

  {
    label: 'Quote of the Day',
    click: () => {
      quote.quoteWindow();
    }
  },

  {
    label: 'Other Resources', 
    submenu: [
      {
        label: 'JSPlaygrounds',
        click: () => {
          shell.openExternal('https://stephengrider.github.io/JSPlaygrounds/');
        }
      },

      {
        label: 'W3Schools',
        click: () => {
          shell.openExternal('https://www.w3schools.com/');
        }
      }, 

      {
        label: 'CSS Tricks',
        click: () => {
          shell.openExternal('https://css-tricks.com/');
        }
      }
    ]
  },

  {
    label: 'Quit',
    click: () => {
      //event.sender.send('tray-removed')
      app.quit();
    }
  }])

  appIcon.setToolTip('Source Me in tray.')
  appIcon.setContextMenu(contextMenu)
})

ipc.on('remove-tray', () => {
  appIcon.destroy()
})

app.on('window-all-closed', () => {
  if (appIcon) {
    appIcon.destroy()
  } 
})