import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './components/home';

const Index = () => {
  return <Home message={'Hello World!'} />;
};

ReactDOM.render(<Index />, document.getElementById('root'));
