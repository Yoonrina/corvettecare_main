//오프닝
$('#op1').each(function(index,item){

  gsap.fromTo(item,{
    height:'100%',
  },{
    scrollTrigger:{
      trigger:item,
      start:"top 100%",
      //markers:true,
    },
    height:0,
    duration:1,
  })

})
$('#op2').each(function(index,item){

  gsap.fromTo(item,{
    height:'100%',
  },{
    scrollTrigger:{
      trigger:item,
      start:"top 100%",
      //markers:true,
    },
    height:0,
    duration:1,
    delay:0.1
  })

})
$('#op3').each(function(index,item){

  gsap.fromTo(item,{
    height:'100%',
  },{
    scrollTrigger:{
      trigger:item,
      start:"top 100%",
      //markers:true,
    },
    height:0,
    duration:1,
    delay:0.2
  })

})


//sc_03
$('.up').each(function(index,item){

  gsap.fromTo(item,{
    opacity:0,
    yPercent:70,
  },{
    scrollTrigger:{
      trigger:item,
      start:"top 100%",
      //markers:true,
    },
    opacity:1,
    yPercent:0,
    duration:1,
  })

})

$('.op').each(function(index,item){

  gsap.fromTo(item,{
    opacity:0,
    yPercent:0,
  },{
    scrollTrigger:{
      trigger:item,
      start:"top 100%",
      //markers:true,
    },
    opacity:1,
    yPercent:0,
    duration:1,
    delay:0.5
  })

})



//sc_04 main_title 부분
$('.up2').each(function(index,item){

  gsap.fromTo(item,{
    yPercent:70,
  },{
    scrollTrigger:{
      trigger:item,
      start:"top 100%",
      //markers:true,
    },
    opacity:1,
    yPercent:0,
    duration:1,
  })

})

$('.up_s1').each(function(index,item){

  gsap.fromTo(item,{
    opacity:0,
    yPercent:70,
  },{
    scrollTrigger:{
      trigger:item,
      start:"top 100%",
      //markers:true,
    },
    opacity:1,
    yPercent:0,
    duration:1,
    delay:0.2
  })

})

$('.up_s2').each(function(index,item){

  gsap.fromTo(item,{
    opacity:0,
    yPercent:70,
  },{
    scrollTrigger:{
      trigger:item,
      start:"top 100%",
      //markers:true,
    },
    opacity:1,
    yPercent:0,
    duration:1,
    delay:0.4
  })

})
