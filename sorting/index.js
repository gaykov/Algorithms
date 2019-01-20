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
    // We're moving our value to the left untill it's reaching it's stays
    // at the current position in sorted part of the array
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

export { insertionSort, bubbleSort, selectionSort };
