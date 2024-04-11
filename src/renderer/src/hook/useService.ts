import { ServiceMap } from '@shared/service-interface/types'

export const useService = <T = symbol>(type: T): ServiceMap<T> => {
  console.log('useService', type)
  return {} as ServiceMap<T>
}
