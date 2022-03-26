function isArraySorted(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] && arr[i + 1] > arr[i]) {
        continue;
      } else if (arr[i + 1] && arr[i + 1] < arr[i]) {
        return false;
      }
    }
    return true;
  }

const hello = (arr) => {
  const resArr = [];
  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
    resArr.push(arr[i]);
    resArr.push(arr[j]);

    if (j === i + 1) {
      break;
    }
  }
  return isArraySorted(resArr);
};

console.log(hello([1, 3, 5, 6, 4, 2]));
console.log(hello([1, 4, 5, 6, 3]));
console.log(hello([1]));
console.log(hello([1, 2]));
console.log(hello([-89, -47, -38, 39, 82, 87, 40, -9, -41, -68]));

