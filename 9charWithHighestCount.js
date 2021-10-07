//js
// function string as input returns most frequent char

function countChar(s){
    let countObj = { };
	for(let i=0; i<s.length; i++){
        countObj[s[i]] =  0;
	}

		for(let i=0; i<s.length; i++){
        countObj[s[i]] =  countObj[s[i]] +1 ;
	}
	return Object.keys(countObj).reduce((a, b) => countObj[a] > countObj[b] ? a : b);
	 
}

console.log(countChar("aabbbc"));

