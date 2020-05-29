import { SearchParametrs } from '../interfaces/common';

export default (searchParams?: SearchParametrs): SearchParametrs => {
  if (!searchParams)
    return {};
  const normalizedSearchParams: SearchParametrs = {};

  Object.keys(searchParams).forEach(key => {
    if (!searchParams[key])
      return;
    normalizedSearchParams[key] = searchParams[key];
  });

  return normalizedSearchParams;
};
