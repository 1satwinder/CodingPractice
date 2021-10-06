var string = "Welcome to this Javascript Guide!";

console.log(string.split("").reverse().join(""));

// second way
var arr = [];
for(let i=string.length-1; i>=0; i--){
    arr.push(string[i])
}

console.log(arr.join(""))