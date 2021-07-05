import React from 'react';
import styled from 'styled-components';
import { Favorites } from '../../modules/favorites';
import useGetFavorites from '../../hooks/favorites/useGetFavorites';
import FavoritesListItem from './favoritesListItem';

const FavoriteslList = () => {
  const getFavorites = useGetFavorites();
  return (
    <Wrapper>
      <ul>
        {getFavorites?.map((item: Favorites) => (
          <FavoritesListItem key={item.id} user={item} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default FavoriteslList;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
