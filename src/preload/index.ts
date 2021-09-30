import type { IpcRendererEvent } from 'electron';
import { contextBridge, ipcRenderer } from 'electron';

const apiKey = 'electron';

const api: any = {
  versions: process.versions,
  ipcRenderer,
  onMainEvent(channel: string, fn: (event: IpcRendererEvent, ...args: any[]) => void) {
    console.log('添加 ipc 监听');
    ipcRenderer.on(channel, fn);
  },
};

contextBridge.exposeInMainWorld(apiKey, api);
