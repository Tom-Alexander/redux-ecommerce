'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.element = element;
exports.collection = collection;
exports.spreadPrefix = spreadPrefix;

function element() {
  var include = arguments[0] === undefined ? [] : arguments[0];

  return { include: include.join(',') };
}

function collection() {
  var filter = arguments[0] === undefined ? [] : arguments[0];
  var sort = arguments[1] === undefined ? [] : arguments[1];
  var start = arguments[2] === undefined ? '' : arguments[2];
  var limit = arguments[3] === undefined ? '' : arguments[3];
  var include = arguments[4] === undefined ? [] : arguments[4];

  return {
    include: include.length ? include.join(',') : '',
    filter: filter.length ? filter.join(',') : '',
    sort: sort.length ? sort.join(',') : '',
    start: start,
    limit: limit
  };
}

function spreadPrefix(prefix, object) {
  return Object.keys(object).reduce(function (prefixed, key) {
    prefixed['' + prefix + '_' + key] = object[key];
    return prefixed;
  }, {});
}
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('redux-actions');

var _actions = require('./actions');

var _services = require('../services');

var getBasket = (0, _reduxActions.createAction)('GET_BASKET', function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  console.log('GET_BASKET');
  return (0, _services.request)('GET', 'basket', null, _actions.element.apply(undefined, args));
});

exports.getBasket = getBasket;
var checkoutBasket = (0, _reduxActions.createAction)('CHECKOUT_BASKET', function () {
  for (var _len2 = arguments.length, args = Array(_len2 > 6 ? _len2 - 6 : 0), _key2 = 6; _key2 < _len2; _key2++) {
    args[_key2 - 6] = arguments[_key2];
  }

  var session = arguments[0] === undefined ? null : arguments[0];
  var notes = arguments[1] === undefined ? null : arguments[1];
  var coupon = arguments[2] === undefined ? null : arguments[2];
  var payment = arguments[3] === undefined ? null : arguments[3];
  var shipping = arguments[4] === undefined ? {} : arguments[4];
  var billing = arguments[5] === undefined ? {} : arguments[5];

  return (0, _services.request)('POST', 'checkout', null, _actions.element.apply(undefined, args), _extends({
    notes: notes,
    coupon: coupon,
    payment: payment,
    session: session
  }, (0, _actions.spreadPrefix)('billing', billing), (0, _actions.spreadPrefix)('shipping', shipping)));
});

exports.checkoutBasket = checkoutBasket;
var removeBasket = (0, _reduxActions.createAction)('REMOVE_BASKET', function () {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return (0, _services.request)('DELETE', 'basket', null, _actions.element.apply(undefined, args));
});

exports.removeBasket = removeBasket;
var removeBasketItem = (0, _reduxActions.createAction)('REMOVE_BASKET_ITEM', function (id) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return (0, _services.request)('DELETE', 'basket', id, _actions.element.apply(undefined, args));
});

exports.removeBasketItem = removeBasketItem;
var createBasketItem = (0, _reduxActions.createAction)('CREATE_BASKET_ITEM', function (product, variation, quantity) {
  for (var _len5 = arguments.length, args = Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
    args[_key5 - 3] = arguments[_key5];
  }

  return (0, _services.request)('POST', 'basket', null, _actions.element.apply(undefined, args), {
    product: product,
    variation: variation,
    quantity: quantity
  });
});

exports.createBasketItem = createBasketItem;
var updateBasketItem = (0, _reduxActions.createAction)('UPDATE_BASKET_ITEM', function (id, quantity) {
  for (var _len6 = arguments.length, args = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    args[_key6 - 2] = arguments[_key6];
  }

  return (0, _services.request)('POST', 'basket', id, _actions.element.apply(undefined, args), { quantity: quantity
  });
});
exports.updateBasketItem = updateBasketItem;
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _actions = require('./actions');

var _reduxActions = require('redux-actions');

var _services = require('../services');

var getCategories = (0, _reduxActions.createAction)('GET_CATEGORIES', function () {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return (0, _services.request)('GET', 'categories', null, _actions.collection.apply(undefined, args));
});

exports.getCategories = getCategories;
var getCategory = (0, _reduxActions.createAction)('GET_CATEGORY', function (id) {
	for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		args[_key2 - 1] = arguments[_key2];
	}

	return (0, _services.request)('GET', 'categories', id, _actions.element.apply(undefined, args));
});

exports.getCategory = getCategory;
var getProducts = (0, _reduxActions.createAction)('GET_PRODUCTS', function () {
	for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		args[_key3] = arguments[_key3];
	}

	return (0, _services.request)('GET', 'products', null, _actions.collection.apply(undefined, args));
});

