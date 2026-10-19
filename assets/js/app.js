$(document).ready(function(){


let searchInput=document.querySelector('.search_input');
let searchPopUp=document.querySelector('.search_popup');
let searchClose=document.querySelector('.search_close');
let heroSec=document.querySelector('#hero');

searchInput.addEventListener('click' , function(){
    searchPopUp.classList.add('search_popup_active');

});

searchClose.addEventListener('click' , function(){
  searchPopUp.classList.remove('search_popup_active');
});


searchPopUp.addEventListener('click' , function(e){
  if(e.target.classList.contains('search_popup_active'))
    {
      searchPopUp.classList.remove('search_popup_active');

    }
});

//----------------------------------for hero section--------------------
//------------------------for hero section slider--------------------
$('.sliders').slick({
       
    arrows: true,
    nextArrow: `<span class="next_btn"><i class="fa-solid fa-arrow-right"></i></span>`,
    prevArrow: `<span class="prev_btn"><i class="fa-solid fa-arrow-left"></i></span>`,
    dots:true,
    autoplay:true,
    autoplaySpeed:2000,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
       arrows:false,
       dots:false
      }
    }
  
  ]
});
   
 
//----------------------------------for hero section--------------------

//-------------------------------------product-----------------------------

  var mixer=mixitup('#Grid');
//----------------------------------product end--------------------------



//-----------------------------------deal ar timer-----------------------------------

const targetDate = new Date("2026-10-31T23:59:59").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference < 0) {
    clearInterval(timer);
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    return;
  }

  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  
  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}, 1000);
//-----------------------------------deal ar timer end-----------------------------------


});