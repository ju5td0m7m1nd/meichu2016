'use strict';
/**
 * Created by Frank Tsai on 2016/5/20.
 */
import pageViews from './api/pageviews';
const routes = (app) => {
  // add API routing rules here
  app.use('/api/pageviews', pageViews);
  app.route('/:url(api|auth)/*').get((req, res) => {
    res.status(404).json({
      status: 404,
      message: 'not found',
    });
  });
};

export default routes;
