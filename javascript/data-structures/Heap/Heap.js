const { swap } = require(`../../util/swap`);

const getLeftIndex = (i) => 2 * i + 1;
const getRightIndex = (i) => 2 * i + 2;

const maxHeapify = (arr, i) => {
  const leftIndex = getLeftIndex(i);
  const rightIndex = getRightIndex(i);
  let largest = i;
  if (leftIndex < arr.length && arr[largest] < arr[leftIndex]) {
    largest = leftIndex;
  }
  if (rightIndex < arr.length && arr[largest] < arr[rightIndex]) {
    largest = rightIndex;
  }
  if (largest !== i) {
    swap(arr, i, largest);
    maxHeapify(arr, largest);
  }
};

const minHeapify = (arr, i) => {
  const leftIndex = getLeftIndex(i);
  const rightIndex = getRightIndex(i);
  let smallest = i;
  if (leftIndex < arr.length && arr[leftIndex] < arr[smallest]) {
    smallest = leftIndex;
  }
  if (rightIndex < arr.length && arr[rightIndex] < arr[smallest]) {
    smallest = rightIndex;
  }
  if (smallest !== i) {
    swap(arr, i, smallest);
    minHeapify(arr, smallest);
  }
};

const buildMaxHeap = (arr) => {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i);
  }

  return arr;
};

const buildMinHeap = (arr) => {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    minHeapify(arr, i);
  }

  return arr;
};

module.exports = {
  maxHeapify,
  minHeapify,
  buildMaxHeap,
  buildMinHeap,
};
