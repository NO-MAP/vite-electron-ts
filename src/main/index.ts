import { AppService } from './service/entities/AppService'
import { container } from './service/inversify.config'
import { TYPES } from './service/types'

const appService = container.get<AppService>(TYPES.AppService)
appService.init()
