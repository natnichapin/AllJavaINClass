const item1=[5,10,15,20,30,40,50,]
let item2=null

//optional chaining can test ->    1.null    2.undefined
//it will return null and undefined
//use for checking without using if clause
console.log(item1?.[0])
console.log(item2?.[0])
//console.log(item2[0]) //error

const obj1={id:123,firstname: "Natnicha",sex: 'Female}'}
let obj2

console.log(obj1?.id)
console.log(obj2?.id) //not have optional chaining it will throw error

