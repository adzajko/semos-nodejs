let PLANETS = [
  {
    id: 1,
    name: 'Mercury',
    size: 566261,
    distanceFromSun: 2731736217
  }
];

exports.getAllPlanets = (req, res, next) => {
  res.status(200).send(PLANETS);
};

exports.postPlanet = (req, res, next) => {
  console.log(req.body);
  res.status(200).send();
};

exports.getPlanet = (req, res, next) => {
  const id = +req.params.id;
  /**
   * ES5 Way
   */
  // const foundPlanet = PLANETS.find(function(planet) {
  //     return planet.id === id;
  // })

  /**
   * ES6 Way
   */
  const foundPlanet = PLANETS.find(planet => planet.id === id);
  if (!foundPlanet) {
    res.status(400).send('Invalid parameter for id!');
  }
  res.status(200).send(foundPlanet);
};

exports.deletePlanet = (req, res, next) => {
  const id = +req.params.id;
  if (!id || typeof id !== 'number') {
    res.status(400).send('Invalid parameter!');
  }

  //   const foundPlanetIndex = PLANETS.findIndex(planet => planet.id === id);
  //   if (foundPlanetIndex < 0) {
  //     res.status(400).send('No such planet!');
  //   }

  PLANETS = PLANETS.filter(planet => planet.id !== id);
  res.status(200).send('Succesfully deleted!');
};
