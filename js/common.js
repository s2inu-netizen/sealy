$(document).ready(function(){//시작

//2차메뉴

//$(".gnb > li").mouseenter(function(){


  //$(this).children(".depth2").stop().fadeIn();

//});


//$(".gnb > li").mouseout(function(){


  //$(this).children(".depth2").stop().fadeOut();

//});

$(".gnb > li").hover(function(){

  $(this).children(".depth2").stop().fadeToggle();
})

//모바일메뉴


$(".ham").click(function(){
  $(".dim").fadeIn();
  $(".mgnb-wrap").animate({"right" : "0"});
});

$(".mgnb-close").click(function(){
  $(".dim").fadeOut();
  $(".mgnb-wrap").animate({"right" : "-100%"});

});

//검색

$(".btn-search").click(function(){

  $(".search").fadeIn();

});

$(".search-close").click(function(){

  $(".search").fadeOut();

});


const visual_list = new Swiper(".visual-list",{

  effect: "fade", 
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,
  loop: true,//슬라이드 반복 (centeredSlides 같이사용안됨)
    autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
  pagination: {
    el: '.swiper-pagination',
    //dynamicBullets: true, <--엘립스 순서바가 커짐
     type: 'fraction',
    },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    



})

const about_txt_list = new Swiper(".about-txt-list",{

effect: "fade",    //서서히 장면이 사라짐.
	  fadeEffect: {
    crossFade: true
  },


});

const about_img_list = new Swiper(".about-img-list",{

  speed: 1000,
  loop: true,//슬라이드 반복 (centeredSlides 같이사용안됨)
     autoplay: {
           delay: 5000,
           disableOnInteraction: false,
         },
  pagination: {
    el: '.swiper-pagination',
    //dynamicBullets: true, <--엘립스 순서바가 커짐
    // type: 'fraction',
    clickable : true, 
    },



});


about_txt_list.controller.control = about_img_list;
about_img_list.controller.control = about_txt_list;

const prd_list = new Swiper(".prd-list",{

  
  centeredSlides: true,
  speed: 1000,
  loop: true,//슬라이드 반복 (centeredSlides 같이사용안됨)
     autoplay: {
           delay: 3000,
           disableOnInteraction: false,
         },
  navigation: {
    nextEl: '.prd-next',
    prevEl: '.prd-prev',
    },
  slidesPerView: 1, 
  breakpoints: {
          1000: {
            //가로해상도가 1200px 이상일 경우
            slidesPerView: 2, 
          },
          1400: {
            //가로해상도가 768px 이상일 경우
            slidesPerView: 3,
          },
         
        },

});




$("#collection ul li").hover(function(){

  //사용자가 선택한 li -> this 한테 클래스를 붙히고 나머지는 지워야함

  $(this).addClass("active").siblings().removeClass("active");
});


});//끝

// mouseenter : 마우스가 올라갔을때
// mouseout : 마우스가 나갔을때
// hover : 마우스가 올라갈때, 벗어날때는 각가 이벤트를 발생시킴