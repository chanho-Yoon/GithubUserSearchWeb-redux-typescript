import React from 'react';
import styled from 'styled-components';
import SearchForm from './Search/searchForm';
import TabMenu from './Tab/tabMenu';
import MainList from './List/mainList';

const Main = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Github Users</h1>
      </Header>
      <TabMenu />
      <SearchForm />
      <MainList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 750px;
  height: 100%;
  padding: 20px;
  background-color: #fcfcfc;
`;

const Header = styled.header`
  width: 100%;
  height: 35px;
  text-align: center;
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
  }
`;

export default Main;
