function frequencySort(str) {
    const frequencyMap = new Map();
  for (const char of str) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

    const sortedChars = Array.from(frequencyMap.keys()).sort((a, b) => {
    const frequencyDiff = frequencyMap.get(b) - frequencyMap.get(a);
    if (frequencyDiff !== 0) {
      return frequencyDiff;
    } else {
      const caseDiff = a.charCodeAt(0) - b.charCodeAt(0);
      if (caseDiff !== 0) {
        return caseDiff;
      } else {
        return a.localeCompare(b);
      }
    }
  });

  let result = '';
  for (const char of sortedChars) {
    const frequency = frequencyMap.get(char);
    result += char.repeat(frequency);
  }

  return result;
}

console.log(frequencySort("tree")); 
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb")); 
