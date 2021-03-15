const router = require('express').Router();

/**
 * Catch all function, this middleware will intercept any requests that are not handled.
 * The * character means WILDCARD, or, anything
 */
router.use('*', (req, res) => {
  res.status(404).send(JSON.stringify('Not Found!'));
});

module.exports = router;
