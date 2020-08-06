const OBJECT_STRING = '[object Object]';

export const isObject = <T>(t: T): boolean => Object.prototype.toString.call(t) === OBJECT_STRING;