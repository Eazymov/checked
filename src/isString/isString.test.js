/* @flow strict */
import isString from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isString', () => {
  test('returns true for string', () => {
    const { emptyString, nonEmptyString } = values;

    expectChecksToBe(isString, { emptyString, nonEmptyString }, true);
  });

  test('returns false for non-strings', () => {
    const { emptyString, nonEmptyString, ...rest } = values;

    expectChecksToBe(isString, rest, false);
  });
});
