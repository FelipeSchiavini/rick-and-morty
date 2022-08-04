import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import GLobalStyle from './styles/global';
// import {dark, light, useThemeState} from './styles'
import { ApolloProvider } from '@apollo/client';
import Routes from './routes';
import { light, useThemeState, dark } from './styles/themes/';
import apolloClient from './utils/apollo-client-builder.ts';
import { Header } from './components/header/index.tsx'
import { useEffect } from "react";

function App() {
  
  const [theme, setTheme] = useThemeState(light)

  const changeTheme = () => {
    theme === dark ? setTheme(light) : setTheme(dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client = {apolloClient}>
        <GLobalStyle />
        <Header changeTheme={changeTheme} />
        <Router>
          <Routes/>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
