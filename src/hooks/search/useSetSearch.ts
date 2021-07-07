import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { setSearchWord } from '../../modules/search';

export default function useSetSearch() {
  const dispatch = useDispatch();
  return useCallback(
    (word: string) => {
      dispatch(setSearchWord(word));
    },
    [dispatch],
  );
}
