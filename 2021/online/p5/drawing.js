let gridSpacing = 50

let poly;
let delay;
let reverb;

let notes = ["C","F","G","A","D","B"]

let octave = 4
let direction = 1

let W = window.innerWidth
let H = window.innerHeight

function setup() {


  poly = new p5.PolySynth();
  delay = new p5.Delay();
  reverb = new p5.Reverb();
  reverb.process(poly, 2, 2); //to only add reverb, toggle the others off.
  // delay.process(poly, 0.50, 0.5, 2300);
  // reverb.process(delay, 4, 2);

let i = 0;
let cts = ['ℌ','𝔗','𝔐', '𝔏', '','𝔤', '𝔯', '𝔞','𝔣','𝔣', '𝔦', '𝔱','𝔦']

for (let y = 0; y < H - (gridSpacing * 2); y += gridSpacing) {
  for (let x = gridSpacing; x < W - gridSpacing; x += gridSpacing) {

      let p
      if(window.chrome){
        if(i > cts.length-1){
          p = createP("❀");
        }else{
          p = createP(cts[i]);
          p.class('sound-warning')
        }
        i++
      }
      p.position(x, y)
      p.mousePressed(changeEmoji)
      p.mouseOver(changeEmoji)
    }
  }
}

function mousePressed(){
  userStartAudio()
}

function changeEmoji() {
  userStartAudio()

  let randNote = floor(random(notes.length))

  if(random(1)<0.1){
    octave+= direction
  }
  if(octave >= 6){
    direction = -1
  }
  if(octave <= 4){
    direction = 1
  }

  poly.play(notes[randNote] + octave , .15, 0, 0.25);

  this.html(randomEmoji())
}

//utility function
function randomEmoji() {

  let emojis = ['W','e','S','u','p','p','o','r','t', 'y', 'o',' u', 'r', 'A','m','a', 'z', 'i','n','g', 'a', 'n',' d', 'C', 'r','e','a', 't', 'i','v','e', 'C', 'h','a','l', 'l', 'e','n','g','e','s']
  let creature = ['W','e','a','r','e','t','h','e','C', 'h', 'o',' t', 't', 'o','C', 'r', 'a','z','y']

  let output;

  if (random(1) < 0.1) {
    let rand = floor(random(creature.length))
    output = creature[rand];
  } else {
    let rand = floor(random(emojis.length))
    output =  emojis[rand]
  }


  //favicon replacement
  //https://css-tricks.com/emojis-as-favicons/
  const linkForFavicon = document.querySelector(
    `head > link[rel='icon']`
  );

  newFavicon = faviconTemplate`${output}`;
    // console.log(newFavicon);
    linkForFavicon.setAttribute(`href`, ``);

  return output;

}


function faviconTemplate(string, icon) {
  return `
  `.trim();
}
