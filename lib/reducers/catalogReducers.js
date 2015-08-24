
import { handleActions}  from 'redux-actions';
import {
  elementHandler,
  collectionHandler,
  initialCollection,
  initialElement } from './utils';

export const categories = handleActions({
  GET_CATEGORIES: collectionHandler()
}, initialCollection());

export const category = handleActions({
  GET_CATEGORY: elementHandler()
}, initialElement({
  id: 0,
  title: '',
  page: null,
  sort_order: 0
}));

export const products = handleActions({
  GET_PRODUCTS: collectionHandler()
}, initialCollection());

export const product = handleActions({
  GET_PRODUCT: elementHandler()
}, initialElement({
  id: 0,
  price: '',
  title: '',
  page: null,
  amount: '',
  images: [],
  attributes: {data: []},
  variations: [],
  categories: [],
  preview_image: null
}));

export const orders = handleActions({
  GET_ORDERS: collectionHandler()
}, initialCollection());

export const order = handleActions({
  GET_ORDER: elementHandler()
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
