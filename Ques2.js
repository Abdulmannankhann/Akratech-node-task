// Question #2
// Given an integer x and a sorted array a of N distinct integers,
//design a linear-time algorithm to  determine if there exists
//two distinct indices i and j such that a[i] + a[j] == x  For
//example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7,
//your program should return [[11,  -4], [2, 5]] because
// 11 + -4 = 7 and 2 + 5 = 7.
function sums(arr, sum) {
  let pairs = [];
  let numList = [];
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let diff = sum - currNum;
    if (numList.includes(diff)) {
      pairs.push([currNum, diff]);
    }
    numList.push(currNum);
  }
  return pairs;
}
let num = 7;
let arr = [3, 5, 2, -4, 8, 11];

console.log(sums(arr, num));
