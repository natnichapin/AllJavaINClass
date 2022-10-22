let arr =[5,10,15]
console.log("----------- for loop -------------")
//for loop : cannot use const
for(let index=0; index<arr.length; index++){
        console.log(arr[index])
}
console.log("----------- for of -------------")
//for of : let , const , var 
//for of use : Array
for(const i of arr){ 
    console.log(i)
}

console.log("----------- for in -------------")
// You can use [] instead of . for refer to properties
//for in use : String , Object 
const student={id:123,firstname: "Natnicha",sex: 'Female}'}
for(const prop in student ){ 
    console.log(prop)
    console.log(student[prop])  //student.id / student[id] 

}
