import { type DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { ListingStack } from './listing-navigator';
import { Favourite } from '../features/favourite/screens/Favourite/Favourite';

const Drawer = createDrawerNavigator();

export function DrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name='Listing' component={ListingStack} />
      <Drawer.Screen name='Favourite' component={Favourite} />
    </Drawer.Navigator>
  )
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}