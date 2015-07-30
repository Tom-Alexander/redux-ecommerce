import sinon from 'sinon';
import {expect} from 'chai';
import {Service} from '../index';
import {describe, it} from 'mocha';

describe('Service', () => {
  describe('parameters', () => {

    it('from an object with several elements', () => {
      let service = new Service('api', null, sinon.spy());
      let query = service.params({foo: 12, bar: 'baz'});
      expect(query).to.equal('foo=12&bar=baz');
    });

    it('from an object with one element', () => {
      let service = new Service('api', null, sinon.spy());
      let query = service.params({foo: 12});
      expect(query).to.equal('foo=12');
    });

  });

  describe('request', () => {
    ['GET', 'POST', 'PUT', 'DELETE'].forEach((method) => {
      describe(method, () => {

        it('request for an item', () => {
          let requester = sinon.stub().returns(Promise.resolve());
          let service = new Service('api', null, requester);
          service.request(method, 'resource', 4, {foo: 'bar'});
          expect(requester).to.have.been.calledWith(
            'api/resource/4?foo=bar',
            {body: null, credentials: 'include', method});
        });

        it('request for a collection', () => {
          let requester = sinon.stub().returns(Promise.resolve());
          let service = new Service('api', null, requester);
          service.request(method, 'resource', null, {foo: 'bar'});
          expect(requester).to.have.been.calledWith(
            'api/resource?foo=bar',
            {body: null, credentials: 'include', method});
        });

        it('request for an item with no parameters', () => {
          let requester = sinon.stub().returns(Promise.resolve());
          let service = new Service('api', null, requester);
          service.request(method, 'resource', 4);
          expect(requester).to.have.been.calledWith(
            'api/resource/4',
            {body: null, credentials: 'include', method});
        });

      });
    });
  });

  describe('fetcher', () => {
    it('sets the fetcher when setFetcher is called', () => {
      let fetcherA = sinon.stub().returns(Promise.resolve());
      let fetcherB = sinon.stub().returns(Promise.resolve());
      let service = new Service('api', null, fetcherA);
      service.request('GET', 'resource', null);
      expect(fetcherA).to.be.called;
      service.setFetcher(fetcherB);
      service.request('GET', 'resource', null);
      expect(fetcherB).to.be.called;
    });
  });

});
