const express = require('express');
const dataRoutes = require('./data.routes');

const router = express.Router();

router.use('/data', dataRoutes);

module.exports = router;
