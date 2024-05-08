import { Pressable } from 'react-native';
import { Text } from '../Text/Text';

type Props = {
  label: string
  onPress: () => void
}

export function Button({ label, onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <Text text={label} />
    </Pressable>
  )
}