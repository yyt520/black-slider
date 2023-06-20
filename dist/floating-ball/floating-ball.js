var _excluded = ["axis", "magnetic"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState, useEffect, useRef } from 'react';
import { randomStr } from "../utils/random";
import useTouchEvent from "../hooks/use-touch-event";
var classPrefix = "blackui-floating-ball";
var screenW = window.innerWidth,
  screenH = window.innerHeight;
var FloatingBall = function FloatingBall(_ref) {
  var _ref$axis = _ref.axis,
    axis = _ref$axis === void 0 ? 'xy' : _ref$axis,
    magnetic = _ref.magnetic,
    props = _objectWithoutProperties(_ref, _excluded);
  var idRef = useRef(randomStr(classPrefix));
  /** 悬浮球的宽，高，上下左右距离 */
  var ball = useRef({
    w: 0,
    h: 0,
    r: 0,
    l: 0,
    t: 0,
    b: 0
  });
  var touchRef = useRef({
    startX: 0,
    startY: 0
  });
  var _useState = useState({
      x: 0,
      y: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    info = _useState2[0],
    setInfo = _useState2[1];
  var buttonRef = useRef(null);
  var duration = useRef(0.1);
  var _useTouchEvent = useTouchEvent({
      onTouchStart: function onTouchStart() {
        touchRef.current.startX = info.x;
        touchRef.current.startY = info.y;
        duration.current = 0.1;
      },
      onTouchMove: function onTouchMove() {
        var _props$onOffsetChange;
        var x = axis === 'y' ? 0 : _info.deltaX + touchRef.current.startX;
        var y = axis === 'x' ? 0 : _info.deltaY + touchRef.current.startY;
        setInfo({
          x: x,
          y: y
        });
        (_props$onOffsetChange = props.onOffsetChange) === null || _props$onOffsetChange === void 0 ? void 0 : _props$onOffsetChange.call(props, {
          x: x,
          y: y
        });
      },
      onTouchEnd: function onTouchEnd() {
        var x = axis === 'y' ? 0 : _info.deltaX + touchRef.current.startX;
        var y = axis === 'x' ? 0 : _info.deltaY + touchRef.current.startY;
        var _ball$current = ball.current,
          w = _ball$current.w,
          h = _ball$current.h,
          l = _ball$current.l,
          r = _ball$current.r,
          t = _ball$current.t,
          b = _ball$current.b;
        if (magnetic === 'x') {
          var _props$onMagnetic;
          var l_r = l < r ? l : r;
          var _v = l < r ? -1 : 1;
          var middleX = screenW / 2 - l_r - w / 2; // 中间分隔线的值
          var distance = -1 * _v * (screenW - w - l_r * 2); // 另一边的位置
          x = Math.abs(x) > middleX ? x * _v < 0 ? distance : 0 : 0;
          (_props$onMagnetic = props.onMagnetic) === null || _props$onMagnetic === void 0 ? void 0 : _props$onMagnetic.call(props, x === 0 ? l < r : l > r);
        } else if (magnetic === 'y') {
          var _props$onMagnetic2;
          var _l_r = t < b ? t : b;
          var _v2 = t < b ? -1 : 1;
          var _middleX = screenH / 2 - _l_r - h / 2; // 中间分隔线的值
          var _distance = -1 * _v2 * (screenH - h - _l_r * 2); // 另一边的位置
          y = Math.abs(y) > _middleX ? y * _v2 < 0 ? _distance : 0 : 0;
          (_props$onMagnetic2 = props.onMagnetic) === null || _props$onMagnetic2 === void 0 ? void 0 : _props$onMagnetic2.call(props, y === 0 ? t < b : t > b);
        }
        duration.current = 0.3;
        setInfo({
          x: x,
          y: y
        });
      }
    }),
    _info = _useTouchEvent.info,
    onTouchFn = _useTouchEvent.onTouchFn;
  useEffect(function () {
    var init = function init() {
      var ballDom = document.querySelector(".".concat(idRef.current, " .").concat(classPrefix, "-button"));
      if (!ballDom) return;
      var ballInfo = ballDom.getBoundingClientRect();
      ball.current.w = ballInfo.width;
      ball.current.h = ballInfo.height;
      ball.current.l = ballInfo.left;
      ball.current.r = window.innerWidth - ballInfo.right;
      ball.current.t = ballInfo.top;
      ball.current.b = window.innerHeight - ballInfo.bottom;
    };
    setTimeout(function () {
      init();
    }, 10);
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "".concat(classPrefix, " ").concat(idRef.current)
  }, props), /*#__PURE__*/React.createElement("div", _extends({
    ref: buttonRef,
    className: "".concat(classPrefix, "-button"),
    style: {
      transitionDuration: duration.current + 's',
      transform: "translate(".concat(info.x, "px, ").concat(info.y, "px)")
    }
  }, onTouchFn), props.children));
};
export default FloatingBall;