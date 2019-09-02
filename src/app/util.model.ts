export type InterfaceOf<T, P = 'self'> = {
  [K in Exclude<keyof T, P>]: T[K]
};
