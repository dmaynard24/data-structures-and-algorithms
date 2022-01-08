const { buildMinHeap, minHeapify, buildMaxHeap, maxHeapify } = require(`../../../data-structures/javascript/Heap/Heap`);

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const heapSort = (arr, isAscending = true) => {
  if (arr.length < 1) return arr;
  const buildHeap = isAscending ? buildMinHeap : buildMaxHeap;
  const heapify = isAscending ? minHeapify : maxHeapify;
  const heap = buildHeap(arr);

  const sorted = [];
  while (heap.length > 1) {
    swap(heap, 0, heap.length - 1);
    sorted.push(heap.pop());
    heapify(arr, 0);
  }
  sorted.push(heap[0]);

  return sorted;
};

module.exports = { heapSort };
