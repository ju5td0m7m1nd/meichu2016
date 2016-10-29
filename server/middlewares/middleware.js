'use strict';
/**
 * Created by Frank Tsai on 2016/5/20.
 */
export default (req, res, next) => {
  console.log('Put middleware here');
  next();
};
