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
const navLinks = document.querySelectorAll("header nav a")

window.onscroll = function(){
    section.forEach(function(item){
        let top = window.scrollY
        let offset = item.offsetTop - 200
        let height = item.offsetHeight
        let id = item.getAttribute("id")
        if( top >= offset && top < offset + height){
            navLinks.forEach(function(link){
                const headlink = document.querySelector(`header nav a[href='#${id}' ]`)
               link.classList.remove("active")
               headlink.classList.add("active")
            })
        }
    })


}


// ============================  portfolio btn js  ===================================
const portfolioBtn = document.querySelectorAll(".portfolio-btn")
const sectionCon = document.querySelector(".services-container")
const sectionText = document.querySelectorAll(".p")

sectionCon.addEventListener("click", function(e){
    e.preventDefault()
    let id = e.target.id
    if (id){ // it means if the id is true
            sectionText.forEach(function(list){
                if(e.target.previousElementSibling.classList.contains("hide")){
                    list.classList.remove("hide")
                    list.nextElementSibling.classList.add("hide")
                    e.target.previousElementSibling.previousElementSibling.classList.add("hide")
                    e.target.previousElementSibling.classList.remove("hide")
                }else{
                    list.classList.remove("hide")
                    list.nextElementSibling.classList.add("hide")
                    e.target.previousElementSibling.previousElementSibling.classList.remove("hide")
                    e.target.previousElementSibling.classList.add("hide")
                }
            })
            portfolioBtn.forEach((btn)=>{
                if(e.target.textContent === "Read More"){
                    btn.textContent = "Read More"
                    console.log(btn)
                    e.target.textContent = "End"
                }else{
                    btn.textContent = "Read More"
                    console.log(btn)
                    e.target.textContent = "Read More"
                }
            })
       
    }
})


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
ScrollReveal().reveal('.form-inner ', { origin: "bottom" });


// ============================  for typed js  ===================================
const typed = new Typed(".mtext", {
     strings: ["frontend developer", "graphic designer", "tutor"],
     typeSpeed: 200,
     backSpeed : 100,
     backDelay: 1200,
     loop: true
})



// ============================  form ===================================
 function sendEmail(){
    Email.send({
        SecureToken: "46e06c13-a0f7-41b2-9f2b-6ff5265ab159 ",
        To : 'oscar.nnoje@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : document.getElementById("message").value + `<br>` + document.getElementById("email").value
    }).then(
        message => alert(message)
        )
 }








//  C7C7759A69C415CB9AE090C6D576C83F162Dqw