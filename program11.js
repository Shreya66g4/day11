function missingNum(arr) {
    const sumOfAllNumbers = 55; // Sum of numbers from 1 to 10 (1 + 2 + ... + 10)
  
    const sumOfArrayNumbers = arr.reduce((acc, num) => acc + num, 0);
  
    const missingNumber = sumOfAllNumbers - sumOfArrayNumbers;
  
    return missingNumber;
  }
  
  // Test cases
  console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); // Output: 5
  console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); // Output: 10
  console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); // Output: 7
  