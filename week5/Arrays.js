let nums=[] 
console.log(nums[0]) 
console.log(nums[nums.length - 1]) 

for(const num of nums) {
console.log(num)
}

//Array in javascript is dynamically size 
//Can keep 3 types of arrays  

let a=[] 
let b=null 
let c 
let d=[1,2,3] 

console.log(a.length) 
console.log(d.length) 
console.log(c?.length) 
console.log(b?.length)  

let colors = ['yellow', 'green', 'orange'] 

let j =[5,10,15]
let f=Array.from(j)  //let j=[...a]  
console.log(j) 
let h=Array.of('Hello', 'world','goodbye') //
console.log(h)  

//Delete  
delete j[1]
delete j[0] 
console.log(a) 
console.log(a[2]) 
console.log(a.length) 

