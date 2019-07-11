'use strict'

import { app, protocol, BrowserWindow } from 'electron';
import { createProtocol, installVueDevtools } from 'vue-cli-plugin-electron-builder/lib'
import {ipcMain} from "electron";
import DatabaseConnection from "./DatabaseConnection";
import {ipcPayload} from "./interfaces/interfaces";
import { UserServiceCb } from "./services/UserService";
import { CategoryServiceCb } from "./services/CategoryService";
import { ProductServiceCb } from "./services/ProductService";


const isDevelopment = process.env.NODE_ENV !== 'production';
let win: Electron.BrowserWindow | null;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true } }]);

const createWindow  = async() => {
  // Create the browser window.
  win = new BrowserWindow({ webPreferences: {
    nodeIntegration: true
  }});

  win.maximize();
  //win.setFullScreen(true);

  //win.once("ready-to-show", () => {win.show()});

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app');
    // Load the index.html when not in development
    win.loadURL('app://./index.html');
  }

  win.on('closed', () => {
    win = null
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installVueDevtools()
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

ipcMain.on("user-service", async (event: any, payload: ipcPayload) =>
  UserServiceCb(DatabaseConnection, payload, event)
);

ipcMain.on("category-service", async (event: any, payload: ipcPayload) =>
  CategoryServiceCb(DatabaseConnection, payload, event)
);

ipcMain.on("product-service", async (event: any, payload: ipcPayload) =>
  ProductServiceCb(DatabaseConnection, payload, event)
);

