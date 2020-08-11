import { _isX } from "./_isX";

export const isPromise = <T>(t: T): boolean => _isX(t, 'Promise');