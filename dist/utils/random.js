/** 生成随机字符串 */
export var randomStr = function randomStr(v) {
  return "".concat(v ? v + '-' : '').concat(Math.ceil(Math.random() * 10e5).toString(36), "-").concat(Date.now().toString(36));
};

/** 打乱数组 Fisher Yates shuffle算法 */
export function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
}

/** 生成随机字母 isUppercase 是否大写 */
export function randomLetter() {
  var isUppercase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return String.fromCharCode(Math.floor(Math.random() * 26) + (isUppercase ? 65 : 97));
}