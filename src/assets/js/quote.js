const {BrowserWindow} = require('electron');
const path = require('path');

let window;
exports.quoteWindow = () => {
    let options = {
        width: 500,
        height: 250,
        resizable: false,
        autoHideMenuBar: true,
        frame: false
    }

    window = new BrowserWindow(options);
    const modalPath = path.join('file://', __dirname, '../../../build/pickers/quote/quote.html')
    window.on('close', function () { window = null })
    window.loadURL(modalPath)
    window.show()
}
