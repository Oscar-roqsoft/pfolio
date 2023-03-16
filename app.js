// for toggling
const toggleBtn = document.getElementById("menu-icon")
const navbarDisplay = document.querySelector(".navbar")

toggleBtn.addEventListener("click", function(){
    navbarDisplay.classList.toggle("show-navbar")
    toggleBtn.classList.toggle("fa-times")
})

// toggling with the back-to-top icon display
const toplink = document.querySelector(".top-link")
window.addEventListener("scroll",function(){
    const scrollheight = window.pageYOffset
    // console.log(scrollheight)
    if( scrollheight > 550 ){
        toplink.classList.add("show-link")
    }else{
        toplink.classList.remove("show-link")
    }
})

const navLink = document.querySelectorAll(".nav-link")
navLink.forEach(function(link){
    link.addEventListener("click",function(e){
        navbarDisplay.classList.toggle("show-navbar")
        toggleBtn.classList.toggle("fa-times")
    })
})


// scroll section
const section = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-link")

window.onscroll = function(){
    section.forEach(function(item){
        let top = window.scrollY
        let offset = item.offsetTop - 200
        let height = item.offsetHeight
        let id = item.getAttribute("id")
        if( top >= offset && top < offset + height){
            navLinks.forEach(function(link){
               link.classList.remove("active")
               document.querySelector(`header nav a[href='#${id}' ]`).classList.add("active")
            })
        }
    })

// ============================  sticky top(how to add sticky top)  ===================================

let header = document.querySelector("header")
header.classList.toggle("sticky",window.scrollY)

}


// ============================  scroll reveal  ===================================

ScrollReveal({
    reset: true,
    distance: "100px",
    duration: 2000,
    delay: 200
})


ScrollReveal().reveal('.home-content ', { origin: "bottom" });
ScrollReveal().reveal('.heading ', { origin: "top" });
ScrollReveal().reveal('h3 ', { origin: "left" });


// ============================  for typed js  ===================================
const typed = new Typed(".mtext", {
     strings: ["frontend developer", "graphic designer", "tutor"],
     typeSpeed: 200,
     backSpeed : 100,
     backDelay: 1200,
     loop: true
})

