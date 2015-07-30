import sinon from 'sinon';
import {expect} from 'chai';
import {describe, it} from 'mocha';
import {service} from '../../services';
import {getSession, removeSession, createSession} from '../sessionActions';


describe('SessionActions', () => {

  afterEach(() => service.setFetcher(null));

  describe('Action creators', () => {
    it('creates an action that gets the current session', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      getSession();
      expect(fetcher).to.be.calledWith('api/v1/session', {
        body: null,
        method: 'GET',
        credentials: 'include'
      });
    });

    it('creates an action that creates a new session', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      createSession('username', 'password');
      expect(fetcher).to.be.calledWith('api/v1/session', {
        body: {username: 'username', password: 'password'},
        method: 'POST',
        credentials: 'include'
      });
    });

    it('creates an action that removes the current session', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      removeSession();
      expect(fetcher).to.be.calledWith('api/v1/session', {
        body: null,
        method: 'DELETE',
        credentials: 'include'
      });
    });

  });

});
