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

AOS.init()

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
})
let p = document.querySelectorAll(".p_more")
console.log(p)
function readmore() {
  if (p[0].classList.contains("visually-hidden")) {
    p[0].classList.remove("visually-hidden")
    console.log(p)
  } else {
    p.classList.add("visually-hidden")
  }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href").substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const offset = parseInt(this.getAttribute("data-offset")) || 0
      const offsetTop =
        targetElement.getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top: offsetTop - offset,
        behavior: "smooth",
      })
    }
  })
})
