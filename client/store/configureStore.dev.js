'use strict';
/**
 * Created by Frank Tsai on 2016/5/18.
 */
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(browserHistory),
        createLogger()
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
