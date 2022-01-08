// Bubble Sort

// One of the most naive implementations of a sorting algorithm. Every element is compared to each of the other elements and swapped if out of order. This is repeated until all elements are in the correct order.

// Bubblesort is O(n^2) time complexity but O(1) space complexity.

function bubbleSort(arr, isAscending = true) {
  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  let isSorted = false;
  let lastUnsorted = arr.length - 1;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastUnsorted; i++) {
      if (arr[i] > arr[i + 1] === isAscending) {
        swap(i, i + 1);
        isSorted = false;
      }
    }
    lastUnsorted--;
  }

  return arr;
}

module.exports = { bubbleSort };
