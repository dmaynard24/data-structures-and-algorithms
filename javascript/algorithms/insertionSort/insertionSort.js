// Insertion Sort

const insertionSort = (arr, isAscending = true) => {
  const binarySearch = (left, right, x) => {
    if (left >= right) return left;
    const mid = Math.floor((left + right) / 2);
    const pivot = arr[mid];
    if (isAscending ? x <= pivot : x >= pivot) {
      return binarySearch(left, mid, x);
    }
    return binarySearch(mid + 1, right, x);
  };

  for (let i = 1; i < arr.length; i++) {
    if (isAscending ? arr[i - 1] <= arr[i] : arr[i - 1] >= arr[i]) continue;
    const index = binarySearch(0, i - 1, arr[i]);
    arr = [...arr.slice(0, index), ...arr.splice(i, 1), ...arr.slice(index)];
  }

  return arr;
};

module.exports = { insertionSort };
