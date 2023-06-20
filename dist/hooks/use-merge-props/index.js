function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { useMemo } from 'react';
import omit from "../../utils/omit";
export default function useMergeProps(componentProps, defaultProps) {
  var globalComponentConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _ignorePropsFromGlobal = componentProps._ignorePropsFromGlobal;
  var _defaultProps = useMemo(function () {
    return _objectSpread(_objectSpread({}, defaultProps), _ignorePropsFromGlobal ? {} : globalComponentConfig);
  }, [defaultProps, globalComponentConfig, _ignorePropsFromGlobal]);
  var props = useMemo(function () {
    // Must remove property of MergePropsOptions before passing it to component
    var mProps = omit(componentProps, ['_ignorePropsFromGlobal']);

    // https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react/src/ReactElement.js#L312
    for (var propName in _defaultProps) {
      if (mProps[propName] === undefined) {
        mProps[propName] = _defaultProps[propName];
      }
    }
    return mProps;
  }, [componentProps, _defaultProps]);
  return props;
}