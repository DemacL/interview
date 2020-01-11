let nums = [1, 2, 3];
nums[10] = 10;
console.log(nums);
console.log(nums.filter(x => x === undefined))

// A. [undefined*7]
// B. []    


















// 直接设定数组length并不会被es5的几个包括(Array.prototype.forEach,Array.prototype.map,Array.prototype.filter,Array.prototype.reduce，。。)数组迭代方法循环。
// 之前我也不理解，但是在MDN看到它们的Polyfill，迭代的同时都通过 in 运算符 判断当前迭代的索引是否在数组中。
// 而直接设定长度没有设值的数组索引直接因为不能通过这个判断被剔除了。
// 其余元素都是空元素 并不是undefined filter map等方法会直接跳过空元素  empty