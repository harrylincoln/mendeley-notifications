'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (name) {
    switch (name) {
        case 'success':
            return _react2.default.createElement(
                'g',
                { id: 'Notifications', stroke: 'none', strokeWidth: '1', fill: '', fillRule: 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'notification/positive', transform: 'translate(-17.000000, -13.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: 'icon/action/tick/solid20', transform: 'translate(16.000000, 12.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'icon/solidcontainer', transform: 'translate(1.000000, 1.000000)' },
                            _react2.default.createElement(
                                'mask',
                                { id: 'mask-2', fill: 'white' },
                                _react2.default.createElement('use', { xlinkHref: '#path-1' })
                            ),
                            _react2.default.createElement('use', { id: 'Mask', fill: '#505050', fillRule: 'evenodd', xlinkHref: '#path-1' }),
                            _react2.default.createElement(
                                'g',
                                { id: 'colour/Aqua/aqua-10', mask: 'url(#mask-2)', fill: '#3DBA9F', fillRule: 'evenodd' },
                                _react2.default.createElement('rect', { id: 'Rectangle-10', x: '0', y: '0', width: '18', height: '18' })
                            )
                        ),
                        _react2.default.createElement(
                            'g',
                            { id: 'icon/10px/tick', transform: 'translate(5.000000, 5.000000)' },
                            _react2.default.createElement(
                                'mask',
                                { id: 'mask-4', fill: 'white' },
                                _react2.default.createElement('use', { xlinkHref: '#path-3' })
                            ),
                            _react2.default.createElement('use', { id: 'tick10', fill: '#000000', fillRule: 'nonzero', xlinkHref: '#path-3' }),
                            _react2.default.createElement(
                                'g',
                                { id: 'colour/neutral/white', mask: 'url(#mask-4)', fill: '#FFFFFF', fillRule: 'evenodd' },
                                _react2.default.createElement('rect', { id: 'Rectangle-10', x: '0', y: '0', width: '10', height: '10' })
                            )
                        )
                    )
                )
            );
        case 'info':
            return _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement('path', { d: 'M14 9.5c0-0.825 0.675-1.5 1.5-1.5h1c0.825 0 1.5 0.675 1.5 1.5v1c0 0.825-0.675 1.5-1.5 1.5h-1c-0.825 0-1.5-0.675-1.5-1.5v-1z' }),
                _react2.default.createElement('path', { d: 'M20 24h-8v-2h2v-6h-2v-2h6v8h2z' }),
                _react2.default.createElement('path', { d: 'M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z' })
            );
        case 'warning':
            return _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement('path', { d: 'M16 2.899l13.409 26.726h-26.819l13.409-26.726zM16 0c-0.69 0-1.379 0.465-1.903 1.395l-13.659 27.222c-1.046 1.86-0.156 3.383 1.978 3.383h27.166c2.134 0 3.025-1.522 1.978-3.383h0l-13.659-27.222c-0.523-0.93-1.213-1.395-1.903-1.395v0z' }),
                _react2.default.createElement('path', { d: 'M18 26c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z' }),
                _react2.default.createElement('path', { d: 'M16 22c-1.105 0-2-0.895-2-2v-6c0-1.105 0.895-2 2-2s2 0.895 2 2v6c0 1.105-0.895 2-2 2z' })
            );
        case 'error':
            return _react2.default.createElement(
                'g',
                { id: 'Notifications', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
                _react2.default.createElement(
                    'g',
                    { id: 'notification/error', transform: 'translate(-17.000000, -13.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: 'icon/warning-contained', transform: 'translate(16.000000, 12.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'icon/action/tick/solid20', transform: 'translate(10.000000, 10.000000) scale(1, -1) translate(-10.000000, -10.000000) ' },
                            _react2.default.createElement('rect', { id: 'Rectangle', x: '0', y: '0', width: '20', height: '20' }),
                            _react2.default.createElement(
                                'g',
                                { id: 'container', transform: 'translate(1.000000, 1.000000)' },
                                _react2.default.createElement(
                                    'mask',
                                    { id: 'mask-2', fill: 'white' },
                                    _react2.default.createElement('use', { xlinkHref: '#path-1' })
                                ),
                                _react2.default.createElement('use', { id: 'Mask', fill: '#D01928', xlinkHref: '#path-1' }),
                                _react2.default.createElement(
                                    'g',
                                    { id: 'colour/MLDYRed/Red-10', mask: 'url(#mask-2)', fill: '#D01928' },
                                    _react2.default.createElement(
                                        'g',
                                        { transform: 'translate(-1.000000, -1.000000)', id: 'Rectangle-10' },
                                        _react2.default.createElement('rect', { x: '0', y: '0', width: '20', height: '20' })
                                    )
                                )
                            ),
                            _react2.default.createElement('path', { d: 'M10,7.5 L10,13', id: 'Line', stroke: '#FFFFFF', strokeWidth: '1.8' }),
                            _react2.default.createElement('path', { d: 'M10,4 L10,6', id: 'Line', stroke: '#FFFFFF', strokeWidth: '1.8' })
                        )
                    )
                )
            );
        default:
            return null;
    }
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }