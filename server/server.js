'use strict';
/**
 * Created by Frank Tsai on 2016/5/18.
 */
import path from 'path';
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { config, devConfig } from '../webpack';
const session = require('client-sessions');

const app = express();
const server = http.createServer(app);

const LISTEN_PORT = process.env.PORT || 8888;
const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'production') {
  const compiler = webpack(config);
  compiler.run((err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('[Production] Compile done.');

  });
} else if (NODE_ENV === 'development' || NODE_ENV === 'migration') {
  const compiler = webpack(devConfig);
  // middleware to handle the static assets
  app.use(webpackDevMiddleware(compiler,
    {
      publicPath: config.output.publicPath,
      stats: { colors: true },
    }
  ));
  // enable hot reload without refresh on browser
  app.use(webpackHotMiddleware(compiler));
} else {
  throw new Error('NODE_ENV is undefined.');
}

app.use(express.static(path.join(__dirname, '../')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
  // login state
  cookieName: 'session',
  secret: 'ju5td0m7m1nd_rocks',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}))
require('./routes').default(app);
require('./models');
app.use((req, res, next) => {
  if (req.url.match(/\/api\/.*/)) {
    next();
  } else {
    res.sendFile(path.join(__dirname, '../index.html'));
  }
});

server.listen(LISTEN_PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info('[%s Mode] Server listening on port %d.', NODE_ENV, LISTEN_PORT);
  }
});

