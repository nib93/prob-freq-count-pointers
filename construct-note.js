// add whatever parameters you deem necessary
function constructNote(message,letters) {
  const lFreq = {};
  const mFreq = {};
  // count frequency of the letters
  for (let char of letters) {
    lFreq[char] = ++lFreq[char] || 1;
  }
  // count frequency of the message
  for (let char of message) {
    mFreq[char] = ++mFreq[char] || 1;
  }
  // if frequency doesn't match then reurn false else return true
  for (let char in mFreq) {
    if (!lFreq[char]) {
      return false;
    }
    if (mFreq[char] > lFreq[char]) {
      return false;
    }
  }

  return true;
}
