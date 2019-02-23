/* @flow strict */
import isNotNull from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isNotNull', () => {
  test('returns true for non-null', () => {
    const { _null, ...rest } = values;

    expectChecksToBe(isNotNull, rest, true);
  });

  test('returns false for null', () => {
    const { _null } = values;

    expectChecksToBe(isNotNull, { _null }, false);
  });
});
