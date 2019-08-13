import got from 'got';

export const request = got.extend({
  json: true,
  baseUrl: 'https://api.themoviedb.org/3',
  headers: {
    'user-agent': 'node-moviedb/0.1.0',
  },
});
