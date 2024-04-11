import { AppService } from '@main/service/entities/AppService'
import { container } from '@main/service/inversify.config'
import { TYPES } from '@shared/service-interface/types'

const appService = container.get<AppService>(TYPES.AppService)
appService.init()
