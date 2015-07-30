
import stores from './stores';
import promiseMiddleware from 'redux-promise';
import {createRedux, createDispatcher, composeStores} from 'redux';

export const dispatcher = createDispatcher(
  composeStores(stores),
  [promiseMiddleware]
);

export const redux = createRedux(dispatcher);
