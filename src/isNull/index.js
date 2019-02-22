/* @flow strict */

function isNull(arg: mixed): boolean %checks {
  return arg === null;
}

export default isNull;
