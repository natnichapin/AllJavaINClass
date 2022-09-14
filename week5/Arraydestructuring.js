let arr1 =['hello world','Good night','Good morning']  
let [greeting1, greeting2,...otherGreeting1] = arr1
//... is less operator that keep values are remain 
//let greeting1 = arr1[0]
//let greeting2 = arr1[1]

//ถ้าไม่ใส่ , หน้า มันจะเริ่มที่ตัวเลข 

console.log(greeting1)
console.log(greeting2)
console.log(otherGreeting1)

let a=[true,null,5]
let b=[...a] //spread -> ...other แทนการกระจาย 
console.log(b) 

let [x,...y]=a //rest -> ...other แทนการครอบ ตัวที่เหลือ
console.log(x)
console.log(y) 

let str='Beginner' 
let letters=[...str] 
console.log(letters) 
for(const [index, letter] of letters.entries()){
    //const [index,letter] = letter.enties() 
    console.log(`index ${index},letters${letter}`)  
}
