'use strict';

exports.__esModule = true;
exports['default'] = reactorator;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _objectAssign = require('object.assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var slice = Array.prototype.slice;
var __DEV__ = process.env.NODE_ENV !== 'production';
var REACT_PROTECTED = ['mixins', 'statics', 'propTypes', 'contextTypes', 'childContextTypes', 'getDefaultProps', 'getInitialState', 'getChildContext', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount', 'updateComponent'];

function reactorator(mixins) {
  mixins = slice.call(arguments);
  mixins.forEach(function (mixin) {
    Object.keys(mixin).forEach(function (prop) {
      if (__DEV__) {
        (0, _warning2['default'])(REACT_PROTECTED.indexOf(prop) === -1, 'reactorator should get mixins that do not feature react ' + 'lifecycle hooks but found %s', prop);
      }
    });
  });
  return function reactorate(Component) {
    mixins.forEach(function (mixin) {
      (0, _objectAssign2['default'])(Component.prototype, mixin);
    });
    return Component;
  };
}

module.exports = exports['default'];
