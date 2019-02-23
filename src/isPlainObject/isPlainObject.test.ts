import isPlainObject from '.';

declare var arg: unknown;
declare var obj: Object;

if (isPlainObject(arg)) {
  obj = arg;
}
