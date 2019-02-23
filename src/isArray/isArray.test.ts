import isArray from '.';

declare var arg: unknown;
declare var num: number;
declare var array: number[];

if (isArray(arg)) {
  array = arg;

  num = arg[0];
}
