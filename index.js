function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The Big O time complexity for this function is O(n²).
*/

/* 
  Add your pseudocode here
  Create a function called hasTargetSum which takes an array and a target.
  Iterate through each number in the array.
  Iterate through the rest of the array.
  Check if the sum of two numbers in the array matches the target.
  If so, return true.
  If I reach the end of the array and I haven't found two numbers that add up to my target, return false.
*/

/*
  Add written explanation of your solution here
  The function looks for two numbers that add up to the target. It starts iterating with the number at index 0 and checks or iterate with the rest of the numbers in the array to see if they add up to the target. If the number at index 0 and the rest of the numbers in the array don't add up to the target, it moves on to the next number at index 1 and checks with the rest of the numbers in the array to see if they add up to the target. It keeps iterating like that until it finds two numbers that add up to the target, and it should return true. However, if at the end it couldn't find two numbers that add up to the target, it should return false. 
  This is an example of the function in action.
  hasTargetSum([1, 2, 3, 4], 7)
  [1, 2, 3, 4]
   i  j
   keeps looking
  [1, 2, 3, 4]
   i     j
   keeps looking
  [1, 2, 3, 4]
   i        j   
   keeps looking  
  [1, 2, 3, 4]
      i  j
   keeps looking
  [1, 2, 3, 4]
      i     j
   keeps looking
  [1, 2, 3, 4]
         i  j
   finds the two numbers that add up to the target
  It finds the two numbers that add up to the target in the last iteration, so the function return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([12, 18, 3, -6, 30], 24));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([7, 2, 5, 11, 8], 11));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([11], 11));
}

module.exports = hasTargetSum;
