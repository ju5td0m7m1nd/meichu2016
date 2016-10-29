'use strict'
/**
 * Created by FrankTsai on 2016/5/25.
 */

const calculateScreen = () => {
  const w = window;
  const d = document;
  const e = d.documentElement;
  const g = d.getElementsByTagName('body')[0];
  const x = w.innerWidth || e.clientWidth || g.clientWidth;
  const y = w.innerHeight || e.clientHeight || g.clientHeight;
  return { x, y };
}

export default calculateScreen();
