'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.github = exports.twitter = exports.facebook = undefined;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var facebook = function facebook(name) {
  return _checkFor404('https://www.facebook.com/' + name);
};

var twitter = function twitter(name) {
  return _checkFor404('https://twitter.com/' + name);
};

var github = function github(name) {
  return _checkFor404('https://github.com/' + name);
};

var _checkFor404 = function _checkFor404(url) {
  return new _bluebird2.default(function (resolve, reject) {
    (0, _request2.default)({
      followAllRedirects: true,
      url: url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
        'Accept-Encoding': 'gzip,deflate,sdch',
        'Accept-Language': 'en-US,en;q=0.8',
        'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3'
      }
    }, function (error, response, body) {
      if (response.statusCode === 404) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

exports.facebook = facebook;
exports.twitter = twitter;
exports.github = github;