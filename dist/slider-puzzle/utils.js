import { shuffleArray } from "../utils/random";

/** 根据反转次数和空瓦片的位置来检查打乱的数组是否可解 */
function isSolvable(arr, size) {
  var inversions = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] !== size * size && arr[j] !== size * size && arr[i] > arr[j]) {
        inversions++;
      }
    }
  }
  if (size % 2 === 1) {
    return inversions % 2 === 0;
  } else {
    var emptyTileRow = Math.ceil(arr.indexOf(size * size) / size);
    return (inversions + emptyTileRow) % 2 === 1;
  }
}

/** 创建一个打乱的不重复数字的数组 */
export function randomNumberArray(size) {
  var arr = Array.from({
    length: size * size
  }, function (_, i) {
    return i + 1;
  });
  do {
    shuffleArray(arr);
  } while (!isSolvable(arr, size));
  return arr;
}

/** 判断是否完成拼图 */
export function isPuzzleSolved(arr) {
  var _arr$at;
  var length = arr.length;
  for (var i1 = 0; i1 < length; i1++) {
    var len = length - (i1 === length - 1 ? 1 : 0);
    for (var i2 = 0; i2 < len; i2++) {
      if (arr[i1][i2] !== i1 * length + i2 + 1) {
        return false;
      }
    }
  }
  return ((_arr$at = arr.at(-1)) === null || _arr$at === void 0 ? void 0 : _arr$at.at(-1)) === 0;
}

/** 获取行列的位置 */
export function getRowColItem(index, spaceIndex, size) {
  index += index >= spaceIndex ? 1 : 0;
  return {
    rowNum: Math.floor(index / size),
    colNum: index % size
  };
}