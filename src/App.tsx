import React from 'react';
import styled from 'styled-components';
import Main from './components/main';

function App() {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
