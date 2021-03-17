const router = require('express').Router();

/**
 * Route imports
 */
const notFoundRoutes = require('./not-found.routes');
const swaggerRoutes = require('./swagger.routes');
const songRoutes = require('./songs.routes');
const artistRoutes = require('./artist.routes');

router.use(songRoutes);
router.use(artistRoutes);
router.use(swaggerRoutes);
router.use(notFoundRoutes);

module.exports = router;
