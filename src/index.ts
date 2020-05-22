import DataController from './DataController';

import accountEndpoint from './endpoints/accountEndpoint';
import authenticationEndpoint from './endpoints/authenticationEndpoint';
import certificationEndpoint from './endpoints/certificationEndpoint';
import collectionEndpoint from './endpoints/collectionEndpoint';
import companyEndpoint from './endpoints/companyEndpoint';
import configurationEndpoint from './endpoints/configurationEndpoint';
import creditEndpoint from './endpoints/creditEndpoint';
import discoverEndpoint from './endpoints/discoverEndpoint';
import findEndpoint from './endpoints/findEndpoint';
import genreEndpoint from './endpoints/genreEndpoint';
import guestSessionEndpoint from './endpoints/guestSessionEndpoint';
import keywordEndpoint from './endpoints/keywordEndpoint';
import listEndpoint from './endpoints/listEndpoint';
import movieEndpoint from './endpoints/movieEndpoint';
import networkEndpoint from './endpoints/networkEndpoint';
import trendingEndpoint from './endpoints/trendingEndpoint';
import personEndpoint from './endpoints/personEndpoint';
import reviewEndpoint from './endpoints/reviewEndpoint';
import searchEndpoint from './endpoints/searchEndpoint';
import tvEndpoint from './endpoints/tvEndpoint';

interface ConstructorOptions {
  language?: string;
}

export default class MovieDB {
  public account = accountEndpoint;
  public authentication = authenticationEndpoint;
  public certification = certificationEndpoint;
  public collection = collectionEndpoint;
  public company = companyEndpoint;
  public configuration = configurationEndpoint;
  public credit = creditEndpoint;
  public discover = discoverEndpoint;
  public find = findEndpoint;
  public genre = genreEndpoint;
  public guestSession = guestSessionEndpoint;
  public keyword = keywordEndpoint;
  public list = listEndpoint;
  public movie = movieEndpoint;
  public network = networkEndpoint;
  public trending = trendingEndpoint;
  public person = personEndpoint;
  public review = reviewEndpoint;
  public search = searchEndpoint;
  public tv = tvEndpoint;

  public constructor(apiKey: string, options?: ConstructorOptions) {
    const data = DataController.getInstance();

    data.set('apiKey', apiKey);
    data.set('language', options?.language ?? 'en-US');
  }

  // eslint-disable-next-line class-methods-use-this
  public setApiKey(apiKey: string): void {
    DataController.getInstance().set('apiKey', apiKey);
  }

  // eslint-disable-next-line class-methods-use-this
  public setLanguage(language: string): void {
    DataController.getInstance().set('language', language);
  }
}

// For CommonJS default export support
module.exports = MovieDB;
module.exports.default = MovieDB;
