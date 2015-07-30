import sinon from 'sinon';
import {expect} from 'chai';
import {service} from '../../services';
import {
  getBasket,
  removeBasket,
  checkoutBasket,
  createBasketItem,
  removeBasketItem,
  updateBasketItem} from '../BasketActions';
import {describe, it, afterEach} from 'mocha';

describe('BasketActions', () => {

  afterEach(() => service.setFetcher(null));

  describe('Action creators', () => {
    it('creates a get basket action', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      getBasket(['items']);
      expect(fetcher).to.be.calledWith('api/v1/basket?include=items', {
        body: null,
        method: 'GET',
        credentials: 'include'
      });
    });

    it('creates an action that removes the entire basket', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      removeBasket();
      expect(fetcher).to.be.calledWith('api/v1/basket', {
        body: null,
        method: 'DELETE',
        credentials: 'include'
      });
    });

    it('creates an action the checkouts the current basket', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      checkoutBasket(
        1, 'foo', 'bar', 2,
        {firstname: 'John', lastname: 'Doe'},
        {firstname: 'John', lastname: 'Doe'});
      expect(fetcher).to.be.calledWith('api/v1/checkout', {
        body: {
          session: 1,
          notes: 'foo',
          coupon: 'bar',
          payment: 2,
          billing_firstname: 'John',
          billing_lastname: 'Doe',
          shipping_firstname: 'John',
          shipping_lastname: 'Doe'},
        method: 'POST',
        credentials: 'include'
      });
    });

    it('creates an action that adds an item to the basket', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      createBasketItem(1, 4, 2);
      expect(fetcher).to.be.calledWith('api/v1/basket', {
        body: {product: 1, variation: 4, quantity: 2},
        method: 'POST',
        credentials: 'include'
      });
    });

    it('creates an action that remove an item from the basket', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      removeBasketItem(1);
      expect(fetcher).to.be.calledWith('api/v1/basket/1', {
        body: null,
        method: 'DELETE',
        credentials: 'include'
      });
    });

    it('creates an action that updates an item in the basket', () => {
      const fetcher = sinon.stub().returns(Promise.resolve({}));
      service.setFetcher(fetcher);
      let action = updateBasketItem(1, 4);
      expect(fetcher).to.be.calledWith('api/v1/basket/1', {
        body: {quantity: 4},
        method: 'POST',
        credentials: 'include'
      });
    });

  });

});
