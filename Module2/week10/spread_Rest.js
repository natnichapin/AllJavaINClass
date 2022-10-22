 //Rest parameter
function sum(num1, num2, num3=0) {
    console.log(num1)
    console.log(num2)
    console.log(num3)
    return num1 + num2 + num3
    }
    let nums = [5, 20]
    //spread parameter
 console.log(sum(...nums))

 function sum(num1, num2, num3=0) {
    console.log(num1)
    console.log(num2)
    console.log(num3)
    return num1 + num2 + num3
 }