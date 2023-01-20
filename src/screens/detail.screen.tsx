import { useRoute } from '@react-navigation/native'
import { FC } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

import { useSwCharacter } from '../hooks/queries/useSwCharacter'

import { DetailScreenRouteProps } from '../types/navigation/stack-main.types'

export const DetailScreen: FC = () => {
  const {
    params: { url },
  } = useRoute<DetailScreenRouteProps>()

  const { data, isLoading } = useSwCharacter(url)

  if (isLoading) return <ActivityIndicator size='small' />

  return (
    <View>
      <Text>{JSON.stringify(data?.data, undefined, 2)}</Text>
    </View>
  )
}
