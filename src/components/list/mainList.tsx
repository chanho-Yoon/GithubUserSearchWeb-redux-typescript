import React from 'react';
import styled from 'styled-components';
import FavoriteslList from './favoriteslList';
import UserList from './userList';
import useGetTabIndex from '../../hooks/tab/useTab';

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
  height: 100%;
  @media (min-width: 0px) and (max-width: 480px) {
    max-height: 350px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    max-height: 500px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    max-height: 550px;
  }
  @media (min-width: 1025px) {
    max-height: 550px;
  }
  padding: 0 30px;
  margin-top: 20px;
  border-radius: 30px;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
`;
