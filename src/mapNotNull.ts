import { isNotNullOrEmpty } from "./isNotNullOrEmpty";


export const mapNotNull = <T, K>(fn: (t: T) => T | K | null, t: T[]): K[] => {
  return t.reduce((acc, item) => {
    const transformed = (fn && fn(item)) ?? null;
    if (isNotNullOrEmpty(transformed)) {
      return [...acc, transformed] as K[];
    }
    return acc;
  }, [] as K[]);
}