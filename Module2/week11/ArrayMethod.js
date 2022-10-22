function callback(a,index,arg){ 
    return    a+1 === arg[index+1]
}

const  b = [9,10,11,2]
console.log(b.every(callback));  
const  c = ['natnicha','Sirinipatkul','Ai']
c.splice(1,0,"ReplaceWords")
console.log(c);

//for each ใช้แทน for ได้ 