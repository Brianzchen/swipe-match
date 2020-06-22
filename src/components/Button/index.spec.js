// @flow
import React from 'react';
import { render } from '@testing-library/react';
import { lorem } from 'faker';

import Button from '.';

describe('<Button />', () => {
  it('renders the child', () => {
    const text = lorem.word();
    const { getByTestId } = render(
      <Button data-testid="button-test">
        {text}
      </Button>,
    );

    expect(getByTestId('button-test').textContent).toBe(text);
  });
});
