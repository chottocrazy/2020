StartAudioContext(Tone.context, window);
$(window).click(function(){
    Tone.context.resume();
});

var volume = new Tone.Volume(10);
var click = new Tone.PolySynth(10, Tone.Synth).chain(volume, Tone.Master);
var notes = Tone.Frequency("D2").harmonize([
  5,7,10,
  7,10,12,
  10,12,14,
  12,14,17,]);
var noteIndex = 0;

$("#click").click(function(e){
    var randNote = Math.floor(Math.random() * notes.length);
    click.triggerAttackRelease(notes[randNote], "4n");
});
