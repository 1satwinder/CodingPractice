
const zeroMatrix = (matrix,n) => {
	for(let r=0; r<n; r++){
		for(let c=0; c<n; c++){
			if(matrix[r][c] ===0)
                 matrix[r][c] = true;	
		}
	}

	for(let r=0; r<n; r++){
		for(let c=0; c<n; c++){
          if(matrix[r][c]===true){
          	 	for(let i=0; i<n; i++)
					matrix[r][i] = 0;
				//zero columns
				for(let i=0; i<n; i++)
					matrix[i][c] = 0;
          }
      }
  }
	return matrix
}

const _matrix = [[4,1,3], [2,-4,0],[5,9,2]];
console.log(zeroMatrix(_matrix,3))
