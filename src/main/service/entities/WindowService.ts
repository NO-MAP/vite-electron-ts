import { inject, injectable } from 'inversify'
import { BrowserWindow, shell } from 'electron'
import { is } from '@electron-toolkit/utils'
import { join } from 'path'
import icon from '../../../../resources/icon.png?asset'
import { type I_WindowService } from '@shared/service-interface/I_WindowService'
import { TYPES } from '@shared/service-interface/types'
import { I_ConfigService } from '@shared/service-interface/I_ConfigService'

@injectable()
export class WindowService implements I_WindowService {
  mainWindow?: BrowserWindow
  @inject(TYPES.ConfigService)
  private _configService!: I_ConfigService
  sayHello(): void {
    this._configService.sayHello()
    console.log('Hello from WindowService')
  }

  createMainWindow(): void {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
      width: 900,
      height: 670,
      show: false,
      autoHideMenuBar: true,
      ...(process.platform === 'linux' ? { icon } : {}),
      webPreferences: {
        preload: join(__dirname, '../preload/index.js'),
        sandbox: false
      }
    })

    mainWindow.on('ready-to-show', () => {
      mainWindow.show()
    })

    mainWindow.webContents.setWindowOpenHandler((details) => {
      shell.openExternal(details.url)
      return { action: 'deny' }
    })

    // HMR for renderer base on electron-vite cli.
    // Load the remote URL for development or the local html file for production.
    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
      mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
    } else {
      mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
    }

    this.mainWindow = mainWindow
  }
}
