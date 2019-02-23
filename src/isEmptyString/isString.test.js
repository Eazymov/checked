/* @flow strict */
import isEmptyString from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isEmptyString', () => {
  test('returns true for empty string', () => {
    const { emptyString } = values;

    expectChecksToBe(isEmptyString, { emptyString }, true);
  });

  test('returns false for non-empty string and non-strings', () => {
    const { emptyString, ...rest } = values;

    expectChecksToBe(isEmptyString, rest, false);
  });
});
