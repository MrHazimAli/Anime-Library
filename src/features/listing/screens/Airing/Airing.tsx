import { View } from 'react-native';
import { Button } from '../../../../shared/Button/Button';
import { Text } from '../../../../shared/Text/Text';
import { useStyles } from 'react-native-unistyles';

import { stylesheet } from './airing.styles'

export function Airing() {

  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text text='Airing' />
      <Button label='Detail View' />
    </View>
  )
}