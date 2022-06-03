var w;
var h;
var str = "";
var sentences = str.split(".");
console.log(sentences);

var lastScrollTop = 0;
var blur = 0;
var blur_r = 0;
var reverse = false;

$(document).ready(function(event){
  for(let sentence of sentences){
      var span;
      if(reverse){
        span = $('<span />').addClass("blurry-r").html(sentence);
        reverse = false;
      } else {
        span = $('<span />').addClass("blurry").html(sentence);
        reverse = true;
      }
      $("#container").append(span);
  }
});

$(window).scroll(function(event){
  var st = $(this).scrollTop();
    $(".blurry").css("text-shadow", "0 0 " + blur + "px rgba(0, 100, 100, 1)");
    $(".blurry-r").css("text-shadow", "0 0 " + blur_r + "px rgba(0, 100, 100, 1)");
  console.log(st);
  if (st > lastScrollTop){
    //scrolled down
    if(blur < 100){
      blur += 1;
    }
    if(blur_r > 0){
      blur_r -= 1;
    }

  } else {
    //scrolled up
    if(blur_r < 100){
      blur_r += 1;
    }
    if(blur > 0){
      blur -= 1;
    }
  }
  lastScrollTop = st;


});



$(window).resize(function(){
  w = $(window).width();
  h = $(window).height();
});
