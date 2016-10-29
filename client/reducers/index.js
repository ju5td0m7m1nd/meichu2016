'use strict';
/**
 * Created by Frank Tsai on 2016/5/18.
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  routing,
});

export default rootReducer;
