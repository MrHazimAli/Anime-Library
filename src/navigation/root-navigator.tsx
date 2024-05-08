import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../features/home/screens/Home/Home'

const Stack = createStackNavigator()

export function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}