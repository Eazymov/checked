/* @flow strict */
import isArray from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isArray', () => {
  test('returns true for array', () => {
    const { array } = values;

    expectChecksToBe(isArray, { array }, true);
  });

  test('returns false for non-array', () => {
    const { array, ...rest } = values;

    expectChecksToBe(isArray, rest, false);
  });
});
