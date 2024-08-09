let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};
// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});


// 
const slides = document.querySelectorAll(".slide");
var counter =0;
slides.forEach(
    (slide ,index)=>{
        slide.style.left =`${index*100}%`
    }
);

const goNext=()=>{
    if(counter < 3){
        counter++;
        slideImage()
    }else if(counter === 3){
      counter = 0;
      slideImage()
    };
}
const goPrev=()=>{
    if(counter > 0){
        counter--;
        slideImage()}
   
}
// sliding
const slideImage =() =>{
    slides.forEach((slide)=>{
        slide.style.transform =`translateX(-${counter * 100}%)`

    })
};

// Toast Section FRom nav bar button
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}