exports.getProducts = getProducts;
var getProduct = (0, _reduxActions.createAction)('GET_PRODUCT', function (id) {
	for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
		args[_key4 - 1] = arguments[_key4];
	}

	return (0, _services.request)('GET', 'products', id, _actions.element.apply(undefined, args));
});

exports.getProduct = getProduct;
var getOrders = (0, _reduxActions.createAction)('GET_ORDERS', function () {
	for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
		args[_key5] = arguments[_key5];
	}

	return (0, _services.request)('GET', 'orders', null, _actions.collection.apply(undefined, args));
});

exports.getOrders = getOrders;
var getOrder = (0, _reduxActions.createAction)('GET_ORDER', function (id) {
	for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
		args[_key6 - 1] = arguments[_key6];
	}

	return (0, _services.request)('GET', 'orders', id, _actions.element.apply(undefined, args));
});
exports.getOrder = getOrder;
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _basketActions = require('./basketActions');

var basketActions = _interopRequireWildcard(_basketActions);

var _catalogActions = require('./catalogActions');

var catalogActions = _interopRequireWildcard(_catalogActions);

var _sessionActions = require('./sessionActions');

var sessionActions = _interopRequireWildcard(_sessionActions);

var actions = _extends({}, basketActions, catalogActions, sessionActions);

exports['default'] = actions;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _actions = require('./actions');

var _reduxActions = require('redux-actions');

var _services = require('../services');

var getSession = (0, _reduxActions.createAction)('GET_SESSION', function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0, _services.request)('GET', 'session', null, _actions.element.apply(undefined, args));
});

exports.getSession = getSession;
var removeSession = (0, _reduxActions.createAction)('REMOVE_SESSION', function () {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return (0, _services.request)('DELETE', 'session', null, _actions.element.apply(undefined, args));
});

exports.removeSession = removeSession;
var createSession = (0, _reduxActions.createAction)('CREATE_SESSION', function () {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return (0, _services.request)('POST', 'session', null, _actions.element.apply(undefined, args));
});
exports.createSession = createSession;
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('babel/polyfill');

var _redux = require('./redux');

var _stores = require('./stores');

var _stores2 = _interopRequireDefault(_stores);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _services = require('./services');

var _services2 = _interopRequireDefault(_services);

var _reactContainersContextDecorator = require('./react/containers/contextDecorator');

var _reactContainersContextDecorator2 = _interopRequireDefault(_reactContainersContextDecorator);

var _reactContainersProvideContextDecorator = require('./react/containers/provideContextDecorator');

var _reactContainersProvideContextDecorator2 = _interopRequireDefault(_reactContainersProvideContextDecorator);

var ecommerce = {
  redux: _redux.redux,
  stores: _stores2['default'],
  actions: _actions2['default'],
  services: _services2['default'],
  context: _reactContainersContextDecorator2['default'],
  provideContext: _reactContainersProvideContextDecorator2['default']
};

exports['default'] = ecommerce;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = contextDecorator;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _reduxReact = require('redux/react');

var _redux = require('redux');

var _actions = require('../../actions');

var actions = _interopRequireWildcard(_actions);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var actionMapper = {
  order: ['getOrder'],
  orders: ['getOrders'],
  product: ['getProduct'],
  products: ['getProducts'],
  category: ['getCategory'],
  categories: ['getCategories'],
  session: ['getSession', 'createSession', 'removeSession'],
  basket: ['getBasket', 'checkoutBasket', 'removeBasketItem', 'updateBasketItem', 'createBasketItem']
};

function createStateSelector() {
  var names = arguments[0] === undefined ? [] : arguments[0];

  return function (state) {
    return names.reduce(function (accumulator, name) {
      accumulator[name] = state[name];
      return accumulator;
    }, {});
  };
}

function createActionSelector() {
  var names = arguments[0] === undefined ? [] : arguments[0];

  return names.reduce(function (accumulator, name) {
    return _extends({}, accumulator, actionMapper[name].reduce(function (map, item) {
      map[item] = actions[item];
      return map;
    }, {}));
  }, {});
}

