function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { isMobile } from "../../utils/handleDom";
import useTouch from "../use-touch";
import useLatest from "../use-latest";
/** 绑定手指触摸或鼠标事件 */
export default function useTouchEvent() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var touch = useTouch();
  var optionsRef = useLatest(options);
  var onTouchStart = function onTouchStart(e) {
    var _options$isDisable, _options$isDisable2, _optionsRef$current$o, _optionsRef$current;
    /** 鼠标左击才触发 */
    if (!isMobile && !options.isAllMouseClick && e.button !== 0) {
      return;
    }
    if ((_options$isDisable = options.isDisable) !== null && _options$isDisable !== void 0 && _options$isDisable.all || (_options$isDisable2 = options.isDisable) !== null && _options$isDisable2 !== void 0 && _options$isDisable2.onTouchStart) return;
    onStopEvent(e);
    touch.start(e);
    if (!isMobile) {
      document.addEventListener('mousemove', onTouchMove, true);
      document.addEventListener('mouseup', onTouchEnd, true);
    }
    (_optionsRef$current$o = (_optionsRef$current = optionsRef.current).onTouchStart) === null || _optionsRef$current$o === void 0 ? void 0 : _optionsRef$current$o.call(_optionsRef$current, e);
  };
  var onTouchMove = function onTouchMove(e) {
    var _options$isDisable3, _options$isDisable4, _optionsRef$current$o2, _optionsRef$current2;
    if ((_options$isDisable3 = options.isDisable) !== null && _options$isDisable3 !== void 0 && _options$isDisable3.all || (_options$isDisable4 = options.isDisable) !== null && _options$isDisable4 !== void 0 && _options$isDisable4.onTouchMove) return;
    onStopEvent(e);
    touch.move(e);
    (_optionsRef$current$o2 = (_optionsRef$current2 = optionsRef.current).onTouchMove) === null || _optionsRef$current$o2 === void 0 ? void 0 : _optionsRef$current$o2.call(_optionsRef$current2, e, touch.info);
  };
  var onTouchEnd = function onTouchEnd(e) {
    var _options$isDisable5, _options$isDisable6, _optionsRef$current$o3, _optionsRef$current3;
    if ((_options$isDisable5 = options.isDisable) !== null && _options$isDisable5 !== void 0 && _options$isDisable5.all || (_options$isDisable6 = options.isDisable) !== null && _options$isDisable6 !== void 0 && _options$isDisable6.onTouchEnd) return;
    onStopEvent(e);
    touch.move(e);
    if (!isMobile) {
      document.removeEventListener('mousemove', onTouchMove, true);
      document.removeEventListener('mouseup', onTouchEnd, true);
    }
    (_optionsRef$current$o3 = (_optionsRef$current3 = optionsRef.current).onTouchEnd) === null || _optionsRef$current$o3 === void 0 ? void 0 : _optionsRef$current$o3.call(_optionsRef$current3, e);
  };
  var onStopEvent = function onStopEvent(e) {
    if (options.isStopEvent || options.isStopPropagation) {
      e.stopPropagation();
    }
    if (options.isStopEvent || options.isPreventDefault) {
      e.preventDefault();
    }
  };
  return _objectSpread(_objectSpread({}, touch), {}, {
    onTouchFn: onTouchMouse({
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onTouchEnd: onTouchEnd,
      isOnMouseUp: options.isOnMouseUp,
      isOnTouchCancel: options.isOnTouchCancel
    })
  });
}

/** 处理鼠标或手指触摸事件 */
export var onTouchMouse = function onTouchMouse(_ref) {
  var onTouchStart = _ref.onTouchStart,
    onTouchMove = _ref.onTouchMove,
    onTouchEnd = _ref.onTouchEnd,
    isOnMouseUp = _ref.isOnMouseUp,
    isOnTouchCancel = _ref.isOnTouchCancel;
  if (!isMobile) {
    return _objectSpread({
      onMouseDown: onTouchStart
    }, isOnMouseUp ? {
      onMouseUp: onTouchEnd
    } : null);
  } else {
    return _objectSpread({
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onTouchEnd: onTouchEnd
    }, isOnTouchCancel ? {
      onTouchCancel: onTouchEnd
    } : null);
  }
};