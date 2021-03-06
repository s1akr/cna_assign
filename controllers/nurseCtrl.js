const Nurses = require('../models/nurseMdl');

function index(req, res) {
  Nurses.find({}, function(err,nurses) {
    if (!nurses) res.sendStatus(404);
    else res.json(nurses);
  });
}

function show(req, res) {
  Nurses.findOne({ name: req.body.first }, function (err, nurse) {
    if (!nurse) res.sendStatus(404);
    else res.json(nurse);
  });
}

function post(req, res) {
  console.log('res.body in post: ', req.body);
  Nurses.create({
    first: req.body.first,
    last: req.body.last,
    username: req.body.username,
    password: req.body.password,
  }, function(err, result) {
    if (err) console.log('mongoose create error: ', err);
    res.send('posted');
  });
}

function remove(req, res) {
  Nurses.remove({ first: req.body.first, last: req.body.last }, function(err, result) {
    res.send('deleted');
  });
}

function login(req, res) {
  console.log('req.body inside login: ', req.body);
  Nurses.findOne({ username: req.body.username }, function(err, nurse) {
    nurse.checkPassword(req.body.password, function(err, matches) {
      if (err) console.log(err);
      console.log('checkpassword matches: ', matches);
      if (matches) res.json({ matches: true });
      else res.json({ matches: false });
    });
  });
}

module.exports = { index, show, post, remove, login };
