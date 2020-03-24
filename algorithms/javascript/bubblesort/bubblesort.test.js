const { bubbleSort } = require(`./bubblesort`);

test(`sorting the array [1, 5, 4, 2] ascending will return [1, 2, 4, 5]`, () => {
  expect(bubbleSort([1, 5, 4, 2])).toStrictEqual([1, 2, 4, 5]);
});

test(`sorting the array [1, 5, 4, 2] ascending will return [5, 4, 2, 1]`, () => {
  expect(bubbleSort([1, 5, 4, 2], false)).toStrictEqual([5, 4, 2, 1]);
});
