/* @flow strict */
import isUndef from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isUndef', () => {
  test('returns true for undefined', () => {
    const { _undefined } = values;

    expectChecksToBe(isUndef, { _undefined }, true);
  });

  test('returns false for non-undefined', () => {
    const { _undefined, ...rest } = values;

    expectChecksToBe(isUndef, rest, false);
  });
});
