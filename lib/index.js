'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _dns = require('./modules/dns');

var _dns2 = _interopRequireDefault(_dns);

var _socials = require('./modules/socials');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var check = function check(name) {
  return _bluebird2.default.all([(0, _dns2.default)(name + '.com'), (0, _dns2.default)(name + '.org'), (0, _dns2.default)(name + '.net'), (0, _dns2.default)(name + '.info'), (0, _socials.facebook)(name), (0, _socials.twitter)(name), (0, _socials.github)(name)]).then(humanize(name));
};

var humanize = function humanize(name) {
  return function (results) {
    return new _bluebird2.default(function (resolve, reject) {
      resolve({
        domains: {
          com: results[0],
          org: results[1],
          net: results[2],
          info: results[3]
        },
        socials: {
          facebook: results[4],
          twitter: results[5],
          github: results[6]
        }
      });
    });
  };
};

exports.default = check;