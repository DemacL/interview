let nums = [1, 2, 3];
nums.length = 10;
console.log(nums.filter(x => x === undefined))

// A. [undefined*7]
// B. []    