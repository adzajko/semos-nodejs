const router = require('express').Router();
router.use('*', (req, res, next) => {
    res.status(404).json('Not Found, babu6!')
})

module.exports = router;