
import * as catalog from './catalogStore';
import * as basket from './basketStore';
import * as session from './sessionStore';

const stores = {
  ...catalog,
  ...session,
  ...basket
};

export default stores;
