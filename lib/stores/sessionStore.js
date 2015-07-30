
import {handleActions} from 'redux-actions';
import {initialElement, elementHandler} from './store';

export const session = handleActions({
  GET_SESSION: elementHandler(),
  CREATE_SESSION: elementHandler(),
  REMOVE_SESSION: elementHandler()
}, initialElement({
  session_id: 0,
  member: null,
  token: ''
}));
