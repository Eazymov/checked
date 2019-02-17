/* @flow strict */
import isNumber from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isNumber', () => {
  test('returns true for number', () => {
    const { _NaN, number } = values;

    expectChecksToBe(isNumber, { _NaN, number }, true);
  });

  test('returns false for non-numbers', () => {
    const { _NaN, number, ...rest } = values;

    expectChecksToBe(isNumber, rest, false);
  });
});
