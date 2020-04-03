import got from 'got';

import pkg from '../../package.json';

const commonHeaders = { 'user-agent': `node-themoviedb/${pkg.version}` };

export const requestV3 = got.extend({
  responseType: 'json',
  prefixUrl: 'https://api.themoviedb.org/3',
  headers: { ...commonHeaders },
});

export const requestV4 = got.extend({
  responseType: 'json',
  prefixUrl: 'https://api.themoviedb.org/4',
  headers: { ...commonHeaders },
});

export default requestV3;
