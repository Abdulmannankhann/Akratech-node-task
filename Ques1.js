// Question#1
// You are given two arrays of integers a and b of the same length, and an integer k. We will be
//  iterating through array a from left to right, and simultaneously through array b from right to left,
//   and looking at pairs (x, y), where x is from a and y is from b. Such a pair is called tiny if the
//  concatenation xy is strictly less than k.
// Your task is to return the number of tiny pairs that you'll encounter during the simultaneous
// iteration through a and b.
// Example
// For a = [1, 2, 3], b = [1, 2, 3], and k = 31, the output should be
// countTinyPairs(a, b, k) = 2.

const a = [1, 2, 3];
const b = [3, 2, 1];

function checkTinyPairs(a, b, k) {
  let pairs = 0;
  let arr = [];
  b.reverse();
  for (num in a) {
    result = String(a[num]) + String(b[num]);
    if (result < k) {
      pairs++;
    }
  }
  return pairs;
}

console.log(checkTinyPairs(a, b, 31));
