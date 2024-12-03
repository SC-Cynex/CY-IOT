const express = require('express');
const { getData, insertData } = require('../controllers/data.controller');

const router = express.Router();

router.get('/', getData);
router.post('/', insertData);

module.exports = router;
