const router = require('express').Router();
const movieRoutes = require('./movies.routes');
const notFoundRoutes = require('./notFound.routes');

router.use(movieRoutes);
router.use(notFoundRoutes);

module.exports = router;
