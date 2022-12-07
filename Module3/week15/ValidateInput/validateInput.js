const createBtn = document.getElementById('submit')
createBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const allInputEles = document.querySelectorAll('input')
    const isValidInput = Array.from(allInputEles).every(
        (inputEle) => inputEle.value.length !== 0)
    const pEle = document.querySelector('p')
    if (isValidInput) {
        pEle.textContent = 'your account has been created!'   
         pEle.style = 'color:green'
    } else {
        pEle.textContent = 'missing some values, please try again'   
         pEle.style = 'color:red'
    }
})