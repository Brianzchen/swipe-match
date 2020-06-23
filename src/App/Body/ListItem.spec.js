// @flow
import React from 'react';
import { render } from '@testing-library/react';
import { lorem } from 'faker';

import ListItem from './ListItem';

describe('<ListItem />', () => {
  it('renders prefix', () => {
    const { getByTestId } = render(
      <ListItem
        prefixIcon="test-icon"
      >
        test
      </ListItem>,
    );

    expect(getByTestId('list-item-prefix-icon').classList.contains('mdi-test-icon'));
  });

  it('it renders child correctly', () => {
    const expectedText = lorem.sentence();
    const { getByTestId } = render(
      <ListItem prefixIcon="calendar">
        {expectedText}
      </ListItem>,
    );

    expect(getByTestId('list-item-body').textContent).toBe(expectedText);
  });

  it('does not render suffix if not passed', () => {
    expect.assertions(1);
    const { getByTestId } = render(
      <ListItem prefixIcon="calendar">
        test
      </ListItem>,
    );

    try {
      getByTestId('list-item-suffix-icon');
    } catch (e) {
      expect(true).toBe(true);
    }
  });

  it('renders suffix if passed', () => {
    const { getByTestId } = render(
      <ListItem
        prefixIcon="calendar"
        suffixIcon="test-icon"
      >
        test
      </ListItem>,
    );

    expect(getByTestId('list-item-suffix-icon').classList.contains('mdi-test-icon'));
  });
});
