import {
  ICharacter,
  ICharacterListResponse,
} from '../types/character/character.types'
import { mainInstance } from './axios.config'

export const swApi = {
  async loadPeople(page = 1) {
    return mainInstance.get<ICharacterListResponse>(`/people`, {
      params: {
        page,
      },
    })
  },
  async loadCharacter(url: string) {
    return mainInstance.get<ICharacter>(url, {
      baseURL: '/',
    })
  },
}
