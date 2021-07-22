var Form1 = document.getElementById("Form1")
var Form2 = document.getElementById("Form2")
var Form3 = document.getElementById("Form3")
var Next1 = document.getElementById("Next1")
var Back1 = document.getElementById("Back1")

Next1.onclick = function() {
  Form1.style.left= "-450px"
  Form2.style.left= "40px"
}

Back1.onclick = function() {
  Form1.style.left= "40px"
  Form2.style.left= "450px"
}
