let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');

window.onscroll = () =>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
}

searchbtn.addEventListener('click', () =>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
});

//nav ends here-----------------------------


var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:false,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    }
});
var swiper = new Swiper(".brand-slider", {
    spaceBetween:20,
    loop:false,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    }
});