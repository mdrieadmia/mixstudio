// ====== Slick Slider Part Start ========//
// -------- Feature Slider ----------
$('.feature_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 1000,
  arrows:true,
  centerPadding: '0px',
  centerMode:true,
  prevArrow: '<i class="fa-solid fa-chevron-left prevarrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right nextarrow"></i>',
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode:false,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// ------ Templates Slider --------//
$('.templates_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 1000,
  arrows:false,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        centerMode:false,
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode:false,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode:false,
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// -------- Slick Slider Part End -----------//
// ======= Sticky Navbar Part Start ==========//
let navbar = document.querySelector('.navbar');
window.addEventListener("scroll", ()=>{
  let scrolling  = this.scrollY;
  console.log(scrolling)
  if(scrolling > 100){
      navbar.classList.add("sticky_navbar");
  }
  else{
      navbar.classList.remove("sticky_navbar");
  }
})
// -------- Sticky Navbar Part End --------//
// ====== Counter Part Start ========//
$('.count').counterUp({
  delay: 10,
  time: 2000
});
// -------- Counter Part End -----------//
// ============= back to top button Start ==============//
let top_button  =document.querySelector(".top_button")
window.addEventListener("scroll", ()=>{
  let scrolling  = this.scrollY;
  console.log(scrolling)
  if(scrolling > 300){
    top_button.classList.add("go_top");
  }
  else{
    top_button.classList.remove("go_top");
  }
})
top_button.addEventListener('click',function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
})
// -------- Back to top button end -------//