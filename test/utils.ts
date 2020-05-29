/* eslint-disable camelcase */
// eslint-disable-next-line ava/use-test
import test from 'ava';

import normalizeSearchParams from '../src/utils/normalizeSearchParams';

test('success test', t => {
  const normalizedSearchParams = normalizeSearchParams({
    foo: 'foo',
    bar: '',
    boz: null,
  });

  t.deepEqual(normalizeSearchParams(), {});
  t.truthy(normalizedSearchParams.foo);
  t.falsy(normalizedSearchParams.bar);
  t.falsy(normalizedSearchParams.boz);
});
