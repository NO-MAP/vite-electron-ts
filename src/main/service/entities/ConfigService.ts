import { injectable } from 'inversify'
import { I_ConfigService } from '../types/I_ConfigService'
import 'reflect-metadata'

@injectable()
export class ConfigService implements I_ConfigService {
  sayHello(): void {
    console.log('Hello from ConfigService')
  }
}
