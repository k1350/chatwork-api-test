const { contextBridge } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector: string, text?: string) => {
    if (!text) return;
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependency of ["chrome", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});

contextBridge.exposeInMainWorld("envVars", {
  roomId: process.env.ROOM_ID,
  apiToken: process.env.API_TOKEN,
});
