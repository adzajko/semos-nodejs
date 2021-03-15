const router = require('express').Router();
const notFoundRoutes = require('./not-found.routes');
const swaggerRoutes = require('./swagger.routes');
const planetRoutes = require('./planet.routes');
const pageRoutes = require('./pages.routes');

// router.use('/getSomething', (req, res, next) => {
//     res.status(200).send();
// })

// router.get('/getSomething', (req, res, next) => {
//   console.log('getSomething triggered!');
//   next();
// });

// router.use('*', (req, res, next) => {
//   console.log('Caught by next!');
//   res.status(404).send();
// });

/**
 * Access the app's root directory from anywhere
 */
// console.log(require.main.path);

router.use(pageRoutes);
router.use(planetRoutes);
router.use(swaggerRoutes);

router.use(notFoundRoutes);
module.exports = router;
