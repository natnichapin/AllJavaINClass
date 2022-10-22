//NOTE
//js get value of function as well as variable
//นิพจน์ เขียนยังไงก็ได้ให้ออกมาสุดท้ายค่าค่านึง ซึ่งค่านั้น จะเป็นตัวแปร หรือ ฟังก์ชันก็ได้
// may be have named function or not จะมีหรือไม่มีก็ได้ : function have 2 type
// - function expession  :ไม่ต้องมี คือการกำหนดฟังก์ชันให้กับตัวแปร
// - function decaration :ต้องมีชื่อเสมอ 
//const do not change referrence address if be object

//function decaration 
function getLastElement(arr){ 
arr[0]=999
return arr?.[arr?.length-1]
}

//execute function 
console.log(getLastElement([1,5,15]))
const nums=[10,20,30]
console.log(nums)
console.log("Before num : "+nums[0])
console.log("Last of array : "+getLastElement(nums))
console.log("After num : "+nums[0])
//execute function
// let num=[10,20,30]
// function getLastElement (arr){ 
//     return arr?.[arr?.length-1]
// }
// console.log(getLastElement([1,5,15]))
// console.log(getLastElement(num))

//function expresion
const doSomething = function(base,exp){
    return base ** exp //power 
}

//execute functions
console.log(doSomething(5,2))
console.log(typeof doSomething)

let doIt1=doSomething
console.log(typeof doIt1)

let doIt2=doSomething(10,2)
console.log(typeof doIt2)

//hoisting นิยมใช้กับ var scope ซึ่งไม่แนะนำ : เรียกฟังก์ชันให้ทำงานก่อนจะกำหนดฟังก์ชัน (รันผ่าน)

