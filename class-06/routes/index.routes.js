const router = require('express').Router();

const planetRoutes = require('./planets.routes');

router.use(planetRoutes);

module.exports = router;
