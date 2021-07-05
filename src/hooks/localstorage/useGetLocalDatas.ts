import { useCallback } from 'react';

const LOCAL_KEY = 'favorite';

export default function useGetLocalDatas() {
  return useCallback(() => {
    const getLocalStorageItem = localStorage.getItem(LOCAL_KEY);
    if (getLocalStorageItem !== null) {
      return JSON.parse(getLocalStorageItem);
    } else return [];
  }, []);
}
