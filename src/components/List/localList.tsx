import React from 'react';
import styled from 'styled-components';
import { Favorites } from '../../modules/favorites';
import useGetFavorites from '../../hooks/favorites/useGetFavorites';
import LocalListItem from './localListItem';

const LocalList = () => {
  const getFavorites = useGetFavorites();
  return (
    <Wrapper>
      <ul>
        {getFavorites?.map((item: Favorites) => (
          <LocalListItem key={item.id} user={item} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default LocalList;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
