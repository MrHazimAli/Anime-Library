import { createDrawerNavigator } from '@react-navigation/drawer';
import { ListingStack } from './listing-navigator';
import { Favourite } from '../features/favourite/screens/Favourite/Favourite';

const Drawer = createDrawerNavigator();

export function DrawerStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Listing' component={ListingStack} />
      <Drawer.Screen name='Favourite' component={Favourite} />
    </Drawer.Navigator>
  )
}