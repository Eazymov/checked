/* @flow strict */

function isNotNull(arg: mixed): boolean %checks {
  return arg !== null;
}

export default isNotNull;
