import { mergeQueryKeys } from '@lukemorales/query-key-factory';
import { animeQueries } from '../features/listing/api/queries';

export const queries = mergeQueryKeys(animeQueries)