import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Sidebar } from './components/sidebar';

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
  backgroundColor: '#1664C1',
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

const Index = () => {
  return (
    <ThemeProvider theme={primary}>
      <GlobalStyle />
      <Sidebar />
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
