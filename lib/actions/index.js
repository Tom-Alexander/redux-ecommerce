

import * as basketActions from './basketActions';
import * as catalogActions from './catalogActions';
import * as sessionActions from './sessionActions';

const actions = {
  ...basketActions, ...catalogActions, ...sessionActions
};

export default actions;
