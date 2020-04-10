const { binarySearch } = require(`./binarySearch`);

test(`the index of 5 in the sorted array [1, 3, 5, 6] is 2`, () => {
  expect(binarySearch([1, 3, 5, 6], 5)).toBe(2);
});

test(`the index of 9 in the sorted array [1, 3, 5, 6, 6, 8, 9] is 6`, () => {
  expect(binarySearch([1, 3, 5, 6, 6, 8, 9], 9)).toBe(6);
});
