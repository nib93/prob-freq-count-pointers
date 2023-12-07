// add whatever parameters you deem necessary
function averagePair(arr,num) {
    let left = 0; // start pointer
  let right = arr.length - 1; // end pointer

  while (left < right) {
    //find the average
    let mid = (arr[left] + arr[right]) / 2;
    //if mid is the number then return
    if (mid === num) {
      return true;
    } else if (mid < num) {//if number is bigger than mid than move the left pointer else move the right pointer
      left++;
    } else {
      right--;
    }
  }
  return false;
}
