import { createContext, FC, PropsWithChildren, useState } from 'react'

interface IFavoritesContext {
  favorites: {
    female: string[]
    male: string[]
    'n/a': string[]
  }

  toggleFavorites: (name: string, gender: string) => void
  resetFavorites: () => void
  getFavoritesCount: (gender: string) => number
}

type Gender = 'male' | 'female' | 'n/a'

export const FavoritesContext = createContext<IFavoritesContext>(
  {} as IFavoritesContext
)

export const FavoritesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState({
    male: [],
    female: [],
    'n/a': [],
  })

  const toggleFavorites = (name: string, gender: string) => {
    const favoritesSet = new Set<string>(Object.values(favorites).flat())

    if (favoritesSet.has(name)) {
      setFavorites((prev) => ({
        ...prev,
        [gender]: prev[gender as Gender].filter((value) => value !== name),
      }))

      return
    }

    setFavorites((prev) => ({
      ...prev,
      [gender]: [...prev[gender as Gender], name],
    }))
  }

  const resetFavorites = () => [
    setFavorites({
      male: [],
      female: [],
      'n/a': [],
    }),
  ]

  const getFavoritesCount = (gender: string) => {
    return favorites[gender as Gender].length
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, resetFavorites, toggleFavorites, getFavoritesCount }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
