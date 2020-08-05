import isNullOrEmpty from './isNullOrEmpty';

const isNotNullOrEmpty = <T>(t: T): boolean => !isNullOrEmpty(t);

export default isNotNullOrEmpty;