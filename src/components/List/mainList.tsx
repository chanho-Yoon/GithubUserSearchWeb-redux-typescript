import React from 'react';
import styled from 'styled-components';
import FavoriteslList from './favoriteslList';
import UserList from './userList';
import useGetTabIndex from '../../hooks/actions/useTab';

const MainList = () => {
  const tabIndex = useGetTabIndex();

  return (
    <Wrapper>{tabIndex === 1 ? <UserList /> : <FavoriteslList />}</Wrapper>
  );
};

export default MainList;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 600px;
  padding: 30px;
  margin-top: 20px;
  border-radius: 30px;
  overflow: scroll;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
`;
