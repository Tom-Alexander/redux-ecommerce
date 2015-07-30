
import {connect} from 'redux/react';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';
import React, {Component} from 'react';

const actionMapper = {
  order: ['getOrder'],
  orders: ['getOrders'],
  product: ['getProduct'],
  products: ['getProducts'],
  category: ['getCategory'],
  categories: ['getCategories'],
  session: ['getSession', 'createSession', 'removeSession'],
  basket: ['getBasket', 'checkoutBasket', 'removeBasketItem',
  'updateBasketItem', 'createBasketItem']
};

function createStateSelector(names = []) {
  return function (state) {
    return names.reduce((accumulator, name) => {
      accumulator[name] = state[name];
      return accumulator;
    }, {});
  };
}

function createActionSelector(names = []) {
  return names.reduce((accumulator, name) => {
    return {...accumulator, ...actionMapper[name].reduce((map, item) => {
      map[item] = actions[item];
      return map;
    }, {})};
  }, {});
}

export default function contextDecorator(...names) {
  return function (Component) {

    @connect(createStateSelector(...names))
    class ContextContainer extends Component {
      render() {
        const {dispatch} = this.props;
        const dispatchable = bindActionCreators(createActionSelector(...names), dispatch);
        return React.createElement(Component, {
          ...this.props, actions: dispatchable
        }, null);
      }
    }

    return ContextContainer;

  };
}
