const { bubbleSort } = require(`./bubbleSort`);

const arr = [1, 5, 5, 6, 9, 8, 3];

test(`sorting the array [1, 5, 5, 6, 9, 8, 3] in ascending order will return [1, 3, 5, 5, 6, 8, 9]`, () => {
  expect(bubbleSort(arr)).toStrictEqual([1, 3, 5, 5, 6, 8, 9]);
});

test(`sorting the array [1, 5, 5, 6, 9, 8, 3] in descending order will return [9, 8, 6, 5, 5, 3, 1]`, () => {
  expect(bubbleSort(arr, false)).toStrictEqual([9, 8, 6, 5, 5, 3, 1]);
});
