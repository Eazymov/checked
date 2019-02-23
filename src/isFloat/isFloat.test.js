/* @flow strict */
import isFloat from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isFloat', () => {
  test('returns true for float', () => {
    const { float } = values;

    expectChecksToBe(isFloat, { float }, true);
  });

  test('returns false for non-float', () => {
    const { float, ...rest } = values;

    expectChecksToBe(isFloat, rest, false);
  });
});
