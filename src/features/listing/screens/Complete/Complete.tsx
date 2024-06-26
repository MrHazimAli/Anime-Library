import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './complete.styles';
import { useQuery } from '@tanstack/react-query';
import { queries } from '../../../../api/queries';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { FlashList, type ListRenderItem } from '@shopify/flash-list';
import { MovieEntry } from '../../api/types';

type Item = MovieEntry;

export function Complete() {
  const { styles } = useStyles(stylesheet)
  const { data } = useQuery(queries.anime.getAll('complete'));

  const renderItem: ListRenderItem<Item> = ({ item }) => {
    return <MovieCard {...item} />
  }

  return (
    <View style={styles.container}>
      <FlashList
        data={data?.data}
        numColumns={2}
        renderItem={renderItem}
        estimatedItemSize={200}
      />
    </View>
  )
}