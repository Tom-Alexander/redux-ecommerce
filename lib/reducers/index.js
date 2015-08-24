
import * as catalog from './catalogReducers';
import * as basket from './basketReducers';
import * as session from './sessionReducers';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  ...catalog,
  ...session,
  ...basket
});

export default reducers;
