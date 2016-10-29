'use strict';
/**
 * Created by FrankTsai on 2016/7/22.
 */

import express from 'express';

import {all, single} from './controllers/users';

const router = express.Router();// eslint-disable-line new-cap

router.get('/users', all);
router.get('/users/:id', single)

export default router;
