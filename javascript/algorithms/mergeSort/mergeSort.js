// Merge Sort

const mergeSort = (arr, isAscending = true) => {
  const mergeHalves = (left, middle, right) => {
    let temp = [];
    let leftStart = left;
    let rightStart = middle + 1;
    const size = right - left + 1;

    while (leftStart <= middle && rightStart <= right) {
      if (arr[leftStart] <= arr[rightStart] === isAscending) {
        temp.push(arr[leftStart]);
        leftStart++;
      } else {
        temp.push(arr[rightStart]);
        rightStart++;
      }
    }

    if (leftStart <= middle) {
      temp = [...temp, ...arr.slice(leftStart, middle + 1)];
    } else {
      temp = [...temp, ...arr.slice(rightStart, right + 1)];
    }

    arr.splice(left, size, ...temp);
  };

  const mergeSortRecursive = (left, right) => {
    if (left < right) {
      const middle = Math.floor((left + right) / 2);
      mergeSortRecursive(left, middle);
      mergeSortRecursive(middle + 1, right);
      mergeHalves(left, middle, right);
    }
  };

  mergeSortRecursive(0, arr.length - 1);

  return arr;
};

module.exports = { mergeSort };
