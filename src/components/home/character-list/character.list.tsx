import { useNavigation } from '@react-navigation/native'
import { FC, useCallback } from 'react'
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  Dimensions,
} from 'react-native'

import { CharacterListItem } from './character.item'

import { useSwPeople } from '../../../hooks/queries/useSwPeople'
import { useFavoritesContext } from '../../../hooks/context/useFavoritesContext'

import { MainStackProps } from '../../../types/navigation/stack-main.types'
import { Screens } from '../../../types/enums/screens.enum'
import { ICharacter } from '../../../types/character/character.types'

const listHeight = Dimensions.get('screen').height

export const CharacterList: FC = () => {
  const navigation = useNavigation<MainStackProps>()
  const { characters, isLoading, fetchNextPage, isFetchingNextPage } =
    useSwPeople()

  const { toggleFavorites, favorites } = useFavoritesContext()

  const renderItem = (itemInfo: ListRenderItemInfo<ICharacter>) => {
    const { item } = itemInfo

    const favoritesSet = new Set<string>(Object.values(favorites).flat())

    return (
      <CharacterListItem
        onCardPress={() =>
          navigation.navigate(Screens.Detail, { url: item.url })
        }
        onFavoriteIconPress={() => toggleFavorites(item.name, item.gender)}
        item={item}
        isFavorite={favoritesSet.has(item.name)}
      />
    )
  }

  const handleEndReached = () => {
    fetchNextPage()
  }

  const keyExtractor = useCallback((item: ICharacter) => String(item.url), [])

  if (isLoading) return <ActivityIndicator size='small' />

  return (
    <>
      <FlatList
        style={{ height: listHeight * 0.7 }}
        data={characters}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={handleEndReached}
        ListFooterComponent={
          <ActivityIndicator size='small' animating={isFetchingNextPage} />
        }
      />
    </>
  )
}
