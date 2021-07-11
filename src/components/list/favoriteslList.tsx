import React from 'react';
import { Favorites } from '../../modules/favorites';
import useGetFavorites from '../../hooks/favorites/useGetFavorites';
import FavoritesListItem from './favoritesListItem';
import ListWrapperStyle from '../../assets/styles/listWrapperStyle';
import ListUlStyle from '../../assets/styles/listUlStyle';

const FavoritesList = () => {
  const getFavorites = useGetFavorites();
  return (
    <ListWrapperStyle>
      <ListUlStyle>
        {getFavorites?.map((item: Favorites) => (
          <FavoritesListItem key={item.id} user={item} />
        ))}
      </ListUlStyle>
    </ListWrapperStyle>
  );
};

export default FavoritesList;
