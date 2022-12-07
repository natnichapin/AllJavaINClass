const yourName = prompt('Who are you?', 'enter your name')
if (yourName === null) alert('Welcome, guest')
else {
  const isConfirm = confirm(`Are you ${yourName}?`)
  isConfirm ? alert(`Welcome, ${yourName}`) : alert('Welcome')
}