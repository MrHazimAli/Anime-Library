import { UnistylesRegistry } from 'react-native-unistyles';
import { lightTheme } from './themes';

type AppThemes = {
  light: typeof lightTheme;
};

UnistylesRegistry.addThemes({
  light: lightTheme,
}).addConfig({
  initialTheme: 'light',
  adaptiveThemes: false
});

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
