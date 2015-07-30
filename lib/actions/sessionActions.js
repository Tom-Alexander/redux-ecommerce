
import {collection, element} from './actions';
import {createAction} from 'redux-actions';
import {request} from '../services';

export const getSession = createAction(
	'GET_SESSION',
	(...args) => request('GET', 'session', null, element(...args)));

export const removeSession = createAction(
  'REMOVE_SESSION',
  (...args) => request('DELETE', 'session', null, element(...args)));

export const createSession = createAction(
  'CREATE_SESSION',
  (...args) => request('POST', 'session', null, element(...args)));
