//if value is not null and undefined 
//True  -> return left value 
//False -> return right valuereturn right value

let arr =[5,10,15]
let newArr=arr??[] // return : empty array
console.log(newArr.length)


let a 
let value = a??cat('malee',2) 
console.log(`cat-> ${value.name} , ${value.age}`)

 function cat(name,age)  {
     let cat={name: name,age:age} 
     return cat
    
 }

 let fx = (name)=>"Hello World"+name   
 console.log(fx(" PIN"))