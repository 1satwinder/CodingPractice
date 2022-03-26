const solution = (arr) => {
    const resArr=[];
    let a,b,c;

    for(let i=0; i<arr.length; i++){
        if (resArr.length== (arr.length - 2)){
            break;
        }
        a = arr[i];
        b = arr[i+1];
        c = arr[i+2];
        if( b>a && b>c){
            resArr.push(1);
        }
        else if(b<a && b<c){
            resArr.push(1);
        }
        else{
            resArr.push(0);
        }
    }
    console.log(resArr);
}

solution([1, 2, 1, 3, 4]);
solution([1, 2, 3, 4]);
solution([1000000000, 1000000000, 1000000000]);
solution([1, 2, 4, 3, 1]);
solution([3, 5, 2, 6, 10]);