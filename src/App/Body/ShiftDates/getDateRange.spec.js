// @flow
import getDateRange from './getDateRange';

describe('getDateRange', () => {
  it('returns the correct format', () => {
    expect(getDateRange(
      '2019-09-05T05:00:00Z',
      '2019-09-04T21:00:00Z',
    )).toBe('SEP 4, WED 2:00 PM - 10:00 PM PDT');
  });
});
