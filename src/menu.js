import Vue from "vue";

const { app, Menu, shell, BrowserWindow } = require("electron");
var isMac = process.platform === "darwin";
const template = [
  ...(process.platform === "darwin"
    ? [
      {
        label: app.getName(),
        submenu: [
          { role: "about" },
          { type: "separator" },
          { role: "services" },
          { type: "separator" },
          { role: "hide" },
          { role: "hideothers" },
          { role: "unhide" },
          { type: "separator" },
          { role: "quit" }
        ]
      }
    ]
    : []),
  {
    label: "Dosya",
    submenu: [
      {
        label: "Yeni",
        accelerator: "CmdOrCtrl+N",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("file-new");
        }
      },
      {
        label: "Aç",
        accelerator: "CmdOrCtrl+O",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("file-open");
        }
      },
      {
        label: "Kaydet",
        accelerator: "CmdOrCtrl+S",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("file-save");
        }
      },
      { type: "separator" },
      {
        label: "Ayarlar",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("file-setting",
            "");
        }
      },
      { type: "separator" },
      isMac
        ? { 
          label: "Çıkış",
          role: "close" 
        }
        : { 
          label: "Çıkış",
          role: "quit" 
        }
    ]
  },
  // { role: 'editMenu' }
  {
    label: "Düzenle",
    submenu: [
      {
        label: "Geri al",
        accelerator: "CmdOrCtrl+Z",
        registerAccelerator: false,
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("edit-undo");
        }
      },
      {
        label: "İleri al",
        accelerator: "CmdOrCtrl+Y",
        registerAccelerator: false,
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("edit-redo");
        }
      },
      { type: "separator" },
      {
        label: "Kes",
        accelerator: "CmdOrCtrl+X",
        registerAccelerator: false,
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("edit-cut");
        }
      },
      {
        label: "Kopyala",
        accelerator: "CmdOrCtrl+C",
        registerAccelerator: false,
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("edit-copy");
        }
      },
      {
        label: "Yapıştır",
        accelerator: "CmdOrCtrl+V",
        registerAccelerator: false,
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("edit-paste");
        }
      },
      { type: "separator" },
      {
        label: "Bul",
        accelerator: "CmdOrCtrl+F",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("edit-find");
        }
      },
      {
        label: "Değiştir",
        accelerator: "CmdOrCtrl+H",
        click: () => {
          BrowserWindow.getFocusedWindow().webContents.send("edit-replace");
        }
      }
    ]
  },
  // { role: 'viewMenu' }
  {
    label: "Görünüm",
    submenu: [
      { 
        label: "Yeniden Yükle",
        role: "reload" 
      },
      { 
        label: "Yeniden Yüklemeye Zorla",
        role: "forcereload" 
      },
      { type: "separator" },
      { 
        label: "Yakınlaştırmayı Sıfırla",
        role: "resetzoom" 
      },
      { 
        label: "Yakınlaştır",
        role: "zoomin" 
      },
      { 
        label: "Uzaklaştır",
        role: "zoomout" 
      },
      { type: "separator" },
      { 
        label: "Tam Ekran Modu",
        role: "togglefullscreen" 
      }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: "Pencere",
    submenu: [
      { 
        label: "Küçült",
        role: "minimize" 
      },
      { 
        label: "Yakınlaştır",
        role: "zoom" 
      },
      ...(isMac
        ? [
          { type: "separator" },
          { role: "front" },
          { type: "separator" },
          { role: "window" }
        ]
        : [
          { 
            label: "Çıkış",
            role: "close" 
          }
        ])
    ]
  },
  {
    label: "Hakkında",
    role: "help",
    submenu: [
      {
        label: "Kivvi.com.tr",
        click() { shell.openExternal("https://www.kivvi.com.tr"); }
      },
      {
        label: "Develoop IDE Hakkında",
        click() { shell.openExternal("https://www.kivvi.com.tr/ekip/"); }
      },
      { type: "separator" },
      {
        label: "Güncelle",
        click() {
          BrowserWindow.getFocusedWindow().webContents.send("help-update");
        }
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
