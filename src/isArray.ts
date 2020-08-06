const ARRAY_STRING = '[object Array]';

export type AnyArray<T> = T & any[];

export const isArray = <T>(t: T): boolean => Array.isArray(t) || Object.prototype.toString.call(t) === ARRAY_STRING;