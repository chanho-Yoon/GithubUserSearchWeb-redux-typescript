import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import useGetLocalDatas from '../localstorage/useGetLocalDatas';
import { getFavorites } from '../../modules/favorites';

export default function useGetFavorites() {
  const dispatch = useDispatch();
  const stateFavorites = useSelector((state: RootState) => state.favorites);
  const getLocalStorageItems = useGetLocalDatas()();
  if (
    Array.isArray(stateFavorites) &&
    stateFavorites.length === 0 &&
    Array.isArray(getLocalStorageItems) &&
    getLocalStorageItems.length !== 0
  ) {
    dispatch(getFavorites(getLocalStorageItems));
  }
  return useSelector((state: RootState) => state.favorites);
}
