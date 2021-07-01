import React from 'react';
import Main from './components/main';
import styled from 'styled-components'

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
`

export default App;
