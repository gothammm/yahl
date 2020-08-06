import { isNullOrEmpty } from './isNullOrEmpty';

export const isNotNullOrEmpty = <T>(t: T): boolean => !isNullOrEmpty(t);