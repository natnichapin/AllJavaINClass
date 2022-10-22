//Default function parameters 
function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));
  // expected output: 10
  
  console.log(multiply(5));
  // expected output: 5
  //จะได้ค่า b เป็น 1 หากไม่มีค่า หรือ เป็น undefined 
  //ใช้ได้กับทุก ฟังก์ชัน