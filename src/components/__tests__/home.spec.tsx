import * as React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../home';

describe('Home', () => {
  it('should render home page', () => {
    const elem = render(<Home message={'World'} />).container;
    expect(elem).toMatchSnapshot();
  });
});
