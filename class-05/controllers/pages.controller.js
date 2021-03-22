const PLANETS = [
  {
    id: 1,
    name: 'Earth',
    randomInfo: 'hdashda'
  },
  {
    id: 2,
    name: 'Neptune',
    randomInfo: 'hdashda'
  },
  {
    id: 3,
    name: 'Mars',
    randomInfo: 'hdashda'
  },
  {
    id: 4,
    name: 'Venus',
    randomInfo: 'hdashda'
  },
  {
    id: 5,
    name: 'Jupiter',
    randomInfo: 'hdashda'
  },
  {
    id: 6,
    name: 'Saturn',
    randomInfo: 'hdashda'
  }
];

exports.getIndexPage = (req, res, next) => {
  res.render('index', {
    pageTitle: 'Planetarium - HOME'
  });
};

exports.getPlanetsPage = (req, res, next) => {
  res.render('planets/planets', {
    pageTitle: 'Planets - Planetarium',
    planets: PLANETS
  });
};

exports.getPlanetDetails = (req, res, next) => {
  const id = req.params.id;
  const foundPlanet = PLANETS.find(planet => planet.id === +id);

  res.render('planets/planetDetails', {
    pageTitle: `Planet - ${foundPlanet.name}`,
    planet: foundPlanet
  });
};
