/* @flow strict */
import isMaybe from '.';
import { values, expectChecksToBe } from '../testHelpers';

describe('isMaybe', () => {
  test('returns true for maybe', () => {
    const { _null, _undefined } = values;

    expectChecksToBe(isMaybe, { _null, _undefined }, true);
  });

  test('returns false for non-maybe', () => {
    const { _null, _undefined, ...rest } = values;

    expectChecksToBe(isMaybe, rest, false);
  });
});
