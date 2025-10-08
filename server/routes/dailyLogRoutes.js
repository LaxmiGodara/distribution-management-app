const express = require('express');
const router = express.Router();
const { createDailyLog } = require('../controllers/dailyLogController');

router.route('/').post(createDailyLog);

module.exports = router;
