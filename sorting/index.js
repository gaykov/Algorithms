/**
 * https://en.wikipedia.org/wiki/Bubble_sort
 */
const bubbleSort = originalArray => {
  // Making a copy of an orriginal array to avoid it's modification
  const array = [...originalArray];

  // Boolean marker that indicates if array is sorted or not
  let sorted;

  do {
    // Assuming that array is sorted at the current state
    sorted = true;

    // Going through an entire array
    for (let i = 0; i < array.length; i++) {
      // Compare 2 items that stay by each other and
      // check that value on the left is less than falue on the right.
      // If it's not true, then
      if (array[i] < array[i - 1]) {
        // Swap this values
        [array[i], array[i - 1]] = [array[i - 1], array[i]];
        // Mark an array as not sorted
        sorted = false;
      }
    }
  } while (!sorted);

  // Return sorted array
  return array;
};

/**
 * https://en.wikipedia.org/wiki/Insertion_sort
 */
const insertionSort = originalArray => {
  // Making a copy of an orriginal array to avoid it's modification
  const array = [...originalArray];

  // Going through all the  starting from item number 1
  for (let i = 1, j; i < array.length; i++) {
    // j indicates our current working value
    j = i;
    // We're moving our value to the left untill it's reaching
    // correct position in sorted part of the array
    while (array[j] < array[j - 1] && j > 0) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      --j;
    }
  }
  // Return sorted array
  return array;
};

/**
 * https://en.wikipedia.org/wiki/Selection_sort
 */
const selectionSort = originalArray => {
  // Making a copy of an orriginal array to avoid it's modification
  const array = [...originalArray];

  // Go through all array's elements
  for (let i = 0; i < array.length - 1; ++i) {
    // Minumum value withing the range [i -> end of array]
    // At the begining, minumum value equals current value
    let localMinimumIndex = i;

    // Finding a minimum value by comparing each element within [i -> end of array]
    // to the current minumem value
    for (let j = i + 1; j < array.length; ++j) {
      // If the j's value is less than our localMinumus
      if (array[j] < array[localMinimumIndex]) {
        // Save j as an index of local minimum of the range
        localMinimumIndex = j;
      }
    }
    // Set the minimum value from the range [i -> end of array]
    // into i positions
    [array[i], array[localMinimumIndex]] = [array[localMinimumIndex], array[i]];
  }

  // Return sorted array
  return array;
};

/**
 * https://en.wikipedia.org/wiki/Selection_sort
 */
const mergeSort = originalArray => {
  // Making a copy of an orriginal array to avoid it's modification
  const array = [...originalArray];

  // Merge sort helper that marges 2 sorted array
  const _mergeSortedArrays = (leftArray, rightArray) => {
    let resultArray = [];

    // Going through both arrays
    while (leftArray.length && rightArray.length) {
      // Picking the smallest value at the beginig of each array
      // and pushing it at the end of sorted array
      if (leftArray[0] < rightArray[0]) {
        resultArray.push(leftArray.shift());
      } else {
        resultArray.push(rightArray.shift());
      }
    }

    // Checking if we have any items left
    if (leftArray.length > 0) {
      resultArray = resultArray.concat(leftArray);
    }

    // Checking if we have any items left
    if (rightArray.length > 0) {
      resultArray = resultArray.concat(rightArray);
    }

    return resultArray;
  };

  const doTheSort = arrayToSort => {
    // Recursion's end condition
    if (arrayToSort.length <= 1) {
      return arrayToSort;
    }

    // Picking the index right in the middle of arrayToSort
    const middleIndex = Math.floor(arrayToSort.length / 2);

    // Merging 2 sorted arrayToSorts
    return _mergeSortedArrays(
      mergeSort(arrayToSort.slice(0, middleIndex)),
      mergeSort(arrayToSort.slice(middleIndex, arrayToSort.length))
    );
  };

  return doTheSort(array);
};

/**
 * https://en.wikipedia.org/wiki/Quicksort
 */
const quickSort = originalArray => {
  // Making a copy of an orriginal array to avoid it's modification
  const array = [...originalArray];

  // Internal function that's actually doing sorting
  const doQuickSort = (arrayToSort, lo, hi) => {
    if (lo < hi) {
      // Getting a partition index and doing partitions
      const partitionIndex = partition(arrayToSort, lo, hi);

      // Call QuickSort for left part (from 0 to pivot) of the array
      doQuickSort(arrayToSort, lo, partitionIndex - 1);
      // Call QuickSort for left part (from pivot to the end) of the array
      doQuickSort(arrayToSort, partitionIndex + 1, hi);
    }
  };

  // Internal function that implements partitioning
  const partition = (arrayForPartitioning, lo, hi) => {
    // Choosing pivot element (currently picking the last one)
    const pivot = arrayForPartitioning[hi];

    // Aligning all the items that is lower then pivot to the left
    // of the pivot and all the higher items to the right
    let i = lo;
    // Going throught an entire array
    for (let j = lo; j < hi; j++) {
      // If the current item is lower than the pivot
      if (arrayForPartitioning[j] < pivot) {
        // Swap i and j items
        [arrayForPartitioning[i], arrayForPartitioning[j]] = [
          arrayForPartitioning[j],
          arrayForPartitioning[i]
        ];
        // Increasing i's counter
        ++i;
      }
    }

    [arrayForPartitioning[i], arrayForPartitioning[hi]] = [
      arrayForPartitioning[hi],
      arrayForPartitioning[i]
    ];

    return i;
  };

  doQuickSort(array, 0, array.length - 1);

  return array;
};

const shellSort = originalArray => {
  const array = [...originalArray];

  let gap = Math.floor(array.length / 2);

  while (gap > 0) {
    for (let i = 0; i < array.length - gap; i++) {
      let index = i,
        indexWithAGap = i + gap;

      while (index >= 0) {
        if (array[indexWithAGap] < array[index]) {
          [array[index], array[indexWithAGap]] = [
            array[indexWithAGap],
            array[index]
          ];
        }

        indexWithAGap = index;
        index -= gap;
      }
    }

    gap = Math.floor(gap / 2);
  }

  return array;
};

export {
  insertionSort,
  bubbleSort,
  selectionSort,
  mergeSort,
  quickSort,
  shellSort
};
