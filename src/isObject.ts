const OBJECT_STRING = '[object Object]';

const isObject = <T>(t: T): boolean => Object.prototype.toString.call(t) === OBJECT_STRING;

export default isObject;