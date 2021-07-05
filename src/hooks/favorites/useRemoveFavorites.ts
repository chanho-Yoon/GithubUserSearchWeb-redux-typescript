import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeFavorites } from '../../modules/favorites';

export default function useRemoveFavorites() {
  const dispatch = useDispatch();
  return useCallback((id: number) => {
    dispatch(removeFavorites(id));
  }, []);
}
