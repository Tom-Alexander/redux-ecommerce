
import {collection, element} from './actions';
import {createAction} from 'redux-actions';
import {request} from '../services';

export const getCategories = createAction(
	'GET_CATEGORIES',
	(...args) => request('GET', 'categories', null, collection(...args)));

export const getCategory = createAction(
	'GET_CATEGORY',
	(id, ...args) => request('GET', 'categories', id, element(...args)));

export const getProducts = createAction(
	'GET_PRODUCTS',
	(...args) => request('GET', 'products', null, collection(...args)));

export const getProduct = createAction(
	'GET_PRODUCT',
	(id, ...args) => request('GET', 'products', id, element(...args)));

export const getOrders = createAction(
	'GET_ORDERS',
	(...args) => request('GET', 'orders', null, collection(...args)));

export const getOrder = createAction(
	'GET_ORDER',
  (id, ...args) => request('GET', 'orders', id, element(...args)));
