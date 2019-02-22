/* @flow strict */
import isBool from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isBool', () => {
  test('returns true for boolean', () => {
    const { boolean } = values;

    expectChecksToBe(isBool, { boolean }, true);
  });

  test('returns false for non-boolean', () => {
    const { boolean, ...rest } = values;

    expectChecksToBe(isBool, rest, false);
  });
});
