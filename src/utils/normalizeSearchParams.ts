import type { InitHook } from 'got';

import { SearchParametrs } from '../interfaces/common';

const normalizeSearchParams: InitHook = options => {
  const { searchParams } = options;
  if (!searchParams)
    return;
  const normalizedSearchParams: SearchParametrs = {};

  Object.keys(searchParams).forEach(key => {
    if (!(searchParams as SearchParametrs)[key])
      return;
    normalizedSearchParams[key] = (searchParams as SearchParametrs)[key];
  });

  options.searchParams = normalizedSearchParams;
};

export default normalizeSearchParams;
