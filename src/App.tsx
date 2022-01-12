import React from 'react';
import { Toaster } from 'react-hot-toast';
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
      <Toaster />
    </>
  );
}

export default App;
