const router = require('express').Router();
const path = require('path');

const pathToRoot = require.main.path;
const pathToIndex = path.join(pathToRoot, 'public', 'index.html');

router.get('/hello', (req, res, next) => {
  res.sendFile(pathToIndex);
});

module.exports = router;
