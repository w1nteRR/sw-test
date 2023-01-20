import { FC } from 'react'
import { View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

import { InfoCard } from './info.card'

import { useFavoritesContext } from '../../../hooks/context/useFavoritesContext'

import { Gender } from '../../../types/enums/gender.enum'

export const InfoSection: FC = () => {
  const tw = useTailwind()
  const { getFavoritesCount } = useFavoritesContext()

  return (
    <View style={tw('flex-row my-5')}>
      <InfoCard
        title='Female Fans'
        counter={getFavoritesCount(Gender.Female)}
      />
      <InfoCard title='Male Fans' counter={getFavoritesCount(Gender.Male)} />
      <InfoCard title='Others' counter={getFavoritesCount(Gender.Others)} />
    </View>
  )
}
