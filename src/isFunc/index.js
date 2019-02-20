/* @flow strict */

function isFunc(arg: mixed): boolean %checks {
  return typeof arg === 'function';
}

export default isFunc;
