
import {createAction} from 'redux-actions';
import {element, spreadPrefix} from './actions';
import {request, service} from '../services';

export const getBasket = createAction(
	'GET_BASKET',
	(...args) => {
    console.log('GET_BASKET');
    return request('GET', 'basket', null, element(...args));
  });

export const checkoutBasket = createAction(
  'CHECKOUT_BASKET',
  (session = null,
    notes = null,
    coupon = null,
    payment = null, shipping = {}, billing = {}, ...args) => {
      return request('POST', 'checkout', null, element(...args), {
        notes,
        coupon,
        payment,
        session,
        ...spreadPrefix('billing', billing),
        ...spreadPrefix('shipping', shipping)
      });
  });

export const removeBasket = createAction(
	'REMOVE_BASKET',
	(...args) => request('DELETE', 'basket', null, element(...args)));

export const removeBasketItem = createAction(
  'REMOVE_BASKET_ITEM',
  (id, ...args) => request('DELETE', 'basket', id, element(...args)));

export const createBasketItem = createAction(
  'CREATE_BASKET_ITEM',
  (product, variation, quantity, ...args) => request(
    'POST',
    'basket',
    null, element(...args), {
    product,
    variation,
    quantity
  }));

export const updateBasketItem = createAction(
  'UPDATE_BASKET_ITEM',
  (id, quantity, ...args) => request(
    'POST',
    'basket',
    id,
    element(...args), {quantity
  }));
