function missingArray(arr) {
    var sumOfNumber = 55;
  
    function addNumbers(arr) {
      var sum = 0;
      for (const num of arr) {
        sum += num;
      }
      return sum;
    }
  
    var missingNumber = sumOfNumber - addNumbers(arr);
    return missingNumber;
  }
  
  console.log(missingArray([1, 2, 3, 4, 6, 7, 8, 9, 10]));
  console.log(missingArray([7, 2, 3, 6, 5, 9, 1, 4, 8]));
  console.log(missingArray([10, 5, 1, 2, 4, 6, 8, 3, 9]));