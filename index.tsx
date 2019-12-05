import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';
import { Home } from './src/components/home';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    backgroundColor: string;
    letterSpacing: string;
    fontSize: string;
    color: string;
  }
}

const primary = {
  fontFamily: 'Helvetica Neue',
  backgroundColor: '#2980b9',
  letterSpacing: '0.75px',
  fontSize: '20px',
  color: '#fff'
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
  section {
    font-family: ${props => props.theme.fontFamily};
    background-color: ${props => props.theme.backgroundColor};
    letter-spacing: ${props => props.theme.letterSpacing};
    font-size: ${props => props.theme.fontSize};
    color: ${props => props.theme.color};
  }
`;

const history = createBrowserHistory();

const Index = () => {
  return (
    <ThemeProvider theme={primary}>
      <React.Fragment>
        <GlobalStyle />
        <Router history={history}>
          <Switch>
            <Route path="/">
              <Home message={'Hello World!'} />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
