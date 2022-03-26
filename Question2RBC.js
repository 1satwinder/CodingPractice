const f2 = (str) => {
    let result="";
    let num1 = Number(str);
    while(num1!=0){
         let i = num1%2;
         result=i + result;
         num1 =Math.floor(num1/2);
        }

        return result;
    }

console.log(f2("5.2"));
