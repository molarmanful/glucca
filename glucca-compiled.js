'use strict';

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var glucca, R, v, c, cf, cs, cp, M, T, cra, crb, o;
glucca = function () {
  var R = arguments.length <= 0 || arguments[0] === undefined ? Math.random : arguments[0];
  var v = arguments.length <= 1 || arguments[1] === undefined ? 'aeiou' : arguments[1];
  var c = arguments.length <= 2 || arguments[2] === undefined ? 'dhjkmnstvwxyz' + (cf = 'bgpcf') + (cs = 'lr') : arguments[2];
  var cp = arguments.length <= 3 || arguments[3] === undefined ? 'stslswshchthdrtwphtrwhghzh'[M = 'match'](T = /../g) : arguments[3];
  var cra = arguments.length <= 4 || arguments[4] === undefined ? 'ssttzzffllrrdd'[M](T) : arguments[4];
  var crb = arguments.length <= 5 || arguments[5] === undefined ? 'bbggccmmnnpp'[M](T) : arguments[5];
  var o = arguments.length <= 6 || arguments[6] === undefined ? [0 | R() * 5] : arguments[6];
  return (function () {
    return [].concat(Array(4)).map(function (x, y) {
      return y && o.push(o[y - 1] < 2 ? 0 | R() * 5 + 2 : 0 | R() + .5);
    }), o[o[l = 'length'] - 1] ^ 3 && o[o[l] - 1] ^ 4 && o[o[l] - 1] ^ 6 || o.push(0 | R() + .5), [o, o.map(function (x) {
      return x ? x ^ 1 ? x ^ 2 ? x ^ 3 ? x ^ 4 ? x ^ 5 ? crb[0 | R() * crb[l]] : cra[0 | R() * cra[l]] : cp[0 | R() * cp[l]] : cf[0 | R() * cf[l]] + cs[0 | R() * cs[l]] : c[0 | R() * c[l]] : v[0 | R() * v[l]] + v[0 | R() * v[l]] : v[0 | R() * v[l]];
    }).join(_templateObject).replace(/([aiu])\1/g, function (x, y) {
      return y + v.replace(y, '')[0 | R() * v[l] - 1];
    })];
  })();
};
