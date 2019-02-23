/* @flow strict */
import isObject from '../isObject';

function isPlainObject(arg: mixed): boolean %checks {
  return isObject(arg) && arg.constructor === Object;
}

export default isPlainObject;
