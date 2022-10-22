function outer(){      
    function inner(x){
        return 'inner here '+x    }
    return inner}
//1console.log(outer()('someone'))
//2const inFn=outer()
console.log(inFn('somewhere'))