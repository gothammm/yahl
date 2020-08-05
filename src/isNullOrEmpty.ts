import isArray, { AnyArray } from './isArray';
import isObject from './isObject';

const isNullOrEmpty = <T>(t: T): boolean => {
  return t === null || t === undefined || (isArray(t) ? (t as AnyArray<T>).length <= 0 : false) || (isObject(t) ? Object.keys(t).length <= 0 : false);
}

export default isNullOrEmpty;