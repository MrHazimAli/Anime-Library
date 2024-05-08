import { createStackNavigator } from '@react-navigation/stack'
import { ListingTabStack } from './listing-tab-navigator'
import { Details } from '../features/listing/screens/Details/Details'

const Stack = createStackNavigator()

export function ListingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Home' component={ListingTabStack} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}