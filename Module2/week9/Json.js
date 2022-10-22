

//Ways to check if an Object is Empty
const obj1={}
const obj2={id:1,product:'pen'}
//way1 : used stringify
console.log(JSON.stringify(obj1)==='{}'?'empty':'not empty')
console.log(JSON.stringify(obj2)==='{}'?'empty':'not empty')
//way2 : used Object.keys
console.log(Object.keys(obj1).length===0?'empty':'not empty')
console.log(Object.keys(obj2).length===0?'empty':'not empty')

