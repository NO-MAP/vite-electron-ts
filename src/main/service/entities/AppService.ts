import { inject, injectable } from 'inversify'
import { I_AppService } from '../types/I_AppService'
import { BrowserWindow, app, ipcMain } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { WindowService } from './WindowService'
import { TYPES } from '../types'
import 'reflect-metadata'

@injectable()
export class AppService implements I_AppService {
  @inject(TYPES.WindowService)
  private _windowService!: WindowService

  init(): void {
    console.log('init app')
    app.whenReady().then(() => {
      // Set app user model id for windows
      electronApp.setAppUserModelId('com.electron')

      // Default open or close DevTools by F12 in development
      // and ignore CommandOrControl + R in production.
      // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
      app.on('browser-window-created', (_, window) => {
        optimizer.watchWindowShortcuts(window)
      })

      app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) this._windowService.createMainWindow()
      })

      app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
          app.quit()
        }
      })
      // IPC test
      ipcMain.on('ping', () => console.log('pong'))

      this._windowService.createMainWindow()
    })
  }
}