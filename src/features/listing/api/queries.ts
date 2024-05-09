import { createQueryKeys } from '@lukemorales/query-key-factory';
import { HttpClient } from '../../../api/client';

export const animeQueries = createQueryKeys('anime', {
  getAll(status: 'airing' | 'complete' | 'upcoming') {
    return {
      queryKey: [status],
      async queryFn() {
        return new HttpClient<any>('/anime').setParams({status}).get();
      },
    }
  }
})