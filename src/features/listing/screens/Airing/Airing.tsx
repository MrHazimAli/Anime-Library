import { View } from 'react-native';
import { Button } from '../../../../shared/Button/Button';
import { Text } from '../../../../shared/Text/Text';
import { useStyles } from 'react-native-unistyles';

import { stylesheet } from './airing.styles'
import { useQuery } from '@tanstack/react-query';
import { queries } from '../../../../api/queries';

export function Airing() {

  const { styles } = useStyles(stylesheet)
  const { data } = useQuery(queries.anime.getAll('airing'));

  console.log('data ', data)

  return (
    <View style={styles.container}>
      <Text text='Airing' />
    </View>
  )
}