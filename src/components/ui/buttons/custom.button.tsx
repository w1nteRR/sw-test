import { FC, PropsWithChildren } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

interface ICustomButtonProps {
  onPress: () => void
}

export const CustomButton: FC<PropsWithChildren<ICustomButtonProps>> = ({
  children,
  onPress,
}) => {
  const tw = useTailwind()

  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw('border-solid border border-red-500 py-1 px-3')}
    >
      <Text style={tw('text-red-500 uppercase')}>{children}</Text>
    </TouchableOpacity>
  )
}
