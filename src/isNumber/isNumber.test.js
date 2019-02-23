/* @flow strict */
import isNumber from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isNumber', () => {
  test('returns true for number', () => {
    const { _NaN, float, integer } = values;

    expectChecksToBe(isNumber, { _NaN, float, integer }, true);
  });

  test('returns false for non-numbers', () => {
    const { _NaN, float, integer, ...rest } = values;

    expectChecksToBe(isNumber, rest, false);
  });
});
