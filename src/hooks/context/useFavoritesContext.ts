import { useContext } from 'react'

import { FavoritesContext } from '../../context/favorites.context'

export const useFavoritesContext = () => {
  return useContext(FavoritesContext)
}
