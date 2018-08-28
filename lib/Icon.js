'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icons = require('./icons');

var _icons2 = _interopRequireDefault(_icons);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Icon = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon(props) {
    _classCallCheck(this, Icon);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    (0, _utils._bind)(['returnDefs'], _this);
    return _this;
  }

  Icon.prototype.returnDefs = function returnDefs(props) {
    switch (props) {
      case 'success':
        return _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement('circle', { id: 'path-1', cx: '9', cy: '9', r: '9' }),
          _react2.default.createElement('polygon', { id: 'path-3', points: '3.92693696 5.84679653 7.60389222 2.16984127 8.73526307 3.30121212 3.92693696 8.10953823 0.831388033 5.0139893 1.96275888 3.88261845' })
        );
      case 'error':
        return _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement('path', { d: 'M9.9068995,16.9392145 C9.80877447,17.1354646 9.64964429,17.2945948 9.45339422,17.3927198 C8.95246611,17.6431838 8.34334241,17.4401426 8.09287836,16.9392145 L0.607058076,1.96757393 C0.536653604,1.82676499 0.5,1.67149783 0.5,1.51406865 C0.5,0.954013998 0.954013998,0.5 1.51406865,0.5 L16.4857092,0.5 C16.6431384,0.5 16.7984056,0.536653604 16.9392145,0.607058076 C17.4401426,0.857522129 17.6431838,1.46664583 17.3927198,1.96757393 L9.9068995,16.9392145 Z', id: 'path-1' })
        );
      default:
        return;
    }
  };

  Icon.prototype.render = function render() {
    var size = this.props.size;

    var styles = {
      width: size,
      height: size
    };
    return _react2.default.createElement(
      'svg',
      {
        className: (0, _classnames2.default)(this.props.className, 'toastr-icon'),
        xmlns: 'http://www.w3.org/2000/svg',
        preserveAspectRatio: 'xMidYMid meet',
        viewBox: '0 0 ' + this.props.size + ' ' + this.props.size,
        style: styles
      },
      this.returnDefs(this.props.name),
      (0, _icons2.default)(this.props.name)
    );
  };

  return Icon;
}(_react2.default.Component);

Icon.displayName = 'ReduxToastrIcon';
Icon.defaultProps = {
  size: 20
};
exports.default = Icon;