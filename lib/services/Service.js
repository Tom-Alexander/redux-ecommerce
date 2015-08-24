
import {errorCreator} from './errors';
import superAgent from 'superagent';
import superAgentPromiseWrapper from 'superagent-promise';

const agent = superAgentPromiseWrapper(superAgent, Promise);

export default class Service {

  constructor(uri) {
    this.uri = uri;
  }

  respondWith(promise) {
    return new Promise((resolve, reject) => {
      promise.then((response) => {
        if(!response.ok) reject(errorCreator(response.code));
        return JSON.parse(response.text);
      })
      .then(resolve)
      .catch((err) => {
        console.log(err);
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

    if (id) {
      url.push(id);
    }

    if(method.toLowerCase() === 'delete') {
      method = 'del';
    }

    let input = [url.join('/')];
    let paramString = params && this.params(params);

    if (paramString) {
      input.push('?');
      input.push(paramString);
    }

    return this.respondWith(
      agent[method.toLowerCase()]
        .call(agent, input.join(''), body)
        .type('form')
    );

  }

}
