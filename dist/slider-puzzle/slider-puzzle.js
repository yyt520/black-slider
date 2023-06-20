function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["listLength", "isGameMode", "background", "size", "gap", "fillPuzzleItemBackground", "children", "onComplete", "onResize"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useEffect, useRef, forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { withNativeProps } from "../utils/native-props";
import useMergeProps from "../hooks/use-merge-props";
import { SliderPuzzleCtx } from "./context";
import { randomLetter, randomStr } from "../utils/random";
import { useDebounceFn, useSetState } from 'ahooks';
import { createTwoArray } from "../utils/compute";
import { classPrefix } from "./config";
import { isPuzzleSolved, randomNumberArray } from "./utils";
import SliderPuzzleItem from "./slider-puzzle-item";
import SliderPuzzleCanvas from "./slider-puzzle-canvas";
import { isMobile } from "../utils/handleDom";
import React from 'react';
var defaultProps = {
  size: 3,
  listLength: 0,
  gap: 2,
  fillPuzzleItemBackground: '#3e3e3e'
};
var SliderPuzzle = /*#__PURE__*/forwardRef(function (comProps, ref) {
  var props = useMergeProps(comProps, defaultProps);
  var listLength = props.listLength,
    isGameMode = props.isGameMode,
    background = props.background,
    size = props.size,
    gap = props.gap,
    fillPuzzleItemBackground = props.fillPuzzleItemBackground,
    children = props.children,
    onComplete = props.onComplete,
    onResize = props.onResize,
    ret = _objectWithoutProperties(props, _excluded);
  var idRef = useRef(randomStr(classPrefix));
  var letter = useRef(randomLetter());
  var _useSetState = useSetState({
      initSpaceIndex: 0,
      grid: {
        w: 100,
        h: 100
      }
    }),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    ctxstate = _useSetState2[0],
    setCtxState = _useSetState2[1];
  /** 当前的格子的二维数组信息 */
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    gridArr = _useState2[0],
    setGridArr = _useState2[1];
  /** 拼图块的位置随机数组 */
  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    puzzleGridArr = _useState4[0],
    setPuzzleGridArr = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isReset = _useState6[0],
    setIsReset = _useState6[1];
  var _useDebounceFn = useDebounceFn(function () {
      var _cardWrap$clientWidth, _cardWrap$clientHeigh;
      var cardWrap = document.querySelector(".".concat(idRef.current, " .").concat(classPrefix, "-area"));
      var w = (((_cardWrap$clientWidth = cardWrap === null || cardWrap === void 0 ? void 0 : cardWrap.clientWidth) !== null && _cardWrap$clientWidth !== void 0 ? _cardWrap$clientWidth : 0) - (size - 1) * gap) / size;
      var h = (((_cardWrap$clientHeigh = cardWrap === null || cardWrap === void 0 ? void 0 : cardWrap.clientHeight) !== null && _cardWrap$clientHeigh !== void 0 ? _cardWrap$clientHeigh : 0) - (size - 1) * gap) / size;
      setCtxState({
        grid: {
          w: w,
          h: h
        }
      });
      if (w !== ctxstate.grid.w || h !== ctxstate.grid.h) {
        onResize === null || onResize === void 0 ? void 0 : onResize({
          w: w,
          h: h
        });
      }
    }, {
      wait: 100
    }),
    getCardInfo = _useDebounceFn.run;
  var init = function init() {
    getCardInfo();
    initPuzzle();
  };
  useEffect(function () {
    init();
    if (!isMobile) window.addEventListener('resize', getCardInfo);
    return function () {
      if (!isMobile) window.removeEventListener('resize', getCardInfo);
    };
  }, [listLength, size, gap]);

  /** 初始化拼图 */
  var initPuzzle = function initPuzzle() {
    var total = size * size;
    var randomArr = randomNumberArray(size);
    var initSpaceIndex = randomArr.findIndex(function (v) {
      return v === total;
    });
    var nullRow = Math.floor(initSpaceIndex / size),
      nullCol = initSpaceIndex % size;
    setPuzzleGridArr(randomArr);
    setGridArr(createTwoArray(size, size, function (rowNum, colNum) {
      return rowNum === nullRow && nullCol === colNum ? 0 : randomArr[Math.floor(rowNum * size + colNum)];
    }));
    setCtxState({
      initSpaceIndex: initSpaceIndex
    });
  };
  var onChangeGrid = function onChangeGrid(p, pPre) {
    var _ref = [gridArr[pPre.row][pPre.col], gridArr[p.row][p.col]];
    gridArr[p.row][p.col] = _ref[0];
    gridArr[pPre.row][pPre.col] = _ref[1];
    if (isPuzzleSolved(gridArr)) {
      onComplete === null || onComplete === void 0 ? void 0 : onComplete();
    }
    setGridArr(_toConsumableArray(gridArr));
  };
  var reset = function reset() {
    initPuzzle();
    letter.current = randomLetter();
    setIsReset(function (v) {
      return !v;
    });
  };
  var wrapStyle = useMemo(function () {
    return {
      padding: gap + 'px',
      background: background
    };
  }, [gap, background]);
  useImperativeHandle(ref, function () {
    return {
      reset: reset
    };
  });
  var renderChildren = function renderChildren() {
    var fillNum = size * size - listLength - 1;
    if (!fillNum) return children;
    var fillArr = [];
    for (var i = listLength; i < size * size - 1; i++) {
      fillArr.push( /*#__PURE__*/React.createElement(SliderPuzzleItem, {
        key: i,
        index: i,
        style: {
          width: ctxstate.grid.w + 'px',
          height: ctxstate.grid.h + 'px',
          background: fillPuzzleItemBackground
        }
      }, /*#__PURE__*/React.createElement(SliderPuzzleCanvas, {
        index: i
      })));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, children, fillArr);
  };
  return /*#__PURE__*/React.createElement(SliderPuzzleCtx.Provider, {
    value: _objectSpread(_objectSpread(_objectSpread({}, ctxstate), {}, {
      size: size,
      gridArr: gridArr,
      puzzleGridArr: puzzleGridArr,
      letter: letter.current,
      isReset: isReset,
      gap: gap,
      isGameMode: isGameMode
    }, ret), {}, {
      onChangeGrid: onChangeGrid
    })
  }, withNativeProps(ret, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classPrefix, " ").concat(idRef.current),
    style: wrapStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classPrefix, "-area")
  }, renderChildren()))));
});
export default SliderPuzzle;