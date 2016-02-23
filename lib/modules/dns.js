'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _dns = require('dns');

var _dns2 = _interopRequireDefault(_dns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var check = function check(url) {
  return new _bluebird2.default(function (resolve, reject) {
    _dns2.default.resolve4(url, function (err, addresses) {
      if (err) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

exports.default = check;