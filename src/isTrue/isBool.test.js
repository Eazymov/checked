/* @flow strict */
import isTrue from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isTrue', () => {
  test('returns true for true', () => {
    const { _true } = values;

    expectChecksToBe(isTrue, { _true }, true);
  });

  test('returns false for non-true', () => {
    const { _true, ...rest } = values;

    expectChecksToBe(isTrue, rest, false);
  });
});
