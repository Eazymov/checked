/* @flow strict */
import isNull from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isNull', () => {
  test('returns true for null', () => {
    const { _null } = values;

    expectChecksToBe(isNull, { _null }, true);
  });

  test('returns false for non-null', () => {
    const { _null, ...rest } = values;

    expectChecksToBe(isNull, rest, false);
  });
});
