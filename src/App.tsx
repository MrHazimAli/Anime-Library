import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './navigation/root-navigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}