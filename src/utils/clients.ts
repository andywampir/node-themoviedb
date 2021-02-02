import got, { Hooks } from 'got';

import normalizeSearchParams from './normalizeSearchParams';

const commonHeaders = { 'user-agent': 'node-themoviedb/1.0.0' };
const commonHooks: Hooks = { init: [ normalizeSearchParams ] };

export const clientV3 = got.extend({
	responseType: 'json',
	prefixUrl: 'https://api.themoviedb.org/3',
	headers: { ...commonHeaders },
	hooks: { ...commonHooks },
});

export const clientV4 = got.extend({
	responseType: 'json',
	prefixUrl: 'https://api.themoviedb.org/4',
	headers: { ...commonHeaders },
	hooks: { ...commonHooks },
});

export default clientV3;
