


import {redux} from '../../redux';
import {Provider} from 'redux/react';
import React, {Component} from 'react';

import contextDecorator from './contextDecorator';

export default function provideContextDecorator(...names) {
  return function (Component) {
    class ContextProvider extends Component {
      render() {
        const Child = contextDecorator(names)(Component);
        return <Provider redux={redux}>{() => <Child/>}</Provider>
      }
    }
    return ContextProvider;
  };
}
