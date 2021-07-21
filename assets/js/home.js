document.addEventListener('DOMContentLoaded', ()=>{
const hamburger = document.getElementById("mobile-nav-control");
const nav = document.getElementById("main-nav").getElementsByTagName("nav")[0];
const hamburger_line = hamburger.getElementsByClassName("hamburger-icon");
const services = document.getElementById("Services").getElementsByTagName("svg");
const testimonial = document.getElementById("Testimonials").getElementsByTagName("svg");


//Prev and Next Button initialization
const services_prev_button = services[0];
const services_next_button = services[1];
const testimonial_prev_button = testimonial[0];
const testimonial_next_button = testimonial[1];

//initializes button clicks to match carosel
let testimonial_set = 0;
let services_set = 0;

//Carosel display
let services_carosel = document.getElementById("Services").getElementsByClassName("set");
services_carosel[services_set].classList.toggle("after");

let testimonial_carosel = document.getElementById("Testimonials").getElementsByClassName("set");
testimonial_carosel[testimonial_set].style.display = "block";

    hamburger.addEventListener("click", ()=>{
        nav.classList.toggle("open");
        hamburger_line[0].classList.toggle("top");
        hamburger_line[1].classList.toggle("middle");
        hamburger_line[2].classList.toggle("bottom");
    })

    testimonial_prev_button.addEventListener("click", ()=>{
        console.log("prev works");
        if(testimonial_set != 0){
            let temp = testimonial_set;
            testimonial_set--;
            testimonial_carosel[temp].style.display = "none";
            testimonial_carosel[testimonial_set].style.display = "block";
        }
    })

    
    testimonial_next_button.addEventListener("click", ()=>{
        console.log("next works");
        if(testimonial_set < 3){
            let temp = testimonial_set;
            testimonial_set++;
            testimonial_carosel[temp].style.display = "none";
            testimonial_carosel[testimonial_set].style.display = "block";
        }
    })

    services_prev_button.addEventListener("click", ()=>{
        console.log("prev serve works");
        if(services_set != 0){
            let temp = services_set;
            services_set--;
            services_carosel[temp].classList.toggle("after");
            services_carosel[services_set].classList.toggle("after");
            
        }
    })

    services_next_button.addEventListener("click", ()=>{
        console.log("next serve works");
        if(services_set < 2){
            let temp = services_set;
            services_set++;
            services_carosel[temp].classList.toggle("after");
            services_carosel[services_set].classList.toggle("after");
        }
    })
})