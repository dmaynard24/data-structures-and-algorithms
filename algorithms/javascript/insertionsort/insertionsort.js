// Insertionsort

function insertionsort(arr, isAscending = true) {
  function swap(left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }

  for (let start = 1; start < arr.length; start++) {
    let j = start;
    while (j > 0 && arr[j - 1] > arr[j] === isAscending) {
      swap(j - 1, j);
      j -= 1;
    }
  }

  return arr;
}

module.exports = { insertionsort };
