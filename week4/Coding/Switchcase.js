let letter = 'A' 
let grade 
switch (letter) {  //If we not break case it will run until end 
    case 'a' :
    case 'A': grade = 'A' 
    break

    case 'B': grade = 'B' 
    break

    case 'C': grade = 'C' 
    break
    
    default: grade = 'F' 
       
}
console.log(grade)