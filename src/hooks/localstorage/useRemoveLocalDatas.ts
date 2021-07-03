import { useCallback } from 'react';
import useGetLocalDatas from './useGetLocalDatas';

const LOCAL_KEY = 'favorite';

export default function useRemoveLocalDatas() {
  const getLocalStorageItems = useGetLocalDatas();
  return useCallback(
    (id) => {
      const localStorageItem = getLocalStorageItems();
      if (localStorageItem !== undefined) {
        const newFavoriteUser = localStorageItem.filter(
          (data: { id: number }) => data.id !== id,
        );
        localStorage.setItem(LOCAL_KEY, JSON.stringify(newFavoriteUser));
      }
    },
    [getLocalStorageItems],
  );
}
