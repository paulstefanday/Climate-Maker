module.exports =
webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(113);
	module.exports = __webpack_require__(424);


/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(58);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(35);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(36);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(60);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(59);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	exports.isLocal = isLocal;
	
	var _react = __webpack_require__(13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _router = __webpack_require__(114);
	
	var _router2 = _interopRequireDefault(_router);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Link = function (_Component) {
	  (0, _inherits3.default)(Link, _Component);
	
	  function Link(props) {
	    (0, _classCallCheck3.default)(this, Link);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call(this, props));
	
	    _this.linkClicked = _this.linkClicked.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(Link, [{
	    key: 'linkClicked',
	    value: function linkClicked(e) {
	      var _this2 = this;
	
	      if (e.target.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
	        // ignore click for new tab / new window behavior
	        return;
	      }
	
	      var _props = this.props,
	          href = _props.href,
	          scroll = _props.scroll,
	          as = _props.as;
	
	
	      if (!isLocal(href)) {
	        // ignore click if it's outside our scope
	        return;
	      }
	
	      e.preventDefault();
	
	      var route = as ? href : null;
	      var url = as || href;
	
	      // straight up redirect
	      _router2.default.push(route, url).then(function (success) {
	        if (!success) return;
	        if (scroll !== false) window.scrollTo(0, 0);
	      }).catch(function (err) {
	        if (_this2.props.onError) _this2.props.onError(err);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var children = _react.Children.map(this.props.children, function (child) {
	        var props = {
	          onClick: _this3.linkClicked
	        };
	
	        var isAnchor = child && child.type === 'a';
	
	        // if child does not specify a href, specify it
	        // so that repetition is not needed by the user
	        if (!isAnchor || !('href' in child.props)) {
	          props.href = _this3.props.as || _this3.props.href;
	        }
	
	        if (isAnchor) {
	          return _react2.default.cloneElement(child, props);
	        } else {
	          return _react2.default.createElement(
	            'a',
	            props,
	            child
	          );
	        }
	      });
	
	      return children[0];
	    }
	  }]);
	  return Link;
	}(_react.Component);
	
	exports.default = Link;
	function isLocal(href) {
	  var origin = window.location.origin;
	  return !/^https?:\/\//.test(href) || origin === href.substr(0, origin.length);
	}

/***/ },

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _link = __webpack_require__(420);
	
	var _link2 = _interopRequireDefault(_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  return _react2.default.createElement(
	    'h1',
	    null,
	    'Welcome'
	  );
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURhO0FBQUEsQyIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGF1bGRheS9TaXRlcy9jbGltYXRlLW1ha2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxoMT5XZWxjb21lPC9oMT5cbilcbiJdfQ==

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/paulday/Sites/climate-maker/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/paulday/Sites/climate-maker/pages/index.js"); } } })();
	    (function (Component, route) {
	      if (false) return
	      if (false) return

	      var qs = __webpack_require__(41)
	      var params = qs.parse(__resourceQuery.slice(1))
	      if (params.entry == null) return

	      module.hot.accept()
	      Component.__route = route

	      if (module.hot.status() === 'idle') return

	      var components = next.router.components
	      for (var r in components) {
	        if (!components.hasOwnProperty(r)) continue

	        if (components[r].Component.__route === route) {
	          next.router.update(r, Component)
	        }
	      }
	    })(module.exports.default || module.exports, "/")
	  
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), "?entry"))

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L25leHQvZGlzdC9saWIvbGluay5qcz82MjViM2U3Iiwid2VicGFjazovLy8uL3BhZ2VzPzYyNWIzZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7OztBQzNIQTs7OztBQUNBOzs7Ozs7bUJBRWU7QUFBQSxVQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEYTtBQUFBLEUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbmV4cG9ydHMuaXNMb2NhbCA9IGlzTG9jYWw7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcicpO1xuXG52YXIgX3JvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTGluayA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKExpbmssIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBMaW5rKTtcblxuICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKExpbmsuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKExpbmspKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5saW5rQ2xpY2tlZCA9IF90aGlzLmxpbmtDbGlja2VkLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKExpbmssIFt7XG4gICAga2V5OiAnbGlua0NsaWNrZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaW5rQ2xpY2tlZChlKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09PSAnQScgJiYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkgfHwgZS5zaGlmdEtleSB8fCBlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBocmVmID0gX3Byb3BzLmhyZWYsXG4gICAgICAgICAgc2Nyb2xsID0gX3Byb3BzLnNjcm9sbCxcbiAgICAgICAgICBhcyA9IF9wcm9wcy5hcztcblxuXG4gICAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGVcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHZhciByb3V0ZSA9IGFzID8gaHJlZiA6IG51bGw7XG4gICAgICB2YXIgdXJsID0gYXMgfHwgaHJlZjtcblxuICAgICAgLy8gc3RyYWlnaHQgdXAgcmVkaXJlY3RcbiAgICAgIF9yb3V0ZXIyLmRlZmF1bHQucHVzaChyb3V0ZSwgdXJsKS50aGVuKGZ1bmN0aW9uIChzdWNjZXNzKSB7XG4gICAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuO1xuICAgICAgICBpZiAoc2Nyb2xsICE9PSBmYWxzZSkgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoX3RoaXMyLnByb3BzLm9uRXJyb3IpIF90aGlzMi5wcm9wcy5vbkVycm9yKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGNoaWxkcmVuID0gX3JlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICAgIG9uQ2xpY2s6IF90aGlzMy5saW5rQ2xpY2tlZFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBpc0FuY2hvciA9IGNoaWxkICYmIGNoaWxkLnR5cGUgPT09ICdhJztcblxuICAgICAgICAvLyBpZiBjaGlsZCBkb2VzIG5vdCBzcGVjaWZ5IGEgaHJlZiwgc3BlY2lmeSBpdFxuICAgICAgICAvLyBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgICAgICBpZiAoIWlzQW5jaG9yIHx8ICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICAgIHByb3BzLmhyZWYgPSBfdGhpczMucHJvcHMuYXMgfHwgX3RoaXMzLnByb3BzLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBbmNob3IpIHtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNoaWxkcmVuWzBdO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTGluaztcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExpbms7XG5mdW5jdGlvbiBpc0xvY2FsKGhyZWYpIHtcbiAgdmFyIG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gIHJldHVybiAhL15odHRwcz86XFwvXFwvLy50ZXN0KGhyZWYpIHx8IG9yaWdpbiA9PT0gaHJlZi5zdWJzdHIoMCwgb3JpZ2luLmxlbmd0aCk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25leHQvZGlzdC9saWIvbGluay5qc1xuLy8gbW9kdWxlIGlkID0gNDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8aDE+V2VsY29tZTwvaDE+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=