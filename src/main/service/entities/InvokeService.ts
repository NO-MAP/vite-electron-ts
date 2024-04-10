import { inject, injectable } from 'inversify'
import { I_InvokeService } from '../types/I_InvokeService'
import { TYPES } from '../types'
import { I_WindowService } from '../types/I_WindowService'
import 'reflect-metadata'

@injectable()
export class InvokeService implements I_InvokeService {
  @inject(TYPES.WindowService)
  private _windowService!: I_WindowService
  sayHello(): void {
    console.log('Hello from InvokeService')
    this._windowService.sayHello()
  }
}
