// add whatever parameters you deem necessary
function sameFrequency(n1,n2) {
    let s1 = n1.toString();
    let s2 = n2.toString();
    if (s1.length !== s2.length) return false;
  
    let count1 = {};
    let count2 = {};
    
    //count freqency of character in s1
    for (let i = 0; i < s1.length; i++) {
      count1[s1[i]] = (count1[s1[i]] || 0) + 1;
    }
  
    //count freqency of character in s2
    for (let j = 0; j < str2.length; j++) {
      count2[s2[j]] = (count2[s2[j]] || 0) + 1;
    }
    
    //if frequency doesn't match then return false else return true
    for (let i in count1) {
      if (count1[i] !== count2[i])
        return false;
    }
  
    return true;
}
