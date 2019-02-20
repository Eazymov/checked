/* @flow strict */
import isFunc from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isFunc', () => {
  test('returns true for function', () => {
    const { _function } = values;

    expectChecksToBe(isFunc, { _function }, true);
  });

  test('returns false for non-function', () => {
    const { _function, ...rest } = values;

    expectChecksToBe(isFunc, rest, false);
  });
});
