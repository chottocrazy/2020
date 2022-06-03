var w;
var h;
var count = 0;

var str = "";
var words = str.split("/");

var notes = 0;
var noteIndex = 0;

$(document).ready(function(){
  let isTextNode = (_, el) => el.nodeType === Node.TEXT_NODE;

  w = $(window).width();
  h = $(window).height();
  var div = $("#click");
  div.css({
    height: '100vh',
    width: '100vw',
  });

  div.css("font-size", w/5);

  div.addClass("on");
  $("#click").append(div);
  div.append(words[count]);
  count++;

  //recursion
  $("div").on("click", function(event){
      noteIndex++;
      if(noteIndex >= notes.length){
        noteIndex = 0;
      }

      var text = $(event.target).contents().filter(isTextNode);
      $(event.target).contents().filter(isTextNode).remove();

      var bgrimg = null;
      if($(event.target).css("background-image") == "none"){
                //var currcolor = $(event.target).css("color");

      var div = $("<div>");
      var div_2 = $("<div>");
      var parentw = parseInt($(event.target).css("width"), 10);
      var parenth = parseInt($(event.target).css("height"), 10);
      var rand = Math.random();
      if(rand > 0.1){
        div_2.append(words[count]);
        count++;
      }
      if(parentw > parenth){
        div.css({
          height: '100%',
          width: '50%'
        });
        div_2.css({
          height: '100%',
          width: '50%'
        });

      } else {
        div.css({
          height: '50%',
          width: '100%'
        });
        div_2.css({
          height: '50%',
          width: '100%'
        });
      }

      div.css("font-size", parenth/6);
      div_2.css("font-size", parenth/6);

      div.addClass("on");
      div_2.addClass("on");

      $(event.target).append(div);
      $(event.target).append(div_2);
      $(event.target).removeClass("on");
      $(event.target).addClass("off");
      event.stopPropagation();
    }
});
});

$(window).resize(function(){
  w = $(window).width();
  h = $(window).height();
});
