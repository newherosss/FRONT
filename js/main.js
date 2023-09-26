


let scrHig = $('section').height();

$(window).on('scroll',function(){

    let scr = $(window).scrollTop();
      
    if(scr >= 0 && scr < scrHig){
      $('nav').stop().animate({'right':'-100%'})
    }   
    if(scr >= scrHig){
      $('nav').stop().animate({'right':0})
    }


    function liClass(e){
      $('nav li').eq(e).addClass('on').siblings().removeClass('on')
  }

  if(scr >= 0 && scr < scrHig){
      liClass(0)
  }

  if(scr >= scrHig && scr < scrHig*2){
      liClass(1)
  }

  if(scr >= scrHig*2 && scr < scrHig*3){
      liClass(2)
  }

  if(scr >= scrHig*3 && scr < scrHig*4){
      liClass(3)
  } 

  if(scr >= scrHig*4){
      liClass(4)
  }

});

const $drop = document.querySelector(".dropBox");
const $title = document.querySelector(".dropBox h1");

$drop.ondrop = (e) => {
  e.preventDefault();
  $drop.className = "dropBox";
   
  const files = [...e.dataTransfer?.files];

  $title.innerHTML = files.map(v => v.name).join("<br>");
}

$drop.ondragover = (e) => {
  e.preventDefault();
}

$drop.ondragenter = (e) => {
  e.preventDefault();
 
  $drop.classList.add("active");
}

$drop.ondragleave = (e) => {
  e.preventDefault();
  
  $drop.classList.remove("active");
}

