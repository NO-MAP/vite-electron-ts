import { I_AppService } from '@shared/service-interface/I_AppService'
import { I_ConfigService } from '@shared/service-interface/I_ConfigService'
import { I_WindowService } from '@shared/service-interface/I_WindowService'

enum TYPES {
  AppService = 'AppService',
  ConfigService = 'ConfigService',
  WindowService = 'WindowService'
}

const ServiceCallKey = 'Service:Call'

interface ServiceTypeMapping {
  [TYPES.AppService]: I_AppService
  [TYPES.ConfigService]: I_ConfigService
  [TYPES.WindowService]: I_WindowService
}

type Service<T extends TYPES> = ServiceTypeMapping[T]

export { TYPES, ServiceCallKey, type Service }
