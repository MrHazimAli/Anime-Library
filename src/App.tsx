import { NavigationContainer } from '@react-navigation/native';
import { DrawerStack } from './navigation/drawer-navigator';
import './styles/unistyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <DrawerStack />
      </NavigationContainer>
    </QueryClientProvider>
  )
}