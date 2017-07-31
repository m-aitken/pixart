var brush = document.querySelector('.brush')
var currentColor = document.getElementById('color-field').value

controlForm = document.querySelector('form')
controlForm.addEventListener('submit', function(event) {
  event.preventDefault()
  currentColor = event.target.querySelector('input').value
  brush.style.backgroundColor = currentColor
})