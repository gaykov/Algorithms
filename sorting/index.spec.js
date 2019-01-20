import { insertionSort, bubbleSort, selectionSort } from "./index";

const getRandomArray = length =>
  new Array(length).fill().map(() => Math.round(Math.random() * 100));

describe("Sorting Algorithms", () => {
  describe("Insertion Sort", () => {
    it("Should sort random array just like JS's internal sort", () => {
      const randomArray = getRandomArray(20);
      expect(insertionSort(randomArray)).toEqual(
        randomArray.sort((a, b) => a - b)
      );
    });
  });

  describe("Bubble Sort", () => {
    it("Should sort random array just like JS's internal sort", () => {
      const randomArray = getRandomArray(20);
      expect(bubbleSort(randomArray)).toEqual(
        randomArray.sort((a, b) => a - b)
      );
    });
  });

  describe("Selection Sort", () => {
    it("Should sort random array just like JS's internal sort", () => {
      const randomArray = getRandomArray(20);
      expect(selectionSort(randomArray)).toEqual(
        randomArray.sort((a, b) => a - b)
      );
    });
  });
});
