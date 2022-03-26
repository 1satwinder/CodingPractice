const charMap = (str) => {
  const frequencyObj = {};
  for (let i = 0; i < str.length; i++) {
    if (!frequencyObj[str[i]]) {
      frequencyObj[str[i]] = 1;
    }
    else {
        frequencyObj[str[i]] += 1;
    }
  }
  return frequencyObj
};

const isAnagram = (s1, s2) => {
    if (s1.length !== s2.length){
        return false;
    }
    const count1 = charMap(s1);
    const count2 = charMap(s2);

    for(let key in count1){
        if(count1[key] !== count2[key]){
            return false;
        }
        return true;
    }
}
console.log(isAnagram("satw", "wsta"));