function contextDecorator() {
  for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
    names[_key] = arguments[_key];
  }

  return function (Component) {
    var ContextContainer = (function (_Component) {
      function ContextContainer() {
        _classCallCheck(this, _ContextContainer);

        if (_Component != null) {
          _Component.apply(this, arguments);
        }
      }

      _inherits(ContextContainer, _Component);

      var _ContextContainer = ContextContainer;

      _createClass(_ContextContainer, [{
        key: 'render',
        value: function render() {
          var dispatch = this.props.dispatch;

          var dispatchable = (0, _redux.bindActionCreators)(createActionSelector.apply(undefined, names), dispatch);
          return _react2['default'].createElement(Component, _extends({}, this.props, { actions: dispatchable
          }), null);
        }
      }]);

      ContextContainer = (0, _reduxReact.connect)(createStateSelector.apply(undefined, names))(ContextContainer) || ContextContainer;
      return ContextContainer;
    })(Component);

    return ContextContainer;
  };
}

module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = provideContextDecorator;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _redux = require('../../redux');

var _reduxReact = require('redux/react');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _contextDecorator = require('./contextDecorator');

var _contextDecorator2 = _interopRequireDefault(_contextDecorator);

function provideContextDecorator() {
  for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
    names[_key] = arguments[_key];
  }

  return function (Component) {
    var ContextProvider = (function (_Component) {
      function ContextProvider() {
        _classCallCheck(this, ContextProvider);

        if (_Component != null) {
          _Component.apply(this, arguments);
        }
      }

      _inherits(ContextProvider, _Component);

      _createClass(ContextProvider, [{
        key: 'render',
        value: function render() {
          var Child = (0, _contextDecorator2['default'])(names)(Component);
          return _react2['default'].createElement(
            _reduxReact.Provider,
            { redux: _redux.redux },
            function () {
              return _react2['default'].createElement(Child, null);
            }
          );
        }
      }]);

      return ContextProvider;
    })(Component);

    return ContextProvider;
  };
}

module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stores = require('./stores');

var _stores2 = _interopRequireDefault(_stores);

var _reduxPromise = require('redux-promise');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _redux = require('redux');

var dispatcher = (0, _redux.createDispatcher)((0, _redux.composeStores)(_stores2['default']), [_reduxPromise2['default']]);

exports.dispatcher = dispatcher;
var redux = (0, _redux.createRedux)(dispatcher);
exports.redux = redux;
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _errors = require('./errors');

var browserFetch = typeof window !== 'undefined' && window.fetch;

var Service = (function () {
  function Service(uri, config, fetcher) {
    _classCallCheck(this, Service);

    this.uri = uri;
    this.fetcher = fetcher || browserFetch || null;
    this.extra = _extends({ credentials: 'include' }, config);
  }

  _createClass(Service, [{
    key: 'setFetcher',
    value: function setFetcher(fetcher) {
      this.fetcher = fetcher;
    }
  }, {
    key: 'respondWith',
    value: function respondWith(promise) {
      return new Promise(function (resolve, reject) {
        promise.then(function (response) {
          if (!response.ok) reject((0, _errors.errorCreator)(response.code));else return response.json();
        }).then(resolve)['catch'](function () {
          reject((0, _errors.errorCreator)('ECONNREFUSED'));
        });
      });
    }
  }, {
    key: 'params',
    value: function params(args) {
      return Object.keys(args).filter(function (key) {
        return args[key] !== '' && args[key] !== null;
      }).map(function (key) {
        return key + '=' + args[key];
      }).join('&');
    }
  }, {
    key: 'request',
    value: function request(method, resource, id, params) {
      var body = arguments[4] === undefined ? null : arguments[4];

      var url = [this.uri, resource];
      var config = _extends({}, this.extra, { method: method, body: body });

      if (id) {
        url.push(id);
      }

      var input = [url.join('/')];
      var paramString = params && this.params(params);

      if (paramString) {
        input.push('?');
        input.push(paramString);
      }

      return this.respondWith(this.fetcher.apply(null, [input.join(''), config]));
    }
  }]);

  return Service;
})();

exports['default'] = Service;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports.errorCreator = errorCreator;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var ServiceError = (function (_Error) {
  function ServiceError(code, text, description) {
    for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }

    var _get2;

    _classCallCheck(this, ServiceError);

    (_get2 = _get(Object.getPrototypeOf(ServiceError.prototype), 'constructor', this)).call.apply(_get2, [this, text].concat(args));
    this.text = text;
    this.code = code;
    this.description = description;
  }

  _inherits(ServiceError, _Error);

  return ServiceError;
})(Error);

exports.ServiceError = ServiceError;

