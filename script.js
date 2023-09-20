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
/****************BackToTopButton**********************/
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
/***********************Navbar****************************/
function navBar() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").classList.add("navbar-shrink")
    var img = document.getElementById("logo")
    img.src = "./media/logo.png"
    var navlinks = document.querySelectorAll(".nav-link")
    navlinks.forEach(link => {
      link.classList.remove("nav-link-color")
    })
    img.style.width = "200px"
  } else {
    document.getElementById("nav").classList.remove("navbar-shrink")
    var img = document.getElementById("logo")
    img.src = "./media/logo3.png"
    var navlinks = document.querySelectorAll(".nav-link")
    navlinks.forEach(link => {
      link.classList.add("nav-link-color")
    })
    img.style.width = "230px"
  }

  if (
    document.body.scrollTop > 375 ||
    document.documentElement.scrollTop > 375
  ) {
  }
}

window.addEventListener("scroll", navBar)
window.addEventListener("load", () => {
  var navlinks = document.querySelectorAll(".nav-link")
  navlinks.forEach(link => {
    link.classList.add("nav-link-color")
  })
})
typeWriter()
