import { isArray } from "./isArray";

export const distinct = <T>(list: T[]): T[] => {
  if (!isArray(list)) {
    return [];
  }
  return list.reduce((acc, item) => {
    if (acc.indexOf(item) >= 0) {
      return acc;
    }
    return [...acc, item];
  }, [] as T[]);
}