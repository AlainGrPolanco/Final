var back;
var frame;
var framegif;
var bottomball;
var topball;
var twist;
var twistgif;
var song1;
var song2;
var song3;
var fr = 26;

function preload() {
  song1 = loadSound('assets/007 Background.mp3');
  song2 = loadSound('assets/007 Middle.mp3');
  song3 = loadSound('assets/007 End.mp3');
  back = loadImage("Files/Background.png");
  frame = loadImage("Files/Frame.png");
  twist = loadImage("Files/Top Tile.png");
  framegif = loadGif('Files/Frame.gif');
  bottomball = loadGif('Files/Balls-Bottom.gif');
  topball = loadGif('Files/Balls-Top.gif');
  twistgif = loadGif('Files/Tile.gif');
}

function setup() {
  createCanvas(600, 800);

  song1.loop();
  song2.loop();
  song3.loop();

  frameRate(fr);


}

function draw() {
  background(frame);
  image(framegif, 0, 0, 600, 800)
  image(back, 0, 0, 600, 800);
  image(twist, 0, 0, 600, 800);

  if (twistgif.playing()) {
    image(twistgif, 0, 0, 600, 800);
    song1.setVolume(1);
  }
  if (topball.playing()) {
    image(topball, 0, 0, 600, 800);
     song2.setVolume(1);
  }
  if (bottomball.playing()) {
    image(bottomball, 0, 0, 600, 800);
     song3.setVolume(1);
  }


}


function mousePressed() {

  if (mouseX > 200 && mouseX <= 500 && mouseY >= 250 && mouseY < 550) {
    if (song1.isPlaying()) {
      song1.setVolume(0, 1.0);
    } else {
      song1.setVolume(1, 1.0);
    }
    if (twistgif.playing()) {
      twistgif.pause();
    } else {
      twistgif.play();
    }
  }
  if (mouseX > 200 && mouseX <= 500 && mouseY >= 0 && mouseY < 250) {
    if (song2.isPlaying()) {
      song2.setVolume(0, 1.0);
    } else {
      song2.setVolume(1, 1.0);
    }
    if (topball.playing()) {
      topball.pause();
    } else {
      topball.play();
    }
  }
  if (mouseX > 200 && mouseX <= 500 && mouseY >= 550 && mouseY < 800) {
    if (song3.isPlaying()) {
      song3.setVolume(0, 1.0);
    } else {
      song3.setVolume(1, 1.0);
    }
    if (bottomball.playing()) {
      bottomball.pause();
    } else {
      bottomball.play();
    }
  }
}
