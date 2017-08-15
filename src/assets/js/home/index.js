const ipc = require('electron').ipcRenderer

let trayOn = false

//Start the tray
$(document).ready(() => {

    if (trayOn) {
        trayOn = false
        ipc.send('remove-tray')
    } else {
        trayOn = true
        console.log('Tray on')
        ipc.send('put-in-tray')
    }

// Tray removed from context menu on icon
ipc.on('tray-removed', function () {
  ipc.send('remove-tray')
  trayOn = false
  console.log('Tray removed.')
})
});

  