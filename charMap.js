const KeyCount = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] = obj[str[i]] + 1;
    }
  }
  console.log(obj);
};

KeyCount("Sat@3ninidwiqawatts");
