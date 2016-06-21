'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DeckFrame = require('./containers/DeckFrame');

var _DeckFrame2 = _interopRequireDefault(_DeckFrame);

var _InfoFrame = require('./containers/InfoFrame');

var _InfoFrame2 = _interopRequireDefault(_InfoFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_DeckFrame2.default, null),
    _react2.default.createElement(_InfoFrame2.default, null)
), document.getElementById('content'));