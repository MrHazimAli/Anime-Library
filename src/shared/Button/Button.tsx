import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';

type Props = {
  label: string
  onPress: () => void
}

export function Button({ label, onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <Text>{label}</Text>
    </Pressable>
  )
}