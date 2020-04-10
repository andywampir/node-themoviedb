import got from 'got';

const commonHeaders = { 'user-agent': 'node-themoviedb/1.0.0' };

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
