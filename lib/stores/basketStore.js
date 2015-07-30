
import {handleActions} from 'redux-actions';
import {elementHandler, initialElement} from './store';

export const basket = handleActions({
  GET_BASKET: elementHandler(),
  REMOVE_BASKET: elementHandler(),
  CHECKOUT_BASKET: elementHandler(),
  CREATE_BASKET_ITEM: elementHandler(),
  REMOVE_BASKET_ITEM: elementHandler(),
  UPDATE_BASKET_ITEM: elementHandler()
}, initialElement({
  id: 0,
  items: [],
  total: '',
  status: '',
  sub_total: '',
  ordered_on: '',
  last_active: '',
  total_price: '',
  payment_status: '',
  sub_total_price: '',
  cart_total_price: '',
  receive_emails: false,
  total_order_quantity: 0
}));
