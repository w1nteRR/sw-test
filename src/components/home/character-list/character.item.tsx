import { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

import { ICharacter } from '../../../types/character/character.types'

import HeartFill from '../../../assets/heart-fill.svg'
import Heart from '../../../assets/heart.svg'

interface ICharacterListItemProps {
  onCardPress: () => void
  onFavoriteIconPress: () => void
  item: ICharacter
  isFavorite: boolean
}

export const CharacterListItem = memo<ICharacterListItemProps>(
  ({ onCardPress, onFavoriteIconPress, item, isFavorite }) => {
    const { name, birth_year, gender } = item

    const tw = useTailwind()

    return (
      <TouchableOpacity
        style={{ height: 75 }}
        onPress={onCardPress}
        activeOpacity={0.7}
      >
        <View style={tw('flex-row items-center p-5 bg-white')}>
          <TouchableOpacity
            style={tw(`w-5 h-5 items-center justify-center`)}
            onPress={onFavoriteIconPress}
          >
            {isFavorite ? (
              <HeartFill width={20} height={20} />
            ) : (
              <Heart width={15} height={15} />
            )}
          </TouchableOpacity>

          <View style={tw('flex-row flex-1 justify-between mx-2')}>
            {[name, birth_year, gender].map((value, index) => (
              <Text style={tw('text-xs')} key={index}>
                {value}
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    )
  },
  (prev, next) => prev.isFavorite === next.isFavorite
)
