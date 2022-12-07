//const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
    if(allItems===null ||allItems===undefined){ return undefined;}
    if(allItems.length===0){return allItems}
    if((rowsPerPage<=0 || rowsPerPage===0)||(currentPage<=0||currentPage===0)){return allItems}
return allItems.slice(((currentPage-1)*rowsPerPage),currentPage*rowsPerPage)
//currentPage*rowsPerPage
}
const codeId='US1001'
function doSomething(){return 'do it'}
//module.exports = {codeId,doSomething,getItemsOfCurrentPage}
export {codeId,doSomething,getItemsOfCurrentPage}

