const { quickSort } = require(`./quicksort`);

const arr = [1, 5, 6, 9, 8, 3];

test(`sorting the array [1, 5, 6, 9, 8, 3] in ascending order will return [1, 3, 5, 6, 8, 9]`, () => {
  expect(quickSort(arr)).toStrictEqual([1, 3, 5, 6, 8, 9]);
});

test(`sorting the array [1, 5, 6, 9, 8, 3] in descending order will return [9, 8, 6, 5, 3, 1]`, () => {
  expect(quickSort(arr, false)).toStrictEqual([9, 8, 6, 5, 3, 1]);
});
