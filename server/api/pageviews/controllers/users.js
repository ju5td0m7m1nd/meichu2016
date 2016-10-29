'use strict'
/**
 * Created by caimingxun on 2016/10/29.
 */

import db from '../../../models';

export const all = (req, res) => {
  db.PageViews.findAll({})
    .then(
      results => res.status(200).json(
        results.reduce(
          (pre, cur) => {
            const user = cur.user;
            if (pre.hasOwnProperty(cur.user)) {
              if (cur.page !== null) {
                pre[user].push(cur)
              }
            } else {
              pre[user] = []
              if (cur.page !== null) {
                pre[user].push(cur)
              }
            }
            return pre
          }, {}
        )
      )
    )
}

export const single = (req, res) => {
  db.PageViews.findAll({
    where: {
      user: req.params.id
    }
  })
    .then(
      results => res.status(200).json(results)
    )
}
