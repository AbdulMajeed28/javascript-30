function allPairs(arr, target) {
    const pairs = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          pairs.push([arr[i], arr[j]]);
          break; 
        }
      }
    }
  
    pairs.sort((a, b) => a[0] - b[0]);
  
    return pairs;
  }
  
  console.log(allPairs([2, 4, 5, 3], 7));
  console.log(allPairs([5, 3, 9, 2, 1], 3));
  console.log(allPairs([4, 5, 1, 3, 6, 8], 9)); 
  