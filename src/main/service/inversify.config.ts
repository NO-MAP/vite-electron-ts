import { Container } from 'inversify'
import { TYPES } from '@shared/service-interface/types'
import { ConfigService } from '@main/service/entities/ConfigService'
import { WindowService } from '@main/service/entities/WindowService'
import { AppService } from '@main/service/entities/AppService'
import 'reflect-metadata'

const container = new Container()
container.bind<AppService>(TYPES.AppService).to(AppService).inSingletonScope()
container.bind<ConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope()
container.bind<WindowService>(TYPES.WindowService).to(WindowService).inSingletonScope()

export { container }
