import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Airing } from '../features/listing/screens/Airing/Airing';
import { Complete } from '../features/listing/screens/Complete/Complete';
import { Upcoming } from '../features/listing/screens/Upcoming/Upcoming';

const Tab = createBottomTabNavigator();

export function ListingTabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name='Airing' component={Airing} />
      <Tab.Screen name='Complete' component={Complete} />
      <Tab.Screen name='Upcoming' component={Upcoming} />
    </Tab.Navigator>
  );
}