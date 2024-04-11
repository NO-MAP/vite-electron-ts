import { I_AppService } from '@shared/service-interface/I_AppService'
import { I_ConfigService } from '@shared/service-interface/I_ConfigService'

const TYPES = {
  AppService: Symbol.for('AppService'),
  ConfigService: Symbol.for('ConfigService'),
  InvokeService: Symbol.for('InvokeService'),
  WindowService: Symbol.for('WindowService')
}

type ServiceMap<T = symbol> = T extends typeof TYPES.AppService
  ? I_AppService
  : T extends typeof TYPES.ConfigService
    ? I_ConfigService
    : never

export { TYPES, type ServiceMap }
