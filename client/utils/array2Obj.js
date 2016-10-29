'use strict';
/**
 * Created by FrankTsai on 2016/9/23.
 */

export default (arr, key) => {
  return arr.reduce((pre, cur) => {
    const val = cur[key];
    return { ...pre, [val]: cur }
  }, {})
}