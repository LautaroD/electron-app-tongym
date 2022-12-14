const electron = require("electron");
const { autoUpdater } = require('electron-updater');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
    let mainWindow = new BrowserWindow({
        width: 1500,
        height: 1000,
        title: "Todo o Nada - Gym",
        titleBarStyle: 'hiddenInset',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
    });
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );

    mainWindow.maximize();

    if (isDev) mainWindow.webContents.openDevTools();
    if (!isDev) mainWindow.removeMenu();

    autoUpdater.checkForUpdatesAndNotify();

    mainWindow.on("closed", () => (mainWindow = null));

    return mainWindow;
}

// app.on("ready", createWindow);
app.on("ready", () => {
    mainWindow = createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});