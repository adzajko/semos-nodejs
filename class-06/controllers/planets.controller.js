const {
  basicAllValidator,
  basicValidator
} = require('../util/basic-validator/basic-validator');
const sendMail = require('../util/mail-sender/mail-sender');

exports.getAllPlanets = (req, res, next) => {
  // res.setHeader('Set-Cookie', 'randomCookie=7')
  req.session.loggedIn = true;
  console.log(req.session);
  res.status(200).send();
};

exports.getSmth = (req, res, next) => {
  res.render('index', {
    isLoggedIn: req.session.loggedIn
  });
};

exports.postPlanet = (req, res, next) => {
  const reqBody = req.body;

  if (basicValidator(reqBody, 'name', 'size')) {
    res.status(400).send('Missing parameters!');
  }
};

exports.login = (req, res, next) => {
  if (2 === 2) {
    req.session.loggedIn = true;
    res.status(200).send();
  }
};

exports.contactMe = (req, res, next) => {
  const reqBody = req.body;
  if (basicValidator(reqBody, 'subject', 'text')) {
    res.status(400).send('Invalid params!');
  } else {
    sendMail(reqBody)
      .then(response => {
        console.log(response);
        res.status(200).send('Mail sent!');
      })
      .catch(err => {
        console.log(err);
        res.status(500).send('Error sending mail.');
      });
  }
};
