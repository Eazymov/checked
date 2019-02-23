import isObject from '.';

declare var arg: unknown;
declare var obj: Object;

if (isObject(arg)) {
  obj = arg;
}
