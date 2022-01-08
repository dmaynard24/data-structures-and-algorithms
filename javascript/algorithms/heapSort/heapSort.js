const { buildMinHeap, buildMaxHeap, minHeapify, maxHeapify } = require(`../../data-structures/Heap/Heap`);
const { swap } = require(`../../util/swap`);

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
