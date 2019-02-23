/* @flow strict */

function isObject(arg: mixed): boolean %checks {
  return typeof arg === 'object' && arg !== null;
}

export default isObject;
