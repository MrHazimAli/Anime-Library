import { Image, View } from 'react-native';
import { MovieEntry } from '../../api/types';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './movieCard.styles';

type Props = MovieEntry

export function MovieCard({
  images
}: Props) {

  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: images?.webp?.image_url}}
        style={styles.imageContainer}
        resizeMode='contain'
      />
    </View>
  )
}