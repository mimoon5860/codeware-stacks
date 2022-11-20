// counter sequence function
const finalCountdown = (nums: number[]) => {
    let count: number = 0;
    let sortNums = nums.sort((a, b) => {
        return a - b;
    })
    const finalCount: any = [];
    let currentCount: number[] = [];

    for (let i = 0; i < sortNums.length + finalCount.length; i++) {
        if (currentCount.length < 1) {
            currentCount.push(sortNums[i]);
        }
        for (let j = 0; j < currentCount.length; j++) {
            if (currentCount[j] === sortNums[i] - 1) {
                if (!currentCount.includes(sortNums[i])) {
                    currentCount.push(sortNums[i]);
                    // sortNums = sortNums.splice(i, i - 1);
                }
            }
        }
    }

    console.log([1, currentCount.reverse()])
}
finalCountdown([2, 3, 11, 8, 1, 4, 3]);
// console.log([2, 3, 11, 8, 3].sort((a, b) => {
//     return a - b;
// }))

