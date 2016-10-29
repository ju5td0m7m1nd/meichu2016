'use strict';
/**
 * Created by Frank Tsai on 2016/5/18.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { push } from 'react-router-redux';
import App from './containers/App';
import MainContainer from './containers/MainContainer';
import ReviewContainer from './containers/ReviewContainer';

export default (store) => (
  <Route path="/" component={App} >
    <IndexRoute component={MainContainer} />
    <Route path="/review" component={ReviewContainer} />
  </Route>
);
