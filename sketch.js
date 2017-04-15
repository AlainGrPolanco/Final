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
}

function draw() {
  background(frame);
  image(framegif, 0, 0, 600, 800)
  image(back, 0, 0, 600, 800);
  image(twist, 0, 0, 600, 800);
  if (twistgif.playing()) {
    image(twistgif, 0, 0, 600, 800);
  }
  if (topball.playing()) {
    image(topball, 0, 0, 600, 800);
  }
  if (bottomball.playing()) {
    image(bottomball, 0, 0, 600, 800);
  }


}


function mousePressed() {
  if (song1.isPlaying(mouseX > 200 && mouseX <= 500 && mouseY >= 200 && mouseY < 400)) {
    song1.pause();
  } else {
    song1.play();
  }
  if (song2.isPlaying(mouseX > 200 && mouseX <= 500 && mouseY >= 0 && mouseY < 200)) {
    song2.pause();
  } else {
    song2.play();
  }
  if (song2.isPlaying(mouseX > 200 && mouseX <= 500 && mouseY >= 400 && mouseY < 800)) {
    song3.pause();
  } else {
    song3.play();
  }

  if (twistgif.playing(mouseX > 200 && mouseX <= 500 && mouseY >= 200 && mouseY < 400)) {
    twistgif.pause();
  } else {
    twistgif.play();
  }
  if (topball.playing(mouseX > 200 && mouseX <= 500 && mouseY >= 0 && mouseY < 200)) {
    topball.pause();
  } else {
    topball.play();
  }
  if (bottomball.playing(mouseX > 200 && mouseX <= 500 && mouseY >= 400 && mouseY < 800)) {
    bottomball.pause();
  } else {
    bottomball.play();
  }
}