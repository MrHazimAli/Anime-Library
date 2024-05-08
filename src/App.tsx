import { NavigationContainer } from '@react-navigation/native';
import { DrawerStack } from './navigation/drawer-navigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  )
}