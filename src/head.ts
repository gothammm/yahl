import { isArray } from "./isArray";

export const head = <T>(t: T[]): T | null => {
  if (!isArray(t)) {
    return null;
  }
  const [item, ..._] = t;
  return item ?? null;
}