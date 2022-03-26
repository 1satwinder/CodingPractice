
const merge = (str1, str2) => {
    let result = "";

    for(let i=0, j=0; i<str1.length || j<str2.length; ){
        //let code = str1.charCodeAt(i);
        if(str1[i] <= str2[j]){
            result = result + str1[i]
            i++;
        }
        else {
            result += str2[j]
            j++;
            if (j > (str2.length-1)){
                 break;
            }
        }
    }
    return result;
}

console.log(merge('super', 'tower'));
console.log(merge('dce', 'cccbd'));