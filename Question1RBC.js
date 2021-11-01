
function checkCondition(num){
    let a = Number(num[0]);
    let b = Number(num[1]);
    let c = Number(num[2]);
    console.log(a);
    console.log(b);
    console.log(c);
    if( (a**2 + b**2) === c ){
        return 1;
    }
    else if( (b**2 + c**2) == a  ){
        return 1;
    }
    else if( (a**2 + c**2) == b) {
        return 1;
    }
    else {
        return 0;
    }
}

function f1(s) {
   
    let arr = [];
    let resultArr = [];
    for(let i=0; i<s.length; i+=3){ 
    //    if( (i+3) > (s.length-1) ){
    //         arr.push(s.slice(i,(s.length)))
    //         return arr;
    //    } 
       arr.push(s.slice(i,i+3))   
    }
    for(let pair of arr){
        resultArr.push(checkCondition(pair))
    }
    return resultArr;
}

console.log(f1("1124567"));