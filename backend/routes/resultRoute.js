const express = require('express');
const router = express.Router();

const resultInsertController = require('../controller/resultInsertController');

router.post('/insert', resultInsertController);

module.exports = router;