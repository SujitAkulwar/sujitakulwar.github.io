document.querySelectorAll(".nav-link").forEach(btn => {

btn.addEventListener("click", () => {

const target = btn.getAttribute("data-scroll-target")

const element = document.getElementById(target)

if(element){

element.scrollIntoView({
behavior: "smooth"
})

}

})

})