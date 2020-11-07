import got from 'got';

const commonHeaders = { 'user-agent': 'node-themoviedb/1.0.0' };

export const clientV3 = got.extend({
  responseType: 'json',
  prefixUrl: 'https://api.themoviedb.org/3',
  headers: { ...commonHeaders },
});

export const clientV4 = got.extend({
  responseType: 'json',
  prefixUrl: 'https://api.themoviedb.org/4',
  headers: { ...commonHeaders },
});

export default clientV3;
