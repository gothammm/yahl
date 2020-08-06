import { isNotNullOrEmpty } from "./isNotNullOrEmpty";


export const filterNotNull = <T>(fn: (t: T) => T | null | undefined, t: T[]): T[] => {
  return t.reduce((acc, item) => {
    if (isNotNullOrEmpty(item)) {
      return [...acc, item];
    }
    return acc;
  }, [] as T[]);
}