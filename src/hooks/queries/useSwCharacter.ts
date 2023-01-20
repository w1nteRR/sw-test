import { useQuery } from 'react-query'

import { swApi } from '../../api/swapi.api'

export const useSwCharacter = (id: string) => {
  const { isLoading, data } = useQuery(['character id', id], () =>
    swApi.loadCharacter(id)
  )

  return {
    isLoading,
    data,
  }
}
