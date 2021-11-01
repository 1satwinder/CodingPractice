function keyCount(s){
    let charCountObj = {};
    for(let i=0; i<s.length; i++){
        if(!charCountObj[s[i]])
        {
           charCountObj[s[i]] =1;
        }
        else{
            charCountObj[s[i]] += 1;
        }
    }
    return charCountObj;
}

function isAnagram(s1,s2){
    if(s1.length !== s2.length){
        return false;
    }
    let countObj1 = keyCount(s1);
    let countObj2 = keyCount(s2);
    
    for(key in countObj1){
        if( countObj2[key] !== countObj1[key]){
            return false;
        }
    }
    return true;
}

console.log(isAnagram("aaw", "waa"));