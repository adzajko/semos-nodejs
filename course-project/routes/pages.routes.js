const router = require('express').Router();
const { getIndexPage } = require('../controllers/pages.controller');

router.get('/', getIndexPage);

module.exports = router;
