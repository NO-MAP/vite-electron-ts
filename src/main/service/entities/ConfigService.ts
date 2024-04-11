import { type I_ConfigService } from '@shared/service-interface/I_ConfigService'
import { injectable } from 'inversify'

@injectable()
export class ConfigService implements I_ConfigService {
  sayHello(): void {
    console.log('Hello from ConfigService')
  }
}
