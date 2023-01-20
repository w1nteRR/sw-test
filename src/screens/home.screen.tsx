import { FC } from 'react'
import { View } from 'react-native'
import { useTailwind } from 'tailwind-rn'

import { CharacterList } from '../components/home/character-list/character.list'
import { HeadSection } from '../components/home/head.section'
import { InfoSection } from '../components/home/info-section/info.container'

import { FavoritesProvider } from '../context/favorites.context'

export const HomeScreen: FC = () => {
  const tw = useTailwind()

  return (
    <FavoritesProvider>
      <View style={tw('m-5')}>
        <HeadSection />

        <InfoSection />

        <CharacterList />
      </View>
    </FavoritesProvider>
  )
}
