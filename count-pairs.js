// add whatever parameters you deem necessary
function countPairs(arr,num) {
    //sort an array
    arr.sort((a, b) => a - b);
    let count = 0;
    let left = 0;
    let right = arr.length - 1;
    //loop through pointers
    while (left < right) {
        let sum = arr[left] + arr[right];
        //if sum of left side of num and right side of num is same then increament counter
        if (sum === num) {
            count++;
            left++;
            right--;
        } else if (sum < num) {//if sum is smaller then number then move left pointer else move right pointer
            left++;
        } else {
            right--;
        }
    }
    return count;
}
