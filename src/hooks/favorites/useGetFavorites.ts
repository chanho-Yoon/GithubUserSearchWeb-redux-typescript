import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import useGetLocalDatas from '../localstorage/useGetLocalDatas';
import { getFavorites } from '../../modules/favorites';
import useGetSearch from '../search/useGetSearch';

export default function useGetFavorites() {
  const dispatch = useDispatch();
  const getSearchWord = useGetSearch();
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
  if (getSearchWord['word'] === '')
    return useSelector((state: RootState) => state.favorites);
  else
    return useSelector((state: RootState) =>
      state.favorites.filter((data) => data.name === getSearchWord['word']),
    );
}
