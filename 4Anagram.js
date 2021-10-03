var firstWord = "Mary";
var secondWord = "Army";

function isAnagram(s1, s2){
    let s1lower = s1.toLowerCase();
    let s2lower = s2.toLowerCase();

    if(s1lower.length !== s2lower.length){
        return false;
    }

    for(let i=0; i<s1lower.length; i++){
       if( !s1lower.includes(s2lower[i])){
           return false;
       }
    }
    return true;
}

console.log(isAnagram("Elbow", "Below"));