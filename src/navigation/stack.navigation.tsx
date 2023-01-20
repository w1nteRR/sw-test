import { createStackNavigator } from '@react-navigation/stack'

import { DetailScreen } from '../screens/detail.screen'
import { HomeScreen } from '../screens/home.screen'

import { Screens } from '../types/enums/screens.enum'
import { StackParamsType } from '../types/navigation/stack-main.types'

const Stack = createStackNavigator<StackParamsType>()

const screenOptions = {
  headerTitle: () => null,
}

export default () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={Screens.Home} component={HomeScreen} />
      <Stack.Screen name={Screens.Detail} component={DetailScreen} />
    </Stack.Navigator>
  )
}
