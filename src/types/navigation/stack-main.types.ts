import { StackNavigationProp } from '@react-navigation/stack'
import type { RouteProp } from '@react-navigation/native'

export type StackParamsType = {
  Home: undefined
  Detail: { url: string }
}

export type MainStackProps = StackNavigationProp<StackParamsType>

export type DetailScreenRouteProps = RouteProp<StackParamsType, 'Detail'>
