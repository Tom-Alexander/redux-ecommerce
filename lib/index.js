
import 'babel/polyfill';
import {redux} from './redux';
import stores from './stores';
import actions from './actions';
import services from './services';
import contextDecorator from './react/containers/contextDecorator';
import provideContextDecorator from './react/containers/provideContextDecorator';

const ecommerce = {
  redux,
  stores,
  actions,
  services,
  context: contextDecorator,
  provideContext: provideContextDecorator
};

export default ecommerce;
