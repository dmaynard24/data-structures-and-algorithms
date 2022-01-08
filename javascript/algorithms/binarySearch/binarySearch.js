// Binary Search

// Search algorithm that only works on arrays sorted ascendingly by repeatedly dividing the search interval in half.

const binarySearch = (arr, target) => {
  const binarySearchRecursive = (left, right) => {
    if (arr[left] === target) {
      return left;
    }
    if (arr[right] === target) {
      return right;
    }

    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    }

    if (left <= right) {
      if (arr[middle] < target) {
        return binarySearchRecursive(middle + 1, right);
      }
      return binarySearchRecursive(left, middle - 1);
    }

    return -1;
  };

  return binarySearchRecursive(0, arr.length - 1);
};

module.exports = { binarySearch };
