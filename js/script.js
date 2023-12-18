$(document).ready(function(){
  // 슬라이드
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 스크롤내리면 휴대폰이미지줄어듬
  $(window).on('scroll' , function() {
    if (window.scrollY > 130) {
    $('.con1>ul>li:nth-child(3)>img').css('width' , '360px')
    $('.con1>ul>li:nth-child(3)>img').css('transition', '0.5s')
    } else {
      $('.con1>ul>li:nth-child(3)>img').css('width' , '600px') 
      $('.con1>ul>li:nth-child(3)>img').css('transition', '0.5s')
    }

  })



  //배너 hover하면 확대되게

});


// function zoomIn(event){
//   event.target.style.transform = "scale(1.2)";
//   event.target.style.zIndex = 1;
//   event.target.style.transition = "all 0.5s";
// }

// function zoomOut(event){
//   event.target.style.transform = "scale(1)";
//   event.target.style.zIndex = 0;
//   event.target.style.transition = "all 0.5s";
// }