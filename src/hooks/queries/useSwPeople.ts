import { useMemo } from 'react'
import { useInfiniteQuery } from 'react-query'

import { swApi } from '../../api/swapi.api'

export const useSwPeople = () => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      'sw people',
      ({ pageParam = 1 }) => swApi.loadPeople(pageParam),
      {
        getNextPageParam: (lastPage) => {
          const nextCursor = lastPage.data.next

          if (nextCursor) {
            return nextCursor.charAt(nextCursor.length - 1)
          }

          return false
        },
      }
    )

  const characters = useMemo(() => {
    return data?.pages.flatMap((page) => page.data.results)
  }, [data?.pages.length])

  return {
    data,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    characters,
  }
}
