import { createStyleSheet, UnistylesRuntime } from 'react-native-unistyles';

export const stylesheet = createStyleSheet({
  container: {
    flex: 1,
    paddingTop: UnistylesRuntime.insets.top
  }
})