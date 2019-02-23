import isMaybe from '.';

declare var arg: unknown;
declare var maybe: null | undefined;

if (isMaybe(arg)) {
  maybe = arg;
}
