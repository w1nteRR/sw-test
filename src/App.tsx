import { NavigationContainer } from '@react-navigation/native'
import { TailwindProvider } from 'tailwind-rn'
import { QueryClient, QueryClientProvider } from 'react-query'

import MainStack from './navigation/stack.navigation'

import utilities from '../tailwind.json'

const queryClient = new QueryClient()

const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <TailwindProvider utilities={utilities}>
          <MainStack />
        </TailwindProvider>
      </QueryClientProvider>
    </NavigationContainer>
  )
}

export default App
