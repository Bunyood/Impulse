let openModal = document.querySelector(".modal__hamburger");
let closeModal = document.querySelector(".modal__cancel");
let modal = document.querySelector(".modal");

openModal.addEventListener("click", function(evt){
    evt.preventDefault();
    modal.classList.add("modal__active");
})
closeModal.addEventListener("click", function(){
    modal.classList.remove("modal__active");
})

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
        
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
        
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    // autoplay:true,
    // autoplayTimeout:1000,
    // autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})