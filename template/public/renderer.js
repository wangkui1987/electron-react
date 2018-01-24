// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


const { ipcRenderer } = require('electron');

function message() {
    console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"
    console.log(11);
}
// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//     alert(arg) // prints "pong"
// })
// ipcRenderer.send('asynchronous-message', 'ping')