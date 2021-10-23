function charMap(s) {
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]] = obj[s[i]] + 1;
    }
  }
  console.log(obj);
  return obj;
}
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  let charCountS1 = charMap(s1);
  let charCountS2 = charMap(s2);

  for (let key in charCountS1) {
    if (!(charCountS1[key] === charCountS2[key])) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("sdaeder", "ddersa"));
