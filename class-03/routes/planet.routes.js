const router = require('express').Router();
const {
  getAllPlanets,
  postPlanet,
  getPlanet,
  deletePlanet
} = require('../controllers/planets.controller');

router.get('/planets', getAllPlanets);
router.post('/planets', postPlanet);
router.get('/planets/:id', getPlanet);
router.delete('/planets/:id', deletePlanet);

module.exports = router;
