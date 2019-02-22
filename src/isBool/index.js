/* @flow strict */

function isBool(arg: mixed): boolean %checks {
  return typeof arg === 'boolean';
}

export default isBool;
