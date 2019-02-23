/* @flow strict */
import isInteger from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isInteger', () => {
  test('returns true for integer', () => {
    const { integer } = values;

    expectChecksToBe(isInteger, { integer }, true);
  });

  test('returns false for non-integer', () => {
    const { integer, ...rest } = values;

    expectChecksToBe(isInteger, rest, false);
  });
});
