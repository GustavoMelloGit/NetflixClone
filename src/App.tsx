import React from 'react';
import LayoutComponent from './components/layout';
import GlobalStyle from './global/styles';
import LoginPage from './pages/Auth';

function App() {
  return (
    <>
      <GlobalStyle />
      <LayoutComponent>
        <LoginPage />
      </LayoutComponent>
    </>
  );
}

export default App;
