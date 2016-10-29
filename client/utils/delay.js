'use strict';
/**
 * Created by FrankTsai on 2016/7/8.
 */
export default (ms) => new Promise( resolve =>
  setTimeout(resolve, ms)
);
