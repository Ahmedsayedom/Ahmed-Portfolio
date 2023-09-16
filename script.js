var i = 0
var isDeleting = false
var textArray = ["Full Stack Web Developer", "Software Developer"]
var speed = 100
var textIndex = 0

function typeWriter() {
  var txt = textArray[textIndex]

  if (!isDeleting && i <= txt.length) {
    document.getElementById("demo").innerHTML = txt.substring(0, i)
    i++
    setTimeout(typeWriter, speed)
  } else if (isDeleting && i >= 0) {
    document.getElementById("demo").innerHTML = txt.substring(0, i)
    i--

    setTimeout(typeWriter, speed / 3)
  } else {
    isDeleting = !isDeleting
    if (!isDeleting) {
      textIndex = (textIndex + 1) % textArray.length
    }
    setTimeout(typeWriter, isDeleting ? 3000 : 300)
  }
  if (i > txt.length) {
    document.getElementById("cursor").classList.add("typed-cursor--blink")
  } else {
    document.getElementById("cursor").classList.remove("typed-cursor--blink")
  }
}
typeWriter()

var backToTopButton = document.getElementById("back-to-top")

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    backToTopButton.style.display = "block"
  } else {
    backToTopButton.style.display = "none"
  }
})
