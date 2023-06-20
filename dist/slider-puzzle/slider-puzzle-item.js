function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["index", "touchTime", "touchDistance", "isHover", "children", "onClick"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useContext, useEffect, useMemo } from 'react';
import { withNativeProps } from "../utils/native-props";
import useMergeProps from "../hooks/use-merge-props";
import { SliderPuzzleCtx } from "./context";
import useTouchEvent from "../hooks/use-touch-event";
import { useSetState } from 'ahooks';
import { classPrefixItem } from "./config";
import { checkDirectionVal, checkDirectionXY, range } from "../utils/compute";
import { getRowColItem } from "./utils";
import { classBem } from "../utils/handleDom";
import React from 'react';
var defaultProps = {
  touchTime: 150,
  touchDistance: 8,
  isHover: true
};
var SliderPuzzleItem = function SliderPuzzleItem(comProps) {
  var props = useMergeProps(comProps, defaultProps);
  var index = props.index,
    touchTime = props.touchTime,
    touchDistance = props.touchDistance,
    isHover = props.isHover,
    children = props.children,
    _onClick = props.onClick,
    ret = _objectWithoutProperties(props, _excluded);
  var _useContext = useContext(SliderPuzzleCtx),
    size = _useContext.size,
    gap = _useContext.gap,
    gridArr = _useContext.gridArr,
    grid = _useContext.grid,
    initSpaceIndex = _useContext.initSpaceIndex,
    isReset = _useContext.isReset,
    onChangeGrid = _useContext.onChangeGrid;
  var _useSetState = useSetState({
      startX: 0,
      startY: 0,
      x: 0,
      y: 0,
      duration: 0,
      /** 当前处于的行列数 */
      rowNum: 0,
      colNum: 0
    }),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    info = _useSetState2[0],
    setInfo = _useSetState2[1];
  useEffect(function () {
    var _getRowColItem = getRowColItem(index, initSpaceIndex, size),
      rowNum = _getRowColItem.rowNum,
      colNum = _getRowColItem.colNum;
    setInfo({
      rowNum: rowNum,
      colNum: colNum,
      x: 0,
      y: 0
    });
  }, [index, initSpaceIndex, size, isReset]);

  /** 当拼图间隙改变后，需要调整当前的位移值 */
  useEffect(function () {
    if (!info.x && !info.y) {
      return;
    }
    var _getRowColItem2 = getRowColItem(index, initSpaceIndex, size),
      rowNum = _getRowColItem2.rowNum,
      colNum = _getRowColItem2.colNum;
    var x = (info.colNum - colNum) * (gap + grid.w);
    var y = (info.rowNum - rowNum) * (gap + grid.h);
    setInfo({
      x: x,
      y: y,
      duration: 0
    });
  }, [gap, grid]);

  /** 当前可移动的方向 */
  var moveDirection = useMemo(function () {
    return checkDirectionVal(gridArr, info.rowNum, info.colNum);
  }, [gridArr, info.rowNum, info.colNum]);
  var _useTouchEvent = useTouchEvent({
      onTouchStart: function onTouchStart() {
        setInfo({
          startX: info.x,
          startY: info.y,
          duration: 0
        });
      },
      onTouchMove: function onTouchMove() {
        var _checkDirectionXY = checkDirectionXY(_info.deltaX, _info.deltaY),
          directionX = _checkDirectionXY.directionX,
          directionY = _checkDirectionXY.directionY;
        if (directionX === moveDirection) {
          setInfo({
            x: range(_info.deltaX, -grid.w - gap, grid.w + gap) + info.startX
          });
        }
        if (directionY === moveDirection) {
          setInfo({
            y: range(_info.deltaY, -grid.h - gap, grid.h + gap) + info.startY
          });
        }
      },
      onTouchEnd: function onTouchEnd(e) {
        var isVertical = false;
        var diff = info.x - info.startX;
        if (!diff) {
          diff = info.y - info.startY;
          isVertical = true;
        }
        // 检测当前方向上的移动
        if (!diff) return;
        var xy = diff > 0 ? 1 : -1;
        var x = info.startX;
        var y = info.startY;
        var direction = 0;
        var rowNum = info.rowNum,
          colNum = info.colNum;
        // 发生改变
        if (Math.abs(diff) >= (isVertical ? grid.h : grid.w) / 2) {
          if (isVertical) {
            y += (grid.h + gap) * xy;
            direction = diff > 0 ? 4 : 2;
          } else {
            x += (grid.w + gap) * xy;
            direction = diff > 0 ? 3 : 1;
          }
          switch (direction) {
            case 1:
              colNum--;
              break;
            case 2:
              rowNum--;
              break;
            case 3:
              colNum++;
              break;
            case 4:
              rowNum++;
              break;
          }
          onChangeGrid({
            row: rowNum,
            col: colNum
          }, {
            row: info.rowNum,
            col: info.colNum
          });
        }
        setInfo({
          x: x,
          y: y,
          duration: 0.4,
          rowNum: rowNum,
          colNum: colNum
        });
      },
      isDisable: {
        all: !moveDirection
      },
      isStopPropagation: true
    }),
    _info = _useTouchEvent.info,
    onTouchFn = _useTouchEvent.onTouchFn;
  var cardPosition = useMemo(function () {
    var _getRowColItem3 = getRowColItem(index, initSpaceIndex, size),
      rowNum = _getRowColItem3.rowNum,
      colNum = _getRowColItem3.colNum;
    var handlegap = function handlegap(v) {
      return 0 < v && v < size ? v * gap : 0;
    };
    return {
      top: "".concat(grid.w * rowNum + handlegap(rowNum), "px"),
      left: "".concat(grid.h * colNum + handlegap(colNum), "px")
    };
  }, [index, initSpaceIndex, grid, size, gap]);
  return withNativeProps(ret, /*#__PURE__*/React.createElement("div", _extends({
    className: "".concat(classBem(classPrefixItem, {
      hover: isHover
    })),
    style: _objectSpread(_objectSpread({}, cardPosition), {}, {
      width: grid.w + 'px',
      height: grid.h + 'px',
      transitionDuration: info.duration + 's',
      transform: "translate(".concat(info.x, "px, ").concat(info.y, "px)")
    })
  }, onTouchFn, {
    onClick: function onClick() {
      if (_info.time < touchTime && Math.abs(_info.deltaY) < touchDistance && Math.abs(_info.deltaX) < touchDistance) {
        _onClick === null || _onClick === void 0 ? void 0 : _onClick(index);
      }
    }
  }), children));
};
export default SliderPuzzleItem;