import sinon from 'sinon';
import {expect} from 'chai';
import {service} from '../../services';
import {
  getCategories,
  getCategory,
  getProducts,
  getProduct,
  getOrders,
  getOrder} from '../catalogActions';
import {describe, it, afterEach} from 'mocha';

describe('CatalogActions', () => {

  afterEach(() => service.setFetcher(null));

  describe('Action creators', () => {
    it('creates an action that gets all categories', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      getCategories();
      expect(fetcher).to.be.calledWith('api/v1/categories', {
        body: null,
        method: 'GET',
        credentials: 'include'
      });
    });

    it('creates an action that gets a category', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      getCategory(1);
      expect(fetcher).to.be.calledWith('api/v1/categories/1', {
        body: null,
        method: 'GET',
        credentials: 'include'
      });
    });

    it('creates an action that gets all products', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      getProducts();
      expect(fetcher).to.be.calledWith('api/v1/products', {
        body: null,
        method: 'GET',
        credentials: 'include'
      });
    });

    it('creates an action that gets a product', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      getProduct(1);
      expect(fetcher).to.be.calledWith('api/v1/products/1', {
        body: null,
        method: 'GET',
        credentials: 'include'
      });
    });

    it('creates an action that gets all orders', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      getOrders();
      expect(fetcher).to.be.calledWith('api/v1/orders', {
        body: null,
        method: 'GET',
        credentials: 'include'
      });
    });

    it('creates an action that gets an order', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      getOrder(1);
      expect(fetcher).to.be.calledWith('api/v1/orders/1', {
        body: null,
        method: 'GET',
        credentials: 'include'
      });
    });

  });

});
