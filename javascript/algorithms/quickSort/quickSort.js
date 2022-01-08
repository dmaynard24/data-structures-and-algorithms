const { swap } = require(`../../util/swap`);

// Quick Sort

const quickSort = (arr, isAscending = true) => {
  const partition = (left, right, pivot) => {
    while (left <= right) {
      while (isAscending ? arr[left] < pivot : arr[left] > pivot) {
        left++;
      }

      while (isAscending ? arr[right] > pivot : arr[right] < pivot) {
        right--;
      }

      if (left <= right) {
        swap(arr, left, right);
        left++;
        right--;
      }
    }
    return left;
  };

  const quickSortRecursive = (left, right) => {
    if (left < right) {
      const pivot = arr[Math.floor((left + right) / 2)];
      const index = partition(left, right, pivot);
      quickSortRecursive(left, index - 1);
      quickSortRecursive(index, right);
    }
  };

  quickSortRecursive(0, arr.length - 1);

  return arr;
};

module.exports = { quickSort };
