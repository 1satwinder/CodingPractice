
const countChar = (str, char) => {
    let arr = str.split("");
    return arr.filter(x => x===char).length;
 
}

console.log(countChar("string", "s"));