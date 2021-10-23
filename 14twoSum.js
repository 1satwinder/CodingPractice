function twoSum(nums, target) {
    let obj={};
    let result=[];
    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i]
        if(Object.keys(obj).includes(diff+"")){
            result.push(obj[diff], i) 
            return result;
        }
        obj[nums[i]] = i
    }
    return;
};

console.log(twoSum([2,7,11,15],9));