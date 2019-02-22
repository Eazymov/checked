/* @flow strict */
import isTrue from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isTrue', () => {
  test('returns true for true', () => {
    const { booleanTrue } = values;

    expectChecksToBe(isTrue, { booleanTrue }, true);
  });

  test('returns false for non-true', () => {
    const { booleanTrue, ...rest } = values;

    expectChecksToBe(isTrue, rest, false);
  });
});
