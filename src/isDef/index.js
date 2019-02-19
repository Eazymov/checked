/* @flow strict */

function isDef(arg: mixed): boolean %checks {
  return typeof arg !== 'undefined';
}

export default isDef;
