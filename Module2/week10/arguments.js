function doSomething(a,b,c,d){
    // console.log(a) 
       // console.log(b)   
        // console.log(c)   
         // console.log(d)   
          for(const a of arguments){
        console.log(a)
    }
    arguments[0]=1000   
     console.log(a)
    console.log(arguments.length)
}
doSomething(10,20,300)