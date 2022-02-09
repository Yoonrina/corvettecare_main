$(function(){
  //sc_01 마우스오버이벤트
  $('.main_title > a').mouseover(function(){
    target = $(this).attr('href');
    setTimeout(function(){
      $(target).addClass('hover_bg').siblings().removeClass('hover_bg');
    },600);
  })
  
  
  
  //sc_03 슬라이드
  var reviewsSlide = new Swiper(".reviews_box", {
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

  //엑티브가 된 영역의 텍스트만 실행되기
  function textAni(){
    const headTxt = new SplitType('.reviews_box .swiper-slide-active .r_v_txt', { types: 'words, chars', });

    motion = gsap.from(headTxt.words,{
        opacity:0,
        yPercent:50,
        stagger:0.05,
    })
    
    motion.play();
    //motion.pause();
    //motion.restart();
  
    // $('.s_btn').click(function(){
    //   motion.restart();
    // });
  }
  textAni();

  reviewsSlide.on('slideChangeTransitionStart', function () {
    textAni();
  });


  //sc_04 탭구현
  $('.rest_teb').click(function(e){
    e.preventDefault();
    target = $(this).attr('href');
  
    $('.rest_teb').removeClass('on');
    $(this).addClass('on');
  
    $('.rest_item').removeClass('on');
    $(target).addClass('on');
  })
  
  //sc_04 슬라이드
  var swiper = new Swiper(".r_box", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints: {
      1000: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });
  
  //sc_04 모바일 아코디언
  $('.rest_m_item').click(function(e){
    e.preventDefault();
    h = $(this).children('.rest_m_sub').children('.sub_wrap').outerHeight();
  
    if($(this).hasClass('on')){
  
      $(this).removeClass('on');
      $(this).children('.rest_m_sub').css({height:h}).stop().animate({height:0},200);
  
    }else{
  
      $('.rest_m_item').removeClass('on');
      $(this).addClass('on');
      
      $('.rest_m_sub').stop().animate({height:0},200);
      $(this).children('.rest_m_sub').css({height:0}).stop().animate({height:h},200);
    }
  })
  
  })