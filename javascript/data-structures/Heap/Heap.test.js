const { buildMaxHeap, buildMinHeap } = require(`./Heap`);

test(`calling buildMaxHeap on an unsorted array will return that array as a Max-Heap`, () => {
  const arr = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
  expect(buildMaxHeap(arr)).toStrictEqual([16, 14, 10, 8, 7, 9, 3, 2, 4, 1]);
  const newArr = [16, 10, 8, 7, 9, 3, 14];
  expect(buildMaxHeap(newArr)).toStrictEqual([16, 10, 14, 7, 9, 3, 8]);
});

test(`calling buildMinHeap on an unsorted array will return that array as a Min-Heap`, () => {
  const arr = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
  expect(buildMinHeap(arr)).toStrictEqual([1, 2, 3, 8, 4, 9, 10, 14, 16, 7]);
  const newArr = [16, 10, 8, 7, 9, 3, 14];
  expect(buildMinHeap(newArr)).toStrictEqual([3, 7, 8, 10, 9, 16, 14]);
});
