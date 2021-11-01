function isPrime(num) {
  if(num < 2) return false;

  for (let k = 2; k <= num; k++){
    if( num % k == 0){
      return false;
    }
  }
  return true;
}

console.log(isPrime(12));

for(let i=3; i<=100; i++){
	let flag=0;
	for (let k = 2; k < i; k++){
    if( (i % k == 0)){
       flag=1;
       break;
    }
 
  }
  if(flag==0){
  	console.log(i);
  }
  
}

