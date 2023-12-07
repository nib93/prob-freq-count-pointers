// add whatever parameters you deem necessary
function longestFall(n) {
  let count = 1;
  let maxCount = 1;
  // if array is empty the return 0
  if (n.length === 0) {
    return 0;
  }
  //loop thriugh array
  for (let i = 1; i < n.length; i++) {
    // if curr num < previous number the increment counter and update maxcount
    if (n[i] < n[i - 1]) {
      count++;
      maxCount = Math.max(count, maxCount);
    } else {
      count = 1;
    }
  }

  return maxCount;
}
