import React from 'react';
import styled from 'styled-components';

// Our single Styled Component definition
const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(200, 100, 050), #daa357);
`;

const App = () => <AppContainer>Hello World</AppContainer>;

export default App;