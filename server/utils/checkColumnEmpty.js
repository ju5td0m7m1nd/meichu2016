'use strict';
/**
 * Created by FrankTsai on 2016/9/19.
 */

export const checkColumnEmpty = (payload) => {
  return Object.keys(payload).reduce((pre, cur) => {
    if (payload[cur] === '' || payload[cur] === undefined ) return pre & false;
    return pre;
  }, true)
}
