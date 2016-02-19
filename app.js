'use strict';

var reps = require('./lib/reps');

var express = require('express');
var app = express();
const path = require('path');
const PORT = process.env.PORT || 8000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res, next) {
  var method;

  switch (req.query.type) {
    case 'zip': method = reps.allByZip; break;
    case 'name': method = reps.repsByName; break;
    case 'state': method = reps.repsByState; break;
    default: method = function(param, cb) { cb(null, []); }; break;
  }

  if (method) {
    method(req.query.search, function(err, people) {
      if (err) {return next(err); }
      res.render('index', {
        reps: people,
        query: req.query,
      });
    });
  }
});

app.get('/all/by-zip/:zip', function(req, res, next) {
  reps.allByZip(req.params.zip, function(err, people) {
    if (err) { return next(err);}
    res.json(people);
  });
});

app.get('/reps/by-name/:name', function(req, res, next) {
  reps.repsByName(req.params.name, function(err, people) {
    if (err) {return next(err);}
    res.json(people);
  });
});

app.get('/reps/by-state/:state', function(req, res, next) {
  reps.repsByState(req.params.state, function(err, people) {
    if (err) {return next(err);}
    res.json(people);
  });
});

app.get('/sens/by-name/:name', function(req, res, next) {
  reps.sensByName(req.params.name, function(err, people) {
    if (err) {return next(err);}
    res.json(people);
  });
});

app.get('/sens/by-state/:state', function(req, res, next) {
  reps.sensByState(req.params.state, function(err, people) {
    if (err) {return next(err);}
    res.json(people);
  });
});

app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
