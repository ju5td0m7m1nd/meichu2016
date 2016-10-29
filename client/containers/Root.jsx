'use strict';
/**
 * Created by Ben Hu on 2016/5/18.
 */
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';

// Why not use arrow function : (因為箭頭函式不會有"name(名稱)"屬性)
export default function Root({ store, history }) {
  return (
    <Provider store={store} >
      <div>
        <Router history={history} routes={routes(store)} />
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
