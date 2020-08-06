import { isArray } from "./isArray";
import { isFunction } from "./isFunction";


export const flatMap = <T, K>(transform: (item: T) => K[], t: T[]): K[] => {
  if (!isArray(t) || !isFunction(transform)) {
    return [];
  }
  return t.reduce((acc, item) => {
    const transformed = transform(item);
    if (!isArray(transformed)) {
      return [...acc, transformed as K | any];
    }
    return [...acc, ...transformed];
  }, [] as K[]);
};