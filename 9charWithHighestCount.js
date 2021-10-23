//js
// function string as input returns most frequent char

function countChar(s){
    let countObj = { };

	for (let i = 0; i < s.length; i++) {
		if (!countObj[s[i]]) {
		  countObj[s[i]] = 1;
		} else {
		  countObj[s[i]] = countObj[s[i]] + 1;
		}
	  }
	let keyMax="",valueMax=0;
	for(key in countObj){
      if(countObj[key] > valueMax){
		  keyMax=key;
		  valueMax=countObj[key]
	  }
	}
	return keyMax;
	// return Object.keys(countObj).reduce((a, b) => countObj[a] > countObj[b] ? a : b); 
}
console.log(countChar("aaaaabbb@@@@czzzzzzzzz"));

