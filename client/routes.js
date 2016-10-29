'use strict';
/**
 * Created by Frank Tsai on 2016/5/18.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { push } from 'react-router-redux';
import App from './containers/App';



function checkLogin(store, nextState, replaceState) {
  if (!store.getState().user.auth) {
    store.dispatch(push('/'));
  }
}

export default (store) => (
  <Route path="/" component={App} >

  </Route>
);
