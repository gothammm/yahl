import { isArray } from "./isArray";
import { isObject } from "./isObject";

export const distinctBy = <T, K>(identifier: (item: T) => K,list: T[]): T[] => {
  if (!isArray(list)) {
    return [];
  }
  return list.reduce((acc, item) => {
    const identifierToFind = identifier(item);
    if (isObject(item) || isArray(item)) {
      return acc.some(innerItem => identifier(innerItem) === identifierToFind) ? acc : [...acc, item];
    }
    if (acc.indexOf(item) >= 0) {
      return acc;
    }
    return [...acc, item];
  }, [] as T[]);
}