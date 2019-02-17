/* @flow strict */

function isString(arg: mixed): boolean %checks {
  return typeof arg === 'string';
}

export default isString;
