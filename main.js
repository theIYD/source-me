const electron = require('electron')
const app = electron.app
const {BrowserWindow, Tray} = require('electron')

const path = require('path')
const url = require('url')
const Menu = electron.Menu
const ipc = electron.ipcMain
const dialog = electron.dialog
const globalShortcut = electron.globalShortcut
let quote = require('./build/assets/js/quote.js')

let mainWindow

function createWindow () {
  // Create the browser window.
  let windowOptions = {
    width: 1080,
    minWidth: 680,
    height: 840,
    autoHideMenuBar: true
  }

  if (process.platform === 'linux') {
    windowOptions.icon = path.join(__dirname, '/build/assets/img/logo.png')
  }

  mainWindow = new BrowserWindow(windowOptions)

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.on('ready', () => {
  globalShortcut.register('CommandOrControl+Alt+Q', function () {
    mainWindow.close()
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})

//a function to open external links in BrowserWindows
function openSourcesInBrowserWindows(url) {
    let win = new BrowserWindow({ 
      width: 1200, 
      height: 720
     })
    win.on('close', function () { win = null })
    win.loadURL(url)
    win.show()
}

let appIcon = null
let iconName

//put icon in tray
ipc.on('put-in-tray', (event) => {
  if (process.platform === 'win32') {
    iconName = '/build/assets/img/logo.ico'
  } else {
    iconName = '/build/assets/img/logo.png'
  }

  const iconPath = path.join(__dirname, iconName)
  appIcon = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate([

    {
      label: 'About',
      click: () => {
        openSourcesInBrowserWindows('https://theiyd.github.io/source-me/index.html')
      }
    },

    {
      label: 'Quote of the Day',
      click: () => {
        quote.quoteWindow()
      }
    },

    {
      label: 'Other Resources',
      submenu: [
        {
          label: 'JSPlaygrounds',
          click: () => {
            openSourcesInBrowserWindows('https://stephengrider.github.io/JSPlaygrounds/')
          }
        },

        {
          label: 'W3Schools',
          click: () => {
            openSourcesInBrowserWindows('https://www.w3schools.com/')
          }
        },

        {
          label: 'CSS Tricks',
          click: () => {
            openSourcesInBrowserWindows('https://css-tricks.com/');
          }
        }
      ]
    },

    {
      label: 'Quit',
      click: () => {
        app.quit()
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
