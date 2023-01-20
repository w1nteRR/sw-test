import { FC } from 'react'
import { View, Text } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

import { useFavoritesContext } from '../../hooks/context/useFavoritesContext'

import { CustomButton } from '../ui/buttons/custom.button'

export const HeadSection: FC = () => {
  const tw = useTailwind()
  const { resetFavorites } = useFavoritesContext()

  return (
    <View style={tw('flex-row justify-between items-center')}>
      <Text style={tw('text-2xl font-extralight')}>Fans</Text>
      <CustomButton onPress={() => resetFavorites()}>Clear Fans</CustomButton>
    </View>
  )
}
