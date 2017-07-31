var brush = document.querySelector('.brush')
var currentColor = 'green'

controlForm = document.querySelector('form')

controlForm.addEventListener('submit', function(event) {
  event.preventDefault()
  currentColor = event.target.querySelector('input').value
  brush.style.backgroundColor = currentColor
})

$(document).ready(function () {
  console.log('DOM ready')
})

var paint = function(event) {
  event.target.style.backgroundColor = currentColor
}

var background = document.querySelector('#body')
  for (var i = 0; i < 20; i++) {
    var div = document.createElement('div')
    div.className += 'square'
    background.appendChild(div)
    div.addEventListener('click', paint)
  }
