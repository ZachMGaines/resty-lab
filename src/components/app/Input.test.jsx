import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  it('renders inputArea', () => {
    const { asFragment } = render(
      <Input
        url="aintitcool.com"
        method="put"
        putBody="name: dexter"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
