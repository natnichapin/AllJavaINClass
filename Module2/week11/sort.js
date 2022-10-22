const nums=[10,5,100,2,25]
//default string sorting nums.sort()
console.log(nums)
// 10, 100, 2, 25, 5 ]//number sorting ascending ordernums.sort((x,y)=>x-y)
console.log(nums)
//[ 2, 5, 10, 25, 100 ]//number sorting descending ordernums.sort((x,y)=>y-x)
console.log(nums)
//[ 100, 25, 10, 5, 2 ]