import React from 'react';
import Map from './components/map';
import Menu from './components/menu';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global-style';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Container>
      <Menu />
      <Map />
    </Container>
    </>
  );
}

export default App;
