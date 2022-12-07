function upArray(arr){
   /* if( arr===undefined || arr.lenght ===0 ){ return  null }
    if( arr.some(x=>x<0 || ( x > 9 ))
    
    let y , z =arr.join('') ,Sum =(o)=>[...String(Number(o)+1)].map(x=>Number(x))
    if(z.startsWith('0')){ 
      y=arr.splice(0,arr.findIndex(x=>x>0))
                      return   [...z=y+Sum(z)].map(x=>Number(x))
    }
   return Sum(z)*/
    
  }

console.log(upArray([2,3,9,9]));
console.log(upArray([0,7]));
console.log(upArray([-1,7]));
console.log(upArray([1,77]));
console.log(upArray());