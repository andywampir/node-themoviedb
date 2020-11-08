### 0.2.5
 - ⬆️ chore: update deps
 - 🔧 config(tsconfig): change target to ES5
 - 🔧 config(eslint): update rules for typescript
 - 🏷️ types: update types to match new typescript eslint rules
 - ✨ utils: update user agent version to 0.2.5
 - 🏷️ types: fix tmdb api configuration interface

### 0.2.4
 - fix(utils): some requests returns NotFoundError
 - fix(types): mark some parameters as non required

### 0.2.3
  - fix(utils): destructure undefined options [#4](https://github.com/andywampir/node-themoviedb/issues/4#issue-632588490)
  - fix(endpoints): remove slash in start of endpoints

### 0.2.2
  - fix(docs): typo

### 0.2.1
  - Added deprecated warnings for relative stuff to rate limit

### 0.2.0
  - Removed `rateLimit` object from response object, because The Movie Database disabled rate limit ([details](https://developers.themoviedb.org/3/getting-started/request-rate-limiting))
