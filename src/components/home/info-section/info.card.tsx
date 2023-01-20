import { FC } from 'react'
import { Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

interface IInfoCardProps {
  title: string
  counter: number
}

export const InfoCard: FC<IInfoCardProps> = ({ title, counter }) => {
  const tw = useTailwind()

  return (
    <View style={tw('p-3 flex-1 mx-1 bg-white rounded')}>
      <Text style={tw('text-2xl')}>{counter}</Text>
      <Text style={tw('text-xs')}>{title}</Text>
    </View>
  )
}
