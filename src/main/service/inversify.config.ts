import { Container } from 'inversify'
import { TYPES } from '@shared/service-interface/types'
import { ConfigService } from '@main/service/entities/ConfigService'
import { WindowService } from '@main/service/entities/WindowService'
import { AppService } from '@main/service/entities/AppService'
import { InvokeService } from '@main/service/entities/InvokeService'
import 'reflect-metadata'

const container = new Container()
container.bind<AppService>(TYPES.AppService).to(AppService)
container.bind<ConfigService>(TYPES.ConfigService).to(ConfigService)
container.bind<WindowService>(TYPES.WindowService).to(WindowService)
container.bind<InvokeService>(TYPES.InvokeService).to(InvokeService)

export { container }
