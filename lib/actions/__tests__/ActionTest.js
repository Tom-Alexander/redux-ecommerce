import sinon from 'sinon';
import {expect} from 'chai';
import {describe, it} from 'mocha';
import {spreadPrefix, collection, element} from '../actions';

describe('Actions', () => {

  describe('spreadPrefix', () => {
    it('prefixes elements in the object literal', () => {
        let test = {foo: false, bar: true};
        expect(spreadPrefix('TEST', test)).to.be.deep.equal({
          TEST_foo: false,
          TEST_bar: true
        });
    });
  });

  describe('collection', () => {
    it('creates an object with default collection parameters', () => {
      let params = collection();
      expect(params).to.be.deep.equal({
        filter: '',
        sort: '',
        start: '',
        limit: '',
        include: ''
      });
    });
  });

  describe('element', () => {
    it('creates an object with default element parameters', () => {
      let params = element();
      expect(params).to.be.deep.equal({
        include: ''
      });
    });
  });
});
