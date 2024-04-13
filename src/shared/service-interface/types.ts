import { I_AppService } from '@shared/service-interface/I_AppService'
import { I_ConfigService } from '@shared/service-interface/I_ConfigService'
import { I_WindowService } from '@shared/service-interface/I_WindowService'

enum TYPES {
  AppService = 'AppService',
  ConfigService = 'ConfigService',
  InvokeService = 'InvokeService',
  WindowService = 'WindowService'
}

const ServiceCallKey = 'Service:Call'

type Service<T extends TYPES> = T extends TYPES.ConfigService
  ? I_ConfigService
  : T extends TYPES.WindowService
    ? I_WindowService
    : T extends TYPES.AppService
      ? I_AppService
      : never

export { TYPES, ServiceCallKey, type Service }
