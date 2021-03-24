const router = require('express').Router();
const {
  getAllPlanets,
  postPlanet,
  getSmth,
  contactMe
} = require('../controllers/planets.controller');

router
  .route('/planets')
  .get(getAllPlanets)
  .post(postPlanet);

router.get('/smth', getSmth);

router.post('/contact', contactMe);

module.exports = router;
