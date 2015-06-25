// Generated by CoffeeScript 1.9.3
(function() {
  var Promise, fs, traverse;

  Promise = require('bluebird');

  fs = Promise.promisifyAll(require('fs'));

  traverse = function(k) {
    var go, result;
    result = [];
    go = function(i) {
      result.push(i);
      return fs.readFileAsync(i.toString()).then(function(s) {
        var j;
        j = parseInt(s, 10);
        if (j > 0) {
          return go(j);
        } else {
          return result;
        }
      });
    };
    return go(k);
  };

  module.exports = traverse;

}).call(this);
