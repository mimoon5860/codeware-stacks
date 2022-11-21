"use strict";
// counter sequence function
const finalCountdown = (nums) => {
    const finalCount = [];
    let currentCount = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            currentCount.push(nums[i]);
        }
        if (currentCount[currentCount.length - 1] - 1 === nums[i]) {
            currentCount.push(nums[i]);
        }
        else if (currentCount.length) {
            currentCount = [nums[i]];
            finalCount.push(currentCount);
        }
    }
    const finalRes = [];
    for (let i = 0; i < finalCount.length; i++) {
        if (finalCount[i].length > 1) {
            finalRes.push(finalCount[i]);
        }
    }
    return [finalRes.length, finalRes];
};
const result = finalCountdown([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1]);
console.log(result);
