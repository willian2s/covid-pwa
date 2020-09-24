import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import GlobalStyle from 'commons/styles/GlobalStyles';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
    </StylesProvider>
  );
}

export default App;
