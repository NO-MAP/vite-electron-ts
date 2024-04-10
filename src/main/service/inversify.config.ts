import { Container } from 'inversify'
import { TYPES } from './types'
import { ConfigService } from './entities/ConfigService'
import { WindowService } from './entities/WindowService'
import { InvokeService } from './entities/InvokeService'
import { AppService } from './entities/AppService'

const container = new Container()
container.bind<AppService>(TYPES.AppService).to(AppService)
container.bind<ConfigService>(TYPES.ConfigService).to(ConfigService)
container.bind<WindowService>(TYPES.WindowService).to(WindowService)
container.bind<InvokeService>(TYPES.InvokeService).to(InvokeService)

export { container }
