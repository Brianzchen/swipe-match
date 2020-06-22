// @flow
import React from 'react';
import { render } from '@testing-library/react';
import { lorem } from 'faker';

import Header from './Header';

describe('<Header />', () => {
  it('renders the name', () => {
    const firstName = lorem.word();
    const lastName = lorem.word();
    const { getByTestId } = render(
      <Header
        firstName={firstName}
        lastName={lastName}
      />,
    );

    expect(getByTestId('header-name').textContent).toBe(`${firstName} ${lastName}`);
  });
});
