/* @flow strict */
import isDef from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isDef', () => {
  test('returns true for non-undefined', () => {
    const { _undefined, ...rest } = values;

    expectChecksToBe(isDef, rest, true);
  });

  test('returns false for undefined', () => {
    const { _undefined } = values;

    expectChecksToBe(isDef, { _undefined }, false);
  });
});