function errorCreator(responseCode) {
  switch (responseCode) {
    case 400:
      return new ServiceError(400, 'Bad Request', 'The request was invalid or cannot be otherwise served.');
    case 401:
      return new ServiceError(401, 'Unauthorized', 'Authentication credentials were missing or incorrect.');
    case 403:
      return new ServiceError(403, 'Forbidden', 'The request is understood, but it has been refused or ' + 'access is not allowed.');
    case 404:
      return new ServiceError(404, 'Not Found', 'The URI requested is invalid or the resource requested ' + 'does not exists.');
    case 500:
      return new ServiceError(500, 'Internal Server Error', 'Something is broken.');
    case 'ECONNREFUSED':
      return new ServiceError('ECONNREFUSED', 'Socket Error', 'The connection was refused by the server.');
    default:
      return new ServiceError(null, null, null);
  }
}
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Service = require('./Service');

var _Service2 = _interopRequireDefault(_Service);

var singleton = new _Service2['default']('/api/v1');

var service = {
  Service: _Service2['default'],
  service: singleton,
  request: singleton.request.bind(singleton)
};

exports['default'] = service;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _reduxActions = require('redux-actions');

var _store = require('./store');

var basket = (0, _reduxActions.handleActions)({
  GET_BASKET: (0, _store.elementHandler)(),
  REMOVE_BASKET: (0, _store.elementHandler)(),
  CHECKOUT_BASKET: (0, _store.elementHandler)(),
  CREATE_BASKET_ITEM: (0, _store.elementHandler)(),
  REMOVE_BASKET_ITEM: (0, _store.elementHandler)(),
  UPDATE_BASKET_ITEM: (0, _store.elementHandler)()
}, (0, _store.initialElement)({
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
exports.basket = basket;
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _reduxActions = require('redux-actions');

var _store = require('./store');

var categories = (0, _reduxActions.handleActions)({
  GET_CATEGORIES: (0, _store.collectionHandler)()
}, (0, _store.initialCollection)());

exports.categories = categories;
var category = (0, _reduxActions.handleActions)({
  GET_CATEGORY: (0, _store.elementHandler)()
}, (0, _store.initialElement)({
  id: 0,
  title: '',
  page: null,
  sort_order: 0
}));

exports.category = category;
var products = (0, _reduxActions.handleActions)({
  GET_PRODUCTS: (0, _store.collectionHandler)()
}, (0, _store.initialCollection)());

exports.products = products;
var product = (0, _reduxActions.handleActions)({
  GET_PRODUCT: (0, _store.elementHandler)()
}, (0, _store.initialElement)({
  id: 0,
  price: '',
  title: '',
  page: null,
  amount: '',
  images: [],
  attributes: [],
  variations: [],
  categories: [],
  preview_image: null
}));

exports.product = product;
var orders = (0, _reduxActions.handleActions)({
  GET_ORDERS: (0, _store.collectionHandler)()
}, (0, _store.initialCollection)());

exports.orders = orders;
var order = (0, _reduxActions.handleActions)({
  GET_ORDER: (0, _store.elementHandler)()
}, (0, _store.initialElement)({
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
exports.order = order;
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _catalogStore = require('./catalogStore');

var catalog = _interopRequireWildcard(_catalogStore);

var _basketStore = require('./basketStore');

var basket = _interopRequireWildcard(_basketStore);

var _sessionStore = require('./sessionStore');

var session = _interopRequireWildcard(_sessionStore);

var stores = _extends({}, catalog, session, basket);

exports['default'] = stores;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _reduxActions = require('redux-actions');

var _store = require('./store');

var session = (0, _reduxActions.handleActions)({
  GET_SESSION: (0, _store.elementHandler)(),
  CREATE_SESSION: (0, _store.elementHandler)(),
  REMOVE_SESSION: (0, _store.elementHandler)()
}, (0, _store.initialElement)({
  session_id: 0,
  member: null,
  token: ''
}));
exports.session = session;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.errorHandler = errorHandler;
exports.elementHandler = elementHandler;
exports.collectionHandler = collectionHandler;
exports.initialCollection = initialCollection;
exports.initialElement = initialElement;

function errorHandler(state, action) {
  return _extends({}, state, { error: action.payload });
}

function elementHandler(state, action) {
  return {
    next: function next(state, action) {
      return _extends({}, state, {
        error: null,
        data: _extends({}, action.payload) });
    },
    "throw": errorHandler
  };
}

function collectionHandler(state, action) {
  return {
    next: function next(state, action) {
      return _extends({}, state, {
        error: null,
        data: _extends({}, action.payload) });
    },
    "throw": errorHandler
  };
}

function initialCollection() {
  var data = arguments[0] === undefined ? { items: [] } : arguments[0];

  return { error: null, data: data };
}

function initialElement() {
  var data = arguments[0] === undefined ? {} : arguments[0];

  return { error: null, data: data };
}
