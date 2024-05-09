import { View } from 'react-native';
import { Text } from '../../../../shared/Text/Text';

type Props = {
  title: string
}

export function MovieCard({
  title
}: Props) {
  return (
    <View>
      <Text text={title} />
    </View>
  )
}