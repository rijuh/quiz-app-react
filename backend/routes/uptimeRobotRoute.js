const express = require('express');
const router = express.Router();

const uptimeRobotController = require('../controller/uptimeRobotController');

router.get('/test', uptimeRobotController);