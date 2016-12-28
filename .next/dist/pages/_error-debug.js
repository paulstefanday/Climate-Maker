'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/paulday/Sites/climate-maker/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/paulday/Sites/climate-maker/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/paulday/Sites/climate-maker/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/paulday/Sites/climate-maker/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/paulday/Sites/climate-maker/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('/Users/paulday/Sites/climate-maker/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/paulday/Sites/climate-maker/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _ansiHtml = require('/Users/paulday/Sites/climate-maker/node_modules/ansi-html/index.js');

var _ansiHtml2 = _interopRequireDefault(_ansiHtml);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ErrorDebug = function (_React$Component) {
  (0, _inherits3.default)(ErrorDebug, _React$Component);

  function ErrorDebug() {
    (0, _classCallCheck3.default)(this, ErrorDebug);
    return (0, _possibleConstructorReturn3.default)(this, (ErrorDebug.__proto__ || (0, _getPrototypeOf2.default)(ErrorDebug)).apply(this, arguments));
  }

  (0, _createClass3.default)(ErrorDebug, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          message = _props.message,
          stack = _props.stack,
          path = _props.path;

      return _react2.default.createElement('div', { className: 'errorDebug', 'data-jsx': 2088333461
      }, path ? _react2.default.createElement('div', { className: 'heading', 'data-jsx': 2088333461
      }, 'Error in ', path) : null, name === 'ModuleBuildError' ? _react2.default.createElement('pre', { className: 'message', dangerouslySetInnerHTML: { __html: (0, _ansiHtml2.default)(encodeHtml(message)) }, 'data-jsx': 2088333461
      }) : _react2.default.createElement('pre', { className: 'message', 'data-jsx': 2088333461
      }, stack), _react2.default.createElement(_style2.default, {
        styleId: 1579730202,
        css: '\n        body {\n          background: #a6004c;\n          margin: 0;\n        }\n      '
      }), _react2.default.createElement(_style2.default, {
        styleId: 4238348042,
        css: '.errorDebug[data-jsx="2088333461"] {height: 100vh;padding: 16px;box-sizing: border-box;display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;align-items: center;justify-content: center;}.message[data-jsx="2088333461"] {font-family: "SF Mono", "Roboto Mono", "Fira Mono", menlo-regular, monospace;font-size: 10px;color: #fbe7f1;margin: 0;white-space: pre-wrap;word-wrap: break-word;}.heading[data-jsx="2088333461"] {font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;font-size: 13px;font-weight: bold;color: #ff84bf;margin-bottom: 20pxl        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLWRlYnVnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFDRyxvQ0FDRyxjQUNBLGNBQ1MsdUJBQ1QsbUNBQ1Msa0ZBQ0gsb0JBQ0ksd0JBQ3pCLENBRVMsaUNBQ3FFLDZFQUM3RCxnQkFDRCxlQUNMLFVBQ1ksc0JBQ0Esc0JBQ3ZCLENBRVMsaUNBQytILHVJQUN2SCxnQkFDRSxrQkFDSCxlQUVoQiIsImZpbGUiOiJub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci1kZWJ1Zy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGF1bGRheS9TaXRlcy9jbGltYXRlLW1ha2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFuc2lIVE1MIGZyb20gJ2Fuc2ktaHRtbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JEZWJ1ZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgZXJyIH0pIHtcbiAgICBjb25zdCB7IG5hbWUsIG1lc3NhZ2UsIHN0YWNrLCBtb2R1bGUgfSA9IGVyclxuICAgIHJldHVybiB7IG5hbWUsIG1lc3NhZ2UsIHN0YWNrLCBwYXRoOiBtb2R1bGUgPyBtb2R1bGUucmF3UmVxdWVzdCA6IG51bGwgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IG5hbWUsIG1lc3NhZ2UsIHN0YWNrLCBwYXRoIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Vycm9yRGVidWcnPlxuICAgICAge3BhdGggPyA8ZGl2IGNsYXNzTmFtZT0naGVhZGluZyc+RXJyb3IgaW4ge3BhdGh9PC9kaXY+IDogbnVsbH1cbiAgICAgIHtcbiAgICAgICAgbmFtZSA9PT0gJ01vZHVsZUJ1aWxkRXJyb3InXG4gICAgICAgID8gPHByZSBjbGFzc05hbWU9J21lc3NhZ2UnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYW5zaUhUTUwoZW5jb2RlSHRtbChtZXNzYWdlKSkgfX0gLz5cbiAgICAgICAgOiA8cHJlIGNsYXNzTmFtZT0nbWVzc2FnZSc+e3N0YWNrfTwvcHJlPlxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2E2MDA0YztcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmVycm9yRGVidWcge1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGIE1vbm9cIiwgXCJSb2JvdG8gTW9ub1wiLCBcIkZpcmEgTW9ub1wiLCBtZW5sby1yZWd1bGFyLCBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmJlN2YxO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRpbmcge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiAjZmY4NGJmO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHhsXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5jb25zdCBlbmNvZGVIdG1sID0gc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpXG59XG5cbi8vIHNlZSBjb2xvciBkZWZpbml0aW9ucyBvZiBiYWJlbC1jb2RlLWZyYW1lOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2JhYmVsLWNvZGUtZnJhbWUvc3JjL2luZGV4LmpzXG5cbmFuc2lIVE1MLnNldENvbG9ycyh7XG4gIHJlc2V0OiBbJ2ZmZicsICdhNjAwNGMnXSxcbiAgZGFya2dyZXk6ICdlNTQ1OTAnLFxuICB5ZWxsb3c6ICdlZThjYmInLFxuICBncmVlbjogJ2YyYTJjNycsXG4gIG1hZ2VudGE6ICdmYmU3ZjEnLFxuICBibHVlOiAnZmZmJyxcbiAgY3lhbjogJ2VmOGJiOScsXG4gIHJlZDogJ2ZmZidcbn0pXG4iXX0= */\n/*@ sourceURL=node_modules/next/dist/pages/_error-debug.js */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var err = _ref.err;
      var name = err.name,
          message = err.message,
          stack = err.stack,
          module = err.module;

      return { name: name, message: message, stack: stack, path: module ? module.rawRequest : null };
    }
  }]);
  return ErrorDebug;
}(_react2.default.Component);

exports.default = ErrorDebug;

var encodeHtml = function encodeHtml(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

// see color definitions of babel-code-frame:
// https://github.com/babel/babel/blob/master/packages/babel-code-frame/src/index.js

_ansiHtml2.default.setColors({
  reset: ['fff', 'a6004c'],
  darkgrey: 'e54590',
  yellow: 'ee8cbb',
  green: 'f2a2c7',
  magenta: 'fbe7f1',
  blue: 'fff',
  cyan: 'ef8bb9',
  red: 'fff'
});