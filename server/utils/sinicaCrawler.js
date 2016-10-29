'use strict';
/**
 * Created by FrankTsai on 2016/7/17.
 */


import Request from 'request';
import db from '../models';

const token = 'Token a04fdfceb19325e627514bbcb551ef1f78fdbb18'


const fetch = (next) => new Promise((resolve, rejected) => {
  Request({
    headers: {
      Authorization: token
    },
    url: next,
    method: "GET"
  }, (e, r, b) => {
    const data = JSON.parse(b);
    const next = data.next;
    data.results.map((item) => db.PageViews.create(item))
    fetch(next);
    resolve();
  })
})

fetch('http://meichu.tagtoo.com.tw/pageviews/?page=0')


