var _excluded = ["index", "globalAlpha", "puzzleColor", "gameModeBackground", "puzzleImg"],
  _excluded2 = ["puzzleGridArr", "isGameMode", "letter", "initSpaceIndex", "size", "grid", "isReset"];
var _window$devicePixelRa;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useContext, useEffect, useRef } from "react";
import { classPrefixPuzzleCanvas } from "./config";
import { useSetState } from "ahooks";
import { SliderPuzzleCtx } from "./context";
import useMergeProps from "../hooks/use-merge-props";
import { withNativeProps } from "../utils/native-props";
import { classBem } from "../utils/handleDom";
import React from "react";
var ratio = (_window$devicePixelRa = window.devicePixelRatio) !== null && _window$devicePixelRa !== void 0 ? _window$devicePixelRa : 1;
var defaultProps = {
  globalAlpha: 0.5,
  puzzleColor: '#ddeafb',
  gameModeBackground: '#3e3e3e'
};
export default (function (comProps) {
  var _context$globalAlpha, _context$puzzleColor, _context$gameModeBack, _context$puzzleImg;
  var props = useMergeProps(comProps, defaultProps);
  var index = props.index,
    _globalAlpha = props.globalAlpha,
    _puzzleColor = props.puzzleColor,
    _gameModeBackground = props.gameModeBackground,
    _puzzleImg = props.puzzleImg,
    ret = _objectWithoutProperties(props, _excluded);
  var _useContext = useContext(SliderPuzzleCtx),
    puzzleGridArr = _useContext.puzzleGridArr,
    isGameMode = _useContext.isGameMode,
    letter = _useContext.letter,
    initSpaceIndex = _useContext.initSpaceIndex,
    size = _useContext.size,
    grid = _useContext.grid,
    isReset = _useContext.isReset,
    context = _objectWithoutProperties(_useContext, _excluded2);
  var globalAlpha = (_context$globalAlpha = context.globalAlpha) !== null && _context$globalAlpha !== void 0 ? _context$globalAlpha : _globalAlpha;
  var puzzleColor = (_context$puzzleColor = context.puzzleColor) !== null && _context$puzzleColor !== void 0 ? _context$puzzleColor : _puzzleColor;
  var gameModeBackground = (_context$gameModeBack = context.gameModeBackground) !== null && _context$gameModeBack !== void 0 ? _context$gameModeBack : _gameModeBackground;
  var puzzleImg = (_context$puzzleImg = context.puzzleImg) !== null && _context$puzzleImg !== void 0 ? _context$puzzleImg : _puzzleImg;
  var canvasRef = useRef(null);
  var _useSetState = useSetState({
      ctx: null
    }),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    canvasInfo = _useSetState2[0],
    setCanvasInfo = _useSetState2[1];
  useEffect(function () {
    var _canvasRef$current;
    var ctx = (_canvasRef$current = canvasRef.current) === null || _canvasRef$current === void 0 ? void 0 : _canvasRef$current.getContext('2d');
    setCanvasInfo({
      ctx: ctx
    });
  }, []);
  useEffect(function () {
    startDraw();
  }, [canvasInfo, isReset, grid, puzzleGridArr, isGameMode, globalAlpha, puzzleColor, gameModeBackground, puzzleImg]);
  function startDraw() {
    var ctx = canvasInfo.ctx;
    if (!ctx || !(puzzleGridArr !== null && puzzleGridArr !== void 0 && puzzleGridArr.length)) return;
    var cw = grid.w * ratio,
      ch = grid.h * ratio;
    ctx.clearRect(0, 0, cw, ch);
    if (isGameMode) {
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.fillStyle = gameModeBackground;
      ctx.fillRect(0, 0, cw, ch);
      ctx.restore();
    }
    if (puzzleImg) {
      // 画图片
      drawPuzzleImg();
      return;
    }
    var w = cw * size,
      h = ch * size;
    var lineW = w / 20;
    var fontSize = Math.min(w, h) / 1.3;
    var strokeRect, text;
    if (index !== void 0) {
      // 拼图块
      var _index = puzzleGridArr[index + (index >= initSpaceIndex ? 1 : 0)] - 1;
      var rowNum = Math.floor(_index / size),
        colNum = _index % size;
      var startX = cw * colNum,
        startY = ch * rowNum;
      strokeRect = {
        x: lineW * 3 / 2 - startX,
        y: lineW * 3 / 2 - startY,
        w: w - 3 * lineW,
        h: h - 3 * lineW
      };
      text = {
        x: w / 2 - startX,
        y: h / 2 - startY
      };
    } else {
      // 拼图全貌
      lineW /= size;
      fontSize /= size;
      strokeRect = {
        x: lineW * 3 / 2,
        y: lineW * 3 / 2,
        w: cw - 3 * lineW,
        h: ch - 3 * lineW
      };
      text = {
        x: cw / 2,
        y: ch / 2
      };
    }
    ctx.globalAlpha = globalAlpha;
    ctx.lineWidth = lineW;
    ctx.strokeStyle = puzzleColor;
    ctx.strokeRect(strokeRect.x, strokeRect.y, strokeRect.w, strokeRect.h);
    ctx.fillStyle = puzzleColor;
    ctx.font = "".concat(fontSize, "px \u5B8B\u4F53");
    ctx.textAlign = 'center';
    ctx.textBaseline = "middle";
    ctx.fillText(letter, text.x, text.y);
  }
  function drawPuzzleImg() {
    var ctx = canvasInfo.ctx;
    if (!ctx || !(puzzleGridArr !== null && puzzleGridArr !== void 0 && puzzleGridArr.length)) return;
    var cw = grid.w * ratio,
      ch = grid.h * ratio;
    var w = cw * size,
      h = ch * size;
    var image = {
      x: 0,
      y: 0,
      w: cw,
      h: ch
    };
    if (index !== void 0) {
      // 拼图块
      var _index = puzzleGridArr[index + (index >= initSpaceIndex ? 1 : 0)] - 1;
      var rowNum = Math.floor(_index / size),
        colNum = _index % size;
      var startX = cw * colNum,
        startY = ch * rowNum;
      image.x = -startX;
      image.y = -startY;
      image.w = w;
      image.h = h;
    }
    var imgDom = new Image();
    imgDom.src = puzzleImg;
    imgDom.onload = function () {
      ctx.globalAlpha = globalAlpha;
      ctx.drawImage(imgDom, image.x, image.y, image.w, image.h);
    };
  }
  return withNativeProps(ret, /*#__PURE__*/React.createElement("div", {
    className: classBem(classPrefixPuzzleCanvas, {
      full: index === void 0
    })
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    width: grid.w * ratio,
    height: grid.h * ratio,
    style: {
      display: 'block',
      width: grid.w + 'px',
      height: grid.h + 'px'
    },
    onContextMenu: function onContextMenu(e) {
      e.preventDefault();
    }
  })));
});