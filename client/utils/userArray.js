'use strict'
/**
 * Created by caimingxun on 2016/10/29.
 */

import data from '../../public/fake.json';

export default () => {
  return data.reduce(
    (pre, cur) => {
      if (pre.hasOwnProperty(cur.uid)) {
        if (pre[cur.uid].hasOwnProperty(cur.adurl)) {
          pre[cur.uid][cur.adurl] = { ...pre[cur.uid][cur.adurl],
            buy: pre[cur.uid][cur.adurl].buy | cur.buy,
            click: pre[cur.uid][cur.adurl].click | cur.click,
          };
        } else {
          pre[cur.uid][cur.adurl] = cur;
        }
      } else {
        pre[cur.uid] = {}
        pre[cur.uid][cur.adurl] = cur
      }
      return pre
    }, {}
  )
}
