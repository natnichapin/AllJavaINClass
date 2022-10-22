//กฎ closures  
// 1.nested functions 
//2. keep values that not owned by it
//3.return closures
//NOTE: similar to class because this implement from function 
function counter() {
    //free variable   
     let count = 0   
      function increment() {
     return count++  
      }
    function decrement() {
     return count--   
     }
    function getCount() {
     return count   
     }
    return {
        increment,
        decrement,
        getCount    
    }
   }
//object destructuring
const {increment,decrement, getCount}=counter()
increment()
increment()
console.log(getCount())
//    const c=counter()   
 //c={increment:increment, decrement:decrement, getCount:getCount}
 //    c.increment()
 //    c.increment()
 //    c.increment()
 //    c.decrement()
 //    console.log(c.getCount())

 //คอนเซปในการ เขียน class