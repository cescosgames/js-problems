function moveZeroes(nums: number[]): void {
    let insertIndex: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertIndex] = nums[i];
            insertIndex++
        }
    }

    for (let j: number = insertIndex; j < nums.length; j++) {
        nums[j] = 0;
    }
};