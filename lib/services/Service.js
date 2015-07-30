
import {errorCreator} from './errors';

const browserFetch = ((typeof window !== 'undefined') && window.fetch);

export default class Service {

  constructor(uri, config, fetcher) {
    this.uri = uri;
    this.fetcher = fetcher || browserFetch || null;
    this.extra = {credentials: 'include', ...config};
  }

  setFetcher(fetcher) {
    this.fetcher = fetcher;
  }

  respondWith(promise) {
    return new Promise((resolve, reject) => {
      promise.then((response) => {
        if(!response.ok) reject(errorCreator(response.code));
        else return response.json();
      })
      .then(resolve)
      .catch(() => {
        reject(errorCreator('ECONNREFUSED'));
      });
    });
  }

  params(args) {
    return Object.keys(args)
      .filter(key => args[key] !== '' && args[key] !== null)
      .map(key => key + '=' + args[key])
      .join('&');
  }

  request(method, resource, id, params, body = null) {
    let url = [this.uri, resource];
    let config = {...this.extra, method, body};

    if (id) {
      url.push(id);
    }

    let input = [url.join('/')];
    let paramString = params && this.params(params);

    if (paramString) {
      input.push('?');
      input.push(paramString);
    }

    return this.respondWith(
      this.fetcher.apply(null, [input.join(''), config])
    );
  }

}
