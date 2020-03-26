// Quicksort

function quicksort(arr, isAscending = true) {
  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  function partition(left, right, pivot) {
    while (left <= right) {
      while (isAscending ? arr[left] < pivot : arr[left] > pivot) {
        left++;
      }

      while (isAscending ? arr[right] > pivot : arr[right] < pivot) {
        right--;
      }

      if (left <= right) {
        swap(left, right);
        left++;
        right--;
      }
    }
    return left;
  }

  function quicksortRecursive(left, right) {
    if (left < right) {
      const pivot = arr[Math.floor((left + right) / 2)];
      const index = partition(left, right, pivot);
      quicksortRecursive(left, index - 1);
      quicksortRecursive(index, right);
    }
  }

  quicksortRecursive(0, arr.length - 1);

  return arr;
}

module.exports = { quicksort };
