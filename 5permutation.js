let findPermutations = (string) => {
  
  let permutationsArray = [] 
   
  for (let i = 0; i < string.length; i++){
    let char = string[i]

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of findPermutations(remainingChars)){
      permutationsArray.push(char + permutation) }
  }
  return permutationsArray
}

console.log(findPermutations("abcd"));