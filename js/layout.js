$(function(){

  //헤더 스크롤
  $('body').on('mousewheel',function(e){
  
    var wheel = e.originalEvent.wheelDelta;
    curr = $(window).scrollTop();
    //console.log(wheel+'////'+curr);
  
    if(wheel>0){//올릴때 
      $('.header_pc').addClass('up');
      if(curr<=700){
        $('.header_pc').removeClass('fixed')
        $('.header_pc').removeClass('dark')
      }
    }else{  //내릴때 
      if(curr>=700){
        $('.header_pc').addClass('fixed')
        $('.header_pc').addClass('dark').removeClass('up');
      }
    }
  });
  
  
  //헤더서브메뉴
  $('#sub').mouseover(function(){
  
    h = $(this).siblings('.sub_box').children().outerHeight();
  
    $('.sub_box').stop().animate({height:0},1000,'easeOutBounce');
    $('.sub_box').stop().animate({height:h},1000,'easeOutBounce');
    $('.header_pc').addClass('white');
  })
  
  $('header').mouseleave(function(){
  
    $('.sub_box').stop().animate({height:0},1000,'easeOutBounce');
    $('.header_pc').removeClass('white');
  })
  
  
  //모바일 전체메뉴 오픈
  $('.all_btn').click(function(e){
    e.preventDefault();
    
    if($('.header_pc').hasClass('mo')){
      $('.header_pc').removeClass('mo');
      $('.header_m_menu').removeClass('mo');
      $('body').removeClass('hidden');
      $(this).removeClass('all');
    }else{
      $('.header_pc').addClass('mo');
      $('.header_m_menu').addClass('mo');
      $('body').addClass('hidden');
      $(this).addClass('all');
    }
  })
  
  //모바일 전체메뉴 - 서브메뉴부분
  $('.sub_arrow > a').click(function(e){
    e.preventDefault();
    h = $('.m_sub_box').children('.m_sub_list').outerHeight();
    
    if($('.sub_arrow').hasClass('open')){
      $('.sub_arrow').removeClass('open');
      $('.m_sub_box').stop().animate({height:0},200);
    }else{
      $('.sub_arrow').addClass('open');
      $('.m_sub_box').stop().animate({height:0},200);
      $('.m_sub_box').stop().animate({height:h},200);
    }
  })
  
  
  
  
  
  })