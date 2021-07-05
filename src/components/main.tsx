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
  max-width: 800px;
  min-width: 600px;
  height: 100%;
  margin: 40px;
  padding: 20px;
  background-color: #fcfcfc;
  border-radius: 35px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Header = styled.header`
  width: 50%;
  height: 35px;
  margin-top: 20px;
  text-align: center;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
  }
`;

export default Main;
