const { swap } = require(`../../util/swap`);

// Insertion Sort

const insertionSort = (arr, isAscending = true) => {
  for (let start = 1; start < arr.length; start++) {
    let j = start;
    while (j > 0 && arr[j - 1] > arr[j] === isAscending) {
      swap(arr, j - 1, j);
      j -= 1;
    }
  }

  return arr;
};

module.exports = { insertionSort };
