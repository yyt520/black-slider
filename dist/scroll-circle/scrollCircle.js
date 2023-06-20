function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["list", "cardAddDeg", "width", "height", "initCartNum", "isAverage", "isClockwise", "isPagination", "leftArrow", "rightArrow", "children", "onPageChange"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { getLineAngle } from "./utils";
import { randomStr } from "../utils/random";
import { classBem, isMobile } from "../utils/handleDom";
import useTouchEvent from "../hooks/use-touch-event";
import { ScrollCircleCtx } from "./context";
var classPrefix = 'blackui-scroll-circle';
export var ScrollCircle = function ScrollCircle(_ref) {
  var _document$querySelect, _document$querySelect2, _document$querySelect3, _document$querySelect4, _list$length;
  var list = _ref.list,
    _ref$cardAddDeg = _ref.cardAddDeg,
    cardAddDeg = _ref$cardAddDeg === void 0 ? 1 : _ref$cardAddDeg,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '100%' : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? '100%' : _ref$height,
    _ref$initCartNum = _ref.initCartNum,
    initCartNum = _ref$initCartNum === void 0 ? 0 : _ref$initCartNum,
    _ref$isAverage = _ref.isAverage,
    isAverage = _ref$isAverage === void 0 ? true : _ref$isAverage,
    _ref$isClockwise = _ref.isClockwise,
    isClockwise = _ref$isClockwise === void 0 ? true : _ref$isClockwise,
    _ref$isPagination = _ref.isPagination,
    isPagination = _ref$isPagination === void 0 ? true : _ref$isPagination,
    leftArrow = _ref.leftArrow,
    rightArrow = _ref.rightArrow,
    children = _ref.children,
    onPageChange = _ref.onPageChange,
    props = _objectWithoutProperties(_ref, _excluded);
  var idRef = useRef(randomStr(classPrefix));
  /** 滚动盒子需要的信息 */
  var info = useRef({
    circleWrapWH: 0,
    cardWH: 0,
    circleR: 0,
    scrollViewDeg: 0
  });
  /** 触摸信息 */
  var touchInfo = useRef({
    startDeg: 0,
    isClick: false
  });
  /** 卡片间的度数 */
  var cardDeg = useRef(0);
  /** 旋转的度数 */
  var _useState = useState(-1),
    _useState2 = _slicedToArray(_useState, 2),
    rotateDeg = _useState2[0],
    setRotateDeg = _useState2[1];
  /** 当前的方向是否是竖着的 */
  var isVertical = useRef(((_document$querySelect = (_document$querySelect2 = document.querySelector(".".concat(idRef.current))) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.clientHeight) !== null && _document$querySelect !== void 0 ? _document$querySelect : 0) > ((_document$querySelect3 = (_document$querySelect4 = document.querySelector(".".concat(idRef.current))) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.clientWidth) !== null && _document$querySelect3 !== void 0 ? _document$querySelect3 : 0));
  var _useState3 = useState({
      /** 当前的页码 */
      pageNum: 1,
      /** 每页条数 */
      pageSize: 10
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    pageState = _useState4[0],
    setPageState = _useState4[1];
  var _useState5 = useState(0.6),
    _useState6 = _slicedToArray(_useState5, 2),
    duration = _useState6[0],
    setDuration = _useState6[1];
  var circleDiv = useRef({
    w: 0,
    h: 0
  });
  var init = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _circleWrap$clientWid, _circleWrap$clientHei, _cInfo, _cInfo2, _info$current$cardWH;
      var isInit,
        circleWrap,
        cInfo,
        cWH,
        _cardDeg,
        pageNum,
        pageSize,
        cardNum,
        _cardNum,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            isInit = _args.length > 0 && _args[0] !== undefined ? _args[0] : true;
            circleWrap = document.querySelector(".".concat(idRef.current));
            cInfo = document.querySelector(".".concat(idRef.current, " .").concat(classPrefix, "-cardWrap"));
            circleDiv.current.w = (_circleWrap$clientWid = circleWrap === null || circleWrap === void 0 ? void 0 : circleWrap.clientWidth) !== null && _circleWrap$clientWid !== void 0 ? _circleWrap$clientWid : 0;
            circleDiv.current.h = (_circleWrap$clientHei = circleWrap === null || circleWrap === void 0 ? void 0 : circleWrap.clientHeight) !== null && _circleWrap$clientHei !== void 0 ? _circleWrap$clientHei : 0;
            isVertical.current = circleDiv.current.h > circleDiv.current.w;
            info.current.circleWrapWH = isVertical.current ? circleDiv.current.w : circleDiv.current.h;
            info.current.cardWH = (_cInfo = cInfo === null || cInfo === void 0 ? void 0 : cInfo[isVertical.current ? 'clientHeight' : 'clientWidth']) !== null && _cInfo !== void 0 ? _cInfo : 0;
            cWH = (_cInfo2 = cInfo === null || cInfo === void 0 ? void 0 : cInfo[isVertical.current ? 'clientWidth' : 'clientHeight']) !== null && _cInfo2 !== void 0 ? _cInfo2 : 0;
            info.current.circleR = Math.round(isVertical.current ? circleDiv.current.h : circleDiv.current.w);
            // 屏幕宽高度对应的圆的角度
            info.current.scrollViewDeg = getLineAngle(info.current.circleWrapWH, info.current.circleR);
            // 每张卡片所占用的角度
            _cardDeg = 2 * 180 * Math.atan(((_info$current$cardWH = info.current.cardWH) !== null && _info$current$cardWH !== void 0 ? _info$current$cardWH : 0) / 2 / (info.current.circleR - cWH / 2)) / Math.PI + cardAddDeg;
            pageNum = pageState.pageNum, pageSize = pageState.pageSize; // 是否采用均分卡片的方式
            if (isAverage && list) {
              cardNum = Math.floor(360 / _cardDeg); // 判断总卡片数是否超过一个圆
              _cardNum = Math.min(cardNum, list.length);
              pageSize = _cardNum;
              setPageState(function (p) {
                return _objectSpread(_objectSpread({}, p), {}, {
                  pageSize: pageSize
                });
              });
              cardDeg.current = 360 / _cardNum;
            } else {
              cardDeg.current = _cardDeg;
            }
            onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange({
              pageNum: pageNum,
              pageSize: pageSize
            });
            if (isInit) {
              setRotateDeg(cardDeg.current * initCartNum * (isVertical.current ? 1 : -1));
            }
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function init() {
      return _ref2.apply(this, arguments);
    };
  }();
  var resizeFn = function resizeFn() {
    init(false);
  };
  useEffect(function () {
    if (isMobile) window.addEventListener('resize', resizeFn);
    return function () {
      if (isMobile) window.removeEventListener('resize', resizeFn);
    };
  }, []);
  useEffect(function () {
    if (list !== null && list !== void 0 && list.length) {
      setTimeout(function () {
        init();
      }, 0);
    }
  }, [list, cardAddDeg]);
  var _useTouchEvent = useTouchEvent({
      onTouchStart: function onTouchStart() {
        var _props$onTouchStart;
        touchInfo.current.startDeg = rotateDeg;
        setDuration(0.1);
        (_props$onTouchStart = props.onTouchStart) === null || _props$onTouchStart === void 0 ? void 0 : _props$onTouchStart.call(props);
      },
      onTouchMove: function onTouchMove() {
        var _props$onTouchMove;
        var xy = isVertical.current ? tInfo.deltaY : -tInfo.deltaX;
        var deg = Math.round(touchInfo.current.startDeg - info.current.scrollViewDeg * (xy / info.current.circleWrapWH));
        setRotateDeg(deg);
        (_props$onTouchMove = props.onTouchMove) === null || _props$onTouchMove === void 0 ? void 0 : _props$onTouchMove.call(props);
      },
      onTouchEnd: function onTouchEnd() {
        var _props$onTouchEnd;
        var startDeg = touchInfo.current.startDeg;
        // 移动的距离
        var xy = isVertical.current ? tInfo.deltaY : -tInfo.deltaX;
        var _duration = 0.6;
        var deg = rotateDeg;
        // 触摸的始末距离大于卡片高度的一半，并且触摸时间小于300ms，则触摸距离和时间旋转更多
        if (Math.abs(xy) > info.current.cardWH / 2 && tInfo.time < 300) {
          // 增加角度变化
          var v = tInfo.time / 300;
          var changeDeg = info.current.scrollViewDeg * (xy / info.current.circleWrapWH) / v;
          _duration = 1;
          deg = Math.round(startDeg - changeDeg);
        }
        // 处理转动的角度为：卡片的角度的倍数 (xy > 0 表示向上滑动)
        var mathMethods = 'ceil';
        if (Math.abs(xy) < info.current.cardWH / 3) {
          mathMethods = xy > 0 ? 'ceil' : 'floor';
        } else {
          mathMethods = xy > 0 ? 'floor' : 'ceil';
        }
        // 触摸距离小于10，并且触摸时间小于120ms才算点击
        touchInfo.current.isClick = Math.abs(xy) < 10 && tInfo.time < 120;
        setDuration(_duration);
        var _deg = cardDeg.current * Math[mathMethods](deg / cardDeg.current);
        setRotateDeg(_deg);
        (_props$onTouchEnd = props.onTouchEnd) === null || _props$onTouchEnd === void 0 ? void 0 : _props$onTouchEnd.call(props);
      }
    }),
    tInfo = _useTouchEvent.info,
    onTouchFn = _useTouchEvent.onTouchFn;
  var disableRight = pageState.pageNum * pageState.pageSize >= ((_list$length = list === null || list === void 0 ? void 0 : list.length) !== null && _list$length !== void 0 ? _list$length : 0);
  var disableLeft = pageState.pageNum <= 1;
  var onPageChangeFn = function onPageChangeFn(isAdd) {
    if (isAdd) {
      if (disableRight) return;
    } else {
      if (disableLeft) return;
    }
    pageState.pageNum += isAdd ? 1 : -1;
    setRotateDeg(0);
    onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(_objectSpread({}, pageState));
  };
  var circleStyle = useMemo(function () {
    var w = 0,
      h = info.current.circleR;
    if (isVertical.current) {
      w = info.current.circleR;
      h = 0;
    }
    return {
      width: "".concat(info.current.circleR * 2, "px"),
      height: "".concat(info.current.circleR * 2, "px"),
      transitionDuration: duration + 's',
      transform: "translate(calc(-50% + ".concat(w, "px), calc(-50% + ").concat(h, "px)) rotate(").concat(rotateDeg, "deg)")
    };
  }, [rotateDeg, duration]);
  return /*#__PURE__*/React.createElement(ScrollCircleCtx.Provider, {
    value: {
      circleR: info.current.circleR,
      cardDeg: cardDeg.current,
      isVertical: isVertical.current,
      isClockwise: isClockwise,
      isClick: touchInfo.current.isClick
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(classPrefix, " ").concat(idRef.current),
    style: {
      width: width,
      height: height
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: "".concat(classPrefix, "-area"),
    style: circleStyle
  }, onTouchFn), children), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classBem("".concat(classPrefix, "-arrow"), {
      left: true,
      disable: disableLeft
    })),
    onClick: function onClick() {
      return onPageChangeFn();
    }
  }, isPagination ? leftArrow !== null && leftArrow !== void 0 ? leftArrow : /*#__PURE__*/React.createElement("div", {
    className: "".concat(classBem("".concat(classPrefix, "-arrow-area"), {
      left: true
    }))
  }, '<') : null), /*#__PURE__*/React.createElement("div", {
    className: "".concat(classBem("".concat(classPrefix, "-arrow"), {
      right: true,
      disable: disableRight
    })),
    onClick: function onClick() {
      return onPageChangeFn(true);
    }
  }, isPagination ? rightArrow !== null && rightArrow !== void 0 ? rightArrow : /*#__PURE__*/React.createElement("div", {
    className: "".concat(classBem("".concat(classPrefix, "-arrow-area"), {
      right: true
    }))
  }, '>') : null)));
};