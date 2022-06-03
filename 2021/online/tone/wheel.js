var wheel = new Tone.AMSynth(6, Tone.Synth).toMaster();
var notes = Tone.Frequency("G4").harmonize([1, 3, 6, 8, 10,
                                            3, 6, 8, 10, 13,
                                            6, 8, 10, 13, 15,
                                            8, 10, 13, 15, 18,
                                            10, 13, 15, 18, 20,
                                            13, 15, 18, 20, 22,
                                            15, 18, 20, 22, 25]);
var noteIndex = 0;


$(document).ready(function(event){
  window.addEventListener("wheel", scrolling, {passive: false});
  timer();
});

$(window).scroll(function(event){
  scrolling();
});

function scrolling() {
  wheel.triggerAttackRelease(notes[noteIndex], "8n");
      noteIndex++;
      if(noteIndex >= notes.length){
        noteIndex = 0;
      }
}
