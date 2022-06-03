var str = "";
var sentences = str.split(".");
var lastScrollTop = 0;
var reverse = false;

var scrool = new Tone.AMSynth().toMaster();
var autoFilter = new Tone.AutoFilter({
}).connect(Tone.Master);

autoFilter.start()
StartAudioContext(Tone.context, 'div');
//have to click to start audio context
$('div').click(function(){
  Tone.start();
});

$(window).scroll(function(event){
  var st = $(this).scrollTop();
  console.log(st);
  if (st > lastScrollTop){
  //scrolled down
scrool.triggerAttackRelease("C4", 2);
  } else {
  //scrolled up
    scrool.triggerAttackRelease("G4", 2);
  }
  lastScrollTop = st;

});



$(window).resize(function(){
  w = $(window).width();
  h = $(window).height();
});
