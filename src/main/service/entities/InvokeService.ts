import { inject, injectable } from 'inversify'
import { TYPES } from '@shared/service-interface/types'
import { WindowService } from '@main/service/entities/WindowService'
import { type I_InvokeService } from '@shared/service-interface/I_InvokeService'

@injectable()
export class InvokeService implements I_InvokeService {
  @inject(TYPES.WindowService)
  private _windowService!: WindowService
  sayHello(): void {
    console.log('Hello from InvokeService')
    this._windowService.sayHello()
  }
}
