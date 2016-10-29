'use strict';
/**
 * Created by Frank Tsai on 2016/5/18.
 */
import devStore from './configureStore.dev';
import store from './configureStore';

if (process.env.NODE_ENV === 'production') {
  module.exports = store;
} else {
  module.exports = devStore;
}