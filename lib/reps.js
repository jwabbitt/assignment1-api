var request = require('superagent');

var host = 'http://whoismyrepresentative.com/';
var output = '&output=json';

exports.allByZip = function(zip, callback) {
  request
    .get(host + 'getall_mems.php?zip=' + zip + output)
    .end(function(err, res){
      if (err) return callback(err);

      try {
        callback(null, JSON.parse(res.text).results);
      } catch (err) {
        callback(null, []);
      }
    });
};

exports.repsByName = function(repName, callback) {
  request
    .get(host + 'getall_reps_byname.php?name=' + repName + output)
    .end(function(err, res){
      if (err) return callback(err);

      try {
        callback(null, JSON.parse(res.text).results);
      } catch (err) {
        callback(null, []);
      }
    });
};

exports.repsByState = function(repState, callback) {
  request
    .get(host + 'getall_reps_bystate.php?state=' + repState + output)
    .end(function(err, res){
      if (err) return callback(err);

      try {
        callback(null, JSON.parse(res.text).results);
      } catch (err) {
        callback(null, []);
      }
    });
};

exports.sensByName = function(senName, callback) {
  request
    .get(host + 'getall_sens_byname.php?name=' + senName + output)
    .end(function(err, res){
      if (err) return callback(err);

      try {
        callback(null, JSON.parse(res.text).results);
      } catch (err) {
        callback(null, []);
      }
    });
};

exports.sensByState = function(senState, callback) {
  request
    .get(host + 'getall_sens_bystate.php?state=' + senState + output)
    .end(function(err, res){
      if (err) return callback(err);

      try {
        callback(null, JSON.parse(res.text).results);
      } catch (err) {
        callback(null, []);
      }
    });
};
;
