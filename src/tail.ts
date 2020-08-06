import { isArray } from "./isArray";

export const tail = <T>(t: T[]): T[] => {
  if (!isArray(t)) {
    return [] as T[];
  }
  const [_, ...tail] = t;
  return tail;
}