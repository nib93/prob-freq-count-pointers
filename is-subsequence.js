// add whatever parameters you deem necessary
function isSubsequence(s1,s2) {
  let s1Idx = 0;
  let s2Idx = 0;
  //if s1 is null return true
  if (!s1) return true;
  while (s2Idx < s2.length) {
    if (s2[s2Idx] === s1[s1Idx]) {
      s1Idx += 1;
    }
    //if the index of s1 is ssame as the length of s1 then return true
    if (s1Idx === s1.length) return true;
    s2Idx += 1;
  }
  return false;
}
