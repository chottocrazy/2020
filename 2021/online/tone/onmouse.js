var speed = 1000;

var paragraphs = [];
var word_index = 0;

var volume = new Tone.Volume();
var onmouse = new Tone.Synth(4, Tone.Synth).chain(volume, Tone.Master);
var oncount = Tone.Frequency("F1").harmonize([
  4, 7, 11, 14, 17, 21, 24, 28, 31, 28, 24, 21, 17, 14, 11, 7, 4]);

StartAudioContext(Tone.context, window);
$(window).click(function(){
  Tone.context.resume();
});

$(document).ready(function(event){

  $(".onmouse").on("mouseenter", ".off", function(){
    var randNote = word_index % oncount.length;
    onmouse.triggerAttackRelease(oncount[randNote], "2");
    $(this).addClass("on");
    $(this).removeClass("off");
    word_index++;
  });
});
