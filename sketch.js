
var gameState = "pause";
var character = "caveStone"
var a = 1;
var b = 0;
var c = 1;
var jump = 0;
var death = 0;
var time = 0;
var time2 = 0;

var half, block, trophy;
var start, start1, start3, jumpstart;

var form, platform, plat;
var form1, platform1, plat1;
var form2, platform2, plat2, platform2_1;
var form3, platform3, plat3;
var form4, platform4, plat4;
var form5, platform5, plat5;

var startImage, starImage, spotImage
var boxAnimation, blockAnimation, lavaAnimation

var chosen, chosenImage

var jumpSound, dieSound, checkSound, starSound

var edges

var pause, pauseImage, pauseG

var playImage

var caveStoneB, coveStoneB

var logoC, logoCAnimtion, logo, logoAnimation

var border1, border2, border3, border4


function preload() {

  boxAnimation = loadAnimation("horiz_0.png", "horiz_1.png", "horiz_2.png");

  blockAnimation = loadAnimation("vert_0.png", "vert_1.png", "vert_2.png");

  bubbleAnimation = loadAnimation("download (33).png", "download (34).png", "download (35).png", "download (36).png", "download (37).png", "download (38).png", "download (39).png", "download (40).png");

  bubblyAnimation = loadAnimation("download (4).png", "download (5).png", "download (6).png", "download (7).png");

  normAnimation = loadAnimation("norm_0.png", "norm_1.png", "norm_2.png")

  sadAnimation = loadAnimation("sad_0.png", "sad_1.png", "sad_2.png", "sad_3.png", "sad_4.png", "sad_5.png", "sad_4.png", "sad_5.png")

  smallAnimation = loadAnimation("small_0.png", "small_1.png", "small_2.png", "small_3.png", "small_4.png", "small_5.png")

  airAnimation = loadAnimation("air_0.png", "air_1.png", "air_2.png")

  floorAnimation = loadAnimation("floor_0.png", "floor_1.png", "floor_2.png", "floor_3.png")

  lavaAnimation = loadAnimation("lava1.png", "lava2.png", "lava3.png", "lava4.png", "lava5.png", "lava6.png");

  logoCAnimation = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_0.png", "sprite_1.png", "sprite_5.png", "sprite_0.png", "sprite_1.png", "sprite_2.png");

  starImage = loadImage("star.png");
  startImage = loadImage("start.png");
  spotImage = loadImage("spot.png");
  pauseImage = loadImage("download (31).png");
  playImage = loadImage("download (32).png");
  chosenImage = loadImage("chose_0.png")
  logoAnimation = loadImage("sprite_0-1.png")
  warnImage = loadImage("warn_0.png")
  lockImage = loadImage("lock_0.png")

  jumpSound = loadSound("bounce3.mp3");
  starSound = loadSound("star.mp3");
  dieSound = loadSound("fire.mp3");
  checkSound = loadSound("check.mp3");
  bubblySound = loadSound("mixkit-cartoon-bubbles-pop-729.wav")
}


function setup() {
  createCanvas(800, 800);


  half = createSprite(600, 400, 0.2, 800);
  start1 = createSprite(120, 650, 180, 20);
  block = createSprite(120, 600, 40, 40);
  start3 = createSprite(120, 654, 160, 48);
  jumpstart = createSprite(120, 644, 160, 32);
  jumpstart.visible = false
  trophy = createSprite(random(40, 660), 95, 40, 40);


  pause = createSprite(750, 40)
  pause.addImage(pauseImage)
  pause.scale = 0.4


  pauseG = new Group()

  form = createSprite(random(0, 800), 520, 20, 20);
  platform = createSprite(form.x, 521, 120, 32);
  plat = createSprite(form.x, 509, 120, 10);

  form1 = createSprite(random(0, 600), 420, 20, 20);
  platform1 = createSprite(form1.x, 421, 120, 32);
  plat1 = createSprite(form1.x, 409, 120, 10);

  form2 = createSprite(700, 420, 20, 20);
  platform2 = createSprite(form2.x, 421, 120, 32);
  plat2 = createSprite(form2.x, 405, 120, 0.2);
  platform2_1 = createSprite(form2.x, 412, 130, 10);

  form3 = createSprite(random(0, 800), 320, 20, 20);
  platform3 = createSprite(form3.x, 321, 120, 32);
  plat3 = createSprite(form3.x, 309, 120, 10);

  form4 = createSprite(random(0, 800), 220, 20, 20);
  platform4 = createSprite(form4.x, 221, 120, 32);
  plat4 = createSprite(form4.x, 209, 120, 10);

  form5 = createSprite(random(0, 800), 720, 20, 20);
  platform5 = createSprite(form5.x, 721, 120, 32);
  plat5 = createSprite(form5.x, 709, 120, 10);

  lava = createSprite(384, 770, 40, 40);
  lava2 = createSprite(128, 770, 40, 40);
  lava3 = createSprite(640, 770, 40, 40);
  lava4 = createSprite(896, 770, 40, 40);

  edges = createEdgeSprites()


  block.debug = false;
  half.debug = false;
  start1.debug = false;
  start3.debug = false;
  jumpstart.debug = false;
  trophy.debug = false;

  form.debug = false;
  platform.debug = false;
  plat.debug = false;

  form1.debug = false;
  platform1.debug = false;
  plat1.debug = false;

  form2.debug = false;
  platform2.debug = false;
  plat2.debug = false;
  platform2_1.debug = false;

  form3.debug = false;
  platform3.debug = false;
  plat3.debug = false;

  form4.debug = false;
  platform4.debug = false;
  plat4.debug = false;

  form5.debug = false;
  platform5.debug = false;
  plat5.debug = false;

  lava.debug = false;
  lava2.debug = false;
  lava3.debug = false;
  lava4.debug = false;

  form.velocityX = a * 0.650;
  plat.velocityX = a * 0.650;
  platform.velocityX = a * 0.650;

  form1.velocityX = a * -1 * 0.5;
  plat1.velocityX = a * -1 * 0.5;
  platform1.velocityX = a * -1 * 0.5;

  form3.velocityX = a * 1;
  plat3.velocityX = a * 1;
  platform3.velocityX = a * 1;

  form4.velocityX = a * -0.650;
  plat4.velocityX = a * -0.650;
  platform4.velocityX = a * -0.650;

  form5.velocityX = a * -1;
  plat5.velocityX = a * -1;
  platform5.velocityX = a * -1;




  start1.addImage(startImage);
  start1.scale = 0.2;
  trophy.addImage(starImage);
  trophy.scale = 0.50;


  form.addImage(spotImage);
  form.scale = 0.15;

  form1.addImage(spotImage);
  form1.scale = 0.15;

  form2.addImage(startImage);
  form2.scale = 0.15;

  form3.addImage(spotImage);
  form3.scale = 0.15;

  form4.addImage(startImage);
  form4.scale = 0.15;

  form5.addImage(spotImage);
  form5.scale = 0.15;

  lava.addAnimation("lava", lavaAnimation);
  lava.scale = 2.7;

  lava2.addAnimation("lava", lavaAnimation);
  lava2.scale = 2.7;

  lava3.addAnimation("lava", lavaAnimation);
  lava3.scale = 2.7;

  lava4.addAnimation("lava", lavaAnimation);
  lava4.scale = 2.7;

  block.addAnimation("box1", blockAnimation)
  block.addAnimation("block", boxAnimation)
  block.addAnimation("box2", bubbleAnimation);
  block.addAnimation("box3", bubblyAnimation);
  block.addAnimation("box4", sadAnimation);
  block.addAnimation("box5", smallAnimation);
  block.addAnimation("box6", normAnimation);
  block.addAnimation("box7", airAnimation);
  block.addAnimation("box8", floorAnimation);
  block.scale = 0.6

  logoC = createSprite(535, 140)
  logoC.addAnimation("hi", logoCAnimation)
  logoC.scale = 0.75

  logo = createSprite(400, 130)
  logo.addImage(logoAnimation)

  play = createSprite(405, 650)
  play.addImage(playImage)
  pauseG.add(play)

  caveStoneB = createSprite(135, 372);
  caveStoneB.addAnimation("box2", blockAnimation)
  caveStoneB.scale = 0.8
  pauseG.add(caveStoneB)

  coveStoneB = createSprite(335, 365);
  coveStoneB.addAnimation("box3", bubbleAnimation)
  coveStoneB.scale = 0.8
  pauseG.add(coveStoneB)

  cloveStoneB = createSprite(515, 350);
  cloveStoneB.addAnimation("box7", normAnimation)
  cloveStoneB.scale = 0.8
  pauseG.add(coveStoneB)

  cliveStoneB = createSprite(685, 372);
  cliveStoneB.addAnimation("box8", floorAnimation)
  cliveStoneB.scale = 1
  pauseG.add(coveStoneB)


  chosen = createSprite(135, 455)
  chosen.addImage(chosenImage)
  chosen.scale = 0.33
  pauseG.add(chosen)

  warn = createSprite(280, 550);
  warn.addImage(warnImage)
  warn.scale = 0.5
  warn.visible = false

  lock = createSprite(335, 450);
  lock.addImage(lockImage)
  lock.scale = 0.2

  lock1 = createSprite(515, 450);
  lock1.addImage(lockImage)
  lock1.scale = 0.2

  lock2 = createSprite(685, 450);
  lock2.addImage(lockImage)
  lock2.scale = 0.2
  
  border1 = createSprite(400,0,800,5)
  border1.shapeColor = "black"

  border2 = createSprite(400,800,800,5)
  border2.shapeColor = "black"

  border3 = createSprite(800,400,5,800)
  border3.shapeColor = "black"

  border4 = createSprite(0,400,5,800)
  border4.shapeColor = "black"

}


function draw() {



  half.visible = false

  if (gameState === "pause") {

    background("white");

    block.velocityY = 0


    block.visible = false;
    half.visible = false;
    start1.visible = false;
    start3.visible = false;
    trophy.visible = false;

    form.visible = false;
    platform.visible = false;
    plat.visible = false;

    form1.visible = false;
    platform1.visible = false;
    plat1.visible = false;

    form2.visible = false;
    platform2.visible = false;
    plat2.visible = false;
    platform2_1.visible = false;

    form3.visible = false;
    platform3.visible = false;
    plat3.visible = false;

    form4.visible = false;
    platform4.visible = false;
    plat4.visible = false;

    form5.visible = false;
    platform5.visible = false;
    plat5.visible = false;

    logo.visible = true
    logoC.visible = true

    play.visible = true
    chosen.visible = true

    caveStoneB.visible = true
    coveStoneB.visible = true
    cloveStoneB.visible = true
    cliveStoneB.visible = true

    lock.visible = true
    lock1.visible = true
    lock2.visible = true


    if (b < 25) {
      text("Unlock with a highscore of ", 267, 505);
      text("250 or above", 300, 520)
    }

    if (b < 50) {
      text("Unlock with a highscore of ", 447, 505);
      text("500 or above", 480, 520)
    }


    if (b < 75) {
      text("Unlock with a highscore of ", 617, 505);
      text("750 or above", 650, 520)
    }



    if (b > 25) {
      lock.visible = false
    }

    if (b > 50) {
      lock1.visible = false
    }

    if (b > 75) {
      lock2.visible = false
    }



    if (mousePressedOver(coveStoneB) && (a === 1) && (death === 0) && (b > 25)) {

      block.changeAnimation("box2", bubbleAnimation)
      block.scale = 0.6
      character = "coveStone"

    }

    if (mousePressedOver(caveStoneB) && (a === 1) && (death === 0)) {

      block.changeAnimation("box1", blockAnimation)
      block.scale = 0.6
      character = "caveStone"

    }

    if (mousePressedOver(cloveStoneB) && (a === 1) && (death === 0) && (b > 50)) {

      block.changeAnimation("box6", normAnimation)
      block.scale = 0.6
      character = "cloveStone"

    }

    if (mousePressedOver(cliveStoneB) && (a === 1) && (death === 0) && (b > 75)) {

      block.changeAnimation("box7", airAnimation)
      block.scale = 0.6
      character = "cliveStone"

    }


    if (mousePressedOver(coveStoneB) && (a > 1)) {
      time2 = 0
      warn.visible = true

    }

    if (mousePressedOver(caveStoneB) && (a > 1)) {
      time2 = 0
      warn.visible = true

    }

    if (mousePressedOver(cloveStoneB) && (a > 1)) {
      time2 = 0
      warn.visible = true

    }

    if (mousePressedOver(cliveStoneB) && (a > 1)) {
      time2 = 0
      warn.visible = true

    }


    if (frameCount % 1 === 0) {
      time2 = time2 + 1
    }

    if (time2 % 100 === 0) {
      warn.visible = false
    }

    if (character === "caveStone") {
      chosen.x = 135
    }

    if (character === "coveStone") {
      chosen.x = 335
    }

    if (character === "cloveStone") {
      chosen.x = 515
    }

    if (character === "cliveStone") {
      chosen.x = 685
    }



    form.velocityX = 0
    plat.velocityX = 0
    platform.velocityX = 0

    form1.velocityX = 0
    plat1.velocityX = 0
    platform1.velocityX = 0

    form3.velocityX = 0
    plat3.velocityX = 0
    platform3.velocityX = 0

    form4.velocityX = 0
    plat4.velocityX = 0
    platform4.velocityX = 0;

    form5.velocityX = 0
    plat5.velocityX = 0
    platform5.velocityX = 0



    if ((mousePressedOver(play)) && (gameState = "pause")) {

      block.visible = true;
      half.visible = true;
      start1.visible = true;
      start3.visible = true;
      trophy.visible = true;

      form.visible = true;
      form1.visible = true;
      form2.visible = true;
      form3.visible = true;
      form4.visible = true;
      form5.visible = true;


      logoC.visible = false
      logo.visible = false

      play.visible = false
      chosen.visible = false

      caveStoneB.visible = false
      coveStoneB.visible = false
      cloveStoneB.visible = false
      cliveStoneB.visible = false

      warn.visible = false

      lock.visible = false
      lock1.visible = false
      lock2.visible = false

      gameState = "play"

      if (form.velocityX > 0) {
        form.velocityX = a * 0.65;
        plat.velocityX = a * 0.65;
        platform.velocityX = a * 0.65;
      } else {
        form.velocityX = a * -0.65;
        plat.velocityX = a * -0.65;
        platform.velocityX = a * -0.65;
      }

      if (form1.velocityX < 0) {
        form1.velocityX = a * -1 * 0.5;
        plat1.velocityX = a * -1 * 0.5;
        platform1.velocityX = a * -1 * 0.5;
      } else {
        form1.velocityX = a * 1 * 0.5;
        plat1.velocityX = a * 1 * 0.5;
        platform1.velocityX = a * 1 * 0.5;
      }

      if (form3.velocityX > 0) {
        form3.velocityX = a * 1;
        plat3.velocityX = a * 1;
        platform3.velocityX = a * 1;
      } else {
        form3.velocityX = a * -1;
        plat3.velocityX = a * -1;
        platform3.velocityX = a * -1;
      }

      if (form4.velocityX < 0) {
        form4.velocityX = a * -0.65;
        plat4.velocityX = a * -0.65;
        platform4.velocityX = a * -0.65;
      } else {
        form4.velocityX = a * 0.65;
        plat4.velocityX = a * 0.65;
        platform4.velocityX = a * 0.65;
      }

      if (form5.velocityX < 0) {
        form5.velocityX = a * -1;
        plat5.velocityX = a * -1;
        platform5.velocityX = a * -1;
      } else {
        form5.velocityX = a * 1;
        plat5.velocityX = a * 1;
        platform5.velocityX = a * 1;
      }

    }

  }


  if (gameState === "play") {

    block.debug = false

    if ((mousePressedOver(pause)) && (gameState = "play")) {
      gameState = "pause"

    }


    if ((a % 10 == 0) && (block.isTouching(trophy))) {
      checkSound.play();
    }


    plat.x = form.x;
    platform.x = form.x;

    plat1.x = form1.x;
    platform1.x = form1.x;

    plat3.x = form3.x;
    platform3.x = form3.x;

    plat2.x = form2.x;
    platform2.x = form2.x;

    plat4.x = form4.x;
    platform4.x = form4.x;

    plat5.x = form5.x;
    platform5.x = form5.x;


    if (form.velocityX > 0) {
      form.velocityX = a * 0.65;
      plat.velocityX = a * 0.65;
      platform.velocityX = a * 0.65;
    } else {
      form.velocityX = a * -0.65;
      plat.velocityX = a * -0.65;
      platform.velocityX = a * -0.65;
    }

    if (form1.velocityX < 0) {
      form1.velocityX = a * -1 * 0.5;
      plat1.velocityX = a * -1 * 0.5;
      platform1.velocityX = a * -1 * 0.5;
    } else {
      form1.velocityX = a * 1 * 0.5;
      plat1.velocityX = a * 1 * 0.5;
      platform1.velocityX = a * 1 * 0.5;
    }

    if (form3.velocityX > 0) {
      form3.velocityX = a * 1;
      plat3.velocityX = a * 1;
      platform3.velocityX = a * 1;
    } else {
      form3.velocityX = a * -1;
      plat3.velocityX = a * -1;
      platform3.velocityX = a * -1;
    }

    if (form4.velocityX < 0) {
      form4.velocityX = a * -0.65;
      plat4.velocityX = a * -0.65;
      platform4.velocityX = a * -0.65;
    } else {
      form4.velocityX = a * 0.65;
      plat4.velocityX = a * 0.65;
      platform4.velocityX = a * 0.65;
    }

    if (form5.velocityX < 0) {
      form5.velocityX = a * -1;
      plat5.velocityX = a * -1;
      platform5.velocityX = a * -1;
    } else {
      form5.velocityX = a * 1;
      plat5.velocityX = a * 1;
      platform5.velocityX = a * 1;
    }


    background("white");
    block.velocityY = block.velocityY + 2.5;
    block.velocityX = 0;
    createEdgeSprites();

    block.collide(edges);
    block.collide(start3);
    block.collide(platform);
    block.collide(platform1);
    block.collide(platform2);
    block.collide(platform2_1);
    block.collide(platform3);
    block.collide(platform4);
    block.collide(platform5);

    textSize(24)

    text((a * 10) - 10, 643, 50);
    text("score:", 573, 50);

    text((b * 10) - 10, 146, 50);
    text("highscore:", 30, 50);

    text((c * 10) - 10, 450, 50);
    text("previous score:", 282, 50);

    if (a > b) {
      b = a;
    }


    //console.log(block.y);
    platform.visible = false;
    platform1.visible = false;
    platform2.visible = false;
    platform3.visible = false;
    platform4.visible = false;
    platform5.visible = false;
    start3.visible = false;
    half.visible = false;


    if (block.isTouching(jumpstart)) {
      block.velocityY = 0
    }

    if (block.isTouching(plat)) {
      block.velocityY = 0
    }

    if (block.isTouching(plat1)) {
      block.velocityY = 0
    }

    if (block.isTouching(plat2)) {
      block.velocityY = 0
    }

    if (block.isTouching(plat3)) {
      block.velocityY = 0
    }

    if (block.isTouching(plat4)) {
      block.velocityY = 0
    }

    if (block.isTouching(plat5)) {
      block.velocityY = 0
    }


    if (character === "caveStone") {


      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(jumpstart)) {
        block.velocityY = -30;
        block.changeAnimation("block", boxAnimation)
        block.scale = 0.65
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat)) {
        block.velocityY = -30;
        block.changeAnimation("block", boxAnimation)
        block.scale = 0.65
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat1)) {
        block.velocityY = -30;
        block.changeAnimation("block", boxAnimation)
        block.scale = 0.65
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat2)) {
        block.velocityY = -30;
        block.changeAnimation("block", boxAnimation)
        block.scale = 0.65
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat3)) {
        block.velocityY = -30;
        block.changeAnimation("block", boxAnimation)
        block.scale = 0.65
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat4)) {
        block.velocityY = -30;
        block.changeAnimation("block", boxAnimation)
        block.scale = 0.65
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat5)) {
        block.velocityY = -30;
        block.changeAnimation("block", boxAnimation)
        block.scale = 0.65
        jumpSound.play();
      }

      if ((keyWentUp("UP_ARROW")) || (keyWentUp("SPACE") || keyWentUp("W"))) {

        block.changeAnimation("box1", blockAnimation)
        block.scale = 0.6
      }





      if (keyDown("DOWN_ARROW") || keyDown("S")) {
        block.velocitX = 0;
        block.changeAnimation("box1", blockAnimation)
        block.scale = 0.6
      }


      if (keyDown("RIGHT_ARROW") || keyDown("D")) {
        block.velocityX = 30;

      }


      if (keyDown("LEFT_ARROW") || keyDown("A")) {
        block.velocityX = -30
      }
    }



    if (character === "coveStone") {


      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(jumpstart)) {
        block.velocityY = -30;
        jumpSound.play();
        jump = 0
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat)) {
        block.velocityY = -30;
        jumpSound.play();
        jump = 0
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat1)) {
        block.velocityY = -30;
        jumpSound.play();
        jump = 0
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat2)) {
        block.velocityY = -30;
        jumpSound.play();
        jump = 0
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat3)) {
        block.velocityY = -30;
        jumpSound.play();
        jump = 0
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat4)) {
        block.velocityY = -30;
        jumpSound.play();
        jump = 0
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat5)) {
        block.velocityY = -30;
        jumpSound.play();
        jump = 0
      }

      if (block.isTouching(jumpstart)) {
        jump = 0
      }

      if (block.isTouching(plat)) {
        jump = 0
      }

      if (block.isTouching(plat1)) {
        jump = 0
      }

      if (block.isTouching(plat2)) {
        jump = 0
      }

      if (block.isTouching(plat3)) {
        jump = 0
      }

      if (block.isTouching(plat4)) {
        jump = 0
      }

      if (block.isTouching(plat5)) {
        jump = 0
      }


      if ((keyWentDown("DOWN_ARROW") || keyDown("S")) && jump === 0) {
        block.velocityY = -35
        block.changeAnimation("box3", bubblyAnimation)
        block.scale = 0.90
        bubblySound.play()
        jump = jump + 1
      }



      if (keyWentUp("DOWN_ARROW") || keyWentUp("s")) {
        block.changeAnimation("box2", bubbleAnimation)
        block.scale = 0.575
        bubblySound.stop()
      }

      if (keyDown("RIGHT_ARROW") || keyDown("D")) {
        block.velocityX = 30;

      }


      if (keyDown("LEFT_ARROW") || keyDown("A")) {
        block.velocityX = -30
      }
    }



    if (character === "cloveStone") {

      block.changeAnimation("box6", normAnimation)
      block.scale = 0.6

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(jumpstart)) {
        block.velocityY = -30;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat)) {
        block.velocityY = -30;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat1)) {
        block.velocityY = -30;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat2)) {
        block.velocityY = -30;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat3)) {
        block.velocityY = -30;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat4)) {
        block.velocityY = -30;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat5)) {
        block.velocityY = -30;
        jumpSound.play();
      }



      if (keyDown("RIGHT_ARROW") || keyDown("D")) {
        block.velocityX = 30;

      }


      if (keyDown("LEFT_ARROW") || keyDown("A")) {
        block.velocityX = -30
      }
    }



    if (character === "cliveStone") {
      block.changeAnimation("box7", airAnimation);
      block.scale = 0.75


      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(jumpstart)) {
        block.velocityY = -30;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat)) {
        block.velocityY = -30;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat1)) {
        block.velocityY = -30;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat2)) {
        block.velocityY = -30;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat3)) {
        block.velocityY = -30;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat4)) {
        block.velocityY = -30;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat5)) {
        block.velocityY = -30;
        jumpSound.play();
      }

      if ((keyDown("DOWN_ARROW") || keyDown("s")) && block.isTouching(plat)) {
        block.velocityX = plat.velocityX;
      }

      if ((keyDown("DOWN_ARROW") || keyDown("s")) && block.isTouching(plat1)) {
        block.velocityX = plat1.velocityX;
      }

      if ((keyDown("DOWN_ARROW") || keyDown("s")) && block.isTouching(plat3)) {
        block.velocityX = plat3.velocityX;
      }

      if ((keyDown("DOWN_ARROW") || keyDown("s")) && block.isTouching(plat4)) {
        block.velocityX = plat4.velocityX;
      }

      if ((keyDown("DOWN_ARROW") || keyDown("s")) && block.isTouching(plat5)) {
        block.velocityX = plat5.velocityX;

      }

      if (block.isTouching(plat) || block.isTouching(plat1) || block.isTouching(plat2) || block.isTouching(plat3) || block.isTouching(plat4) || block.isTouching(plat5) || block.isTouching(jumpstart)) {
        block.changeAnimation("box8", floorAnimation);
      }


      if (keyDown("RIGHT_ARROW") || keyDown("D")) {
        block.velocityX = 30;

      }


      if (keyDown("LEFT_ARROW") || keyDown("A")) {
        block.velocityX = -30
      }
    }





    if (block.y > 710) {
      dieSound.play();
    }

    if (block.y > 750 && character === "caveStone") {
      death = 2;
    }

    if (block.y > 750 && character === "coveStone") {
      death = 2;
    }

    if (block.y > 750 && character === "cliveStone") {
      death = 2;
    }

    if (block.y > 750 && character === "cloveStone") {
      death = death + 1;
      block.y = 600
      block.x = 160
    }

    if (death === 1) {

      if (frameCount % 1 === 0) {
        time = time + 1
      }

      if (time < 30) {
        block.changeAnimation("box4", sadAnimation)
      }

      if (time > 30) {
        block.changeAnimation("box5", smallAnimation)
        block.scale = 0.4
      }

    }


    if (death === 2) {

      death = 0;
      time = 0;
      block.y = 600;
      block.x = 160;
      c = a;
      a = 1;

      if (form.velocityX > 0) {
        form.velocityX = a * 0.65;
        plat.velocityX = a * 0.65;
        platform.velocityX = a * 0.65;
      } else {
        form.velocityX = a * -0.65;
        plat.velocityX = a * -0.65;
        platform.velocityX = a * -0.65;
      }

      if (form1.velocityX < 0) {
        form1.velocityX = a * -1 * 0.5;
        plat1.velocityX = a * -1 * 0.5;
        platform1.velocityX = a * -1 * 0.5;
      } else {
        form1.velocityX = a * 1 * 0.5;
        plat1.velocityX = a * 1 * 0.5;
        platform1.velocityX = a * 1 * 0.5;
      }

      if (form3.velocityX > 0) {
        form3.velocityX = a * 1;
        plat3.velocityX = a * 1;
        platform3.velocityX = a * 1;
      } else {
        form3.velocityX = a * -1;
        plat3.velocityX = a * -1;
        platform3.velocityX = a * -1;
      }

      if (form4.velocityX < 0) {
        form4.velocityX = a * -0.65;
        plat4.velocityX = a * -0.65;
        platform4.velocityX = a * -0.65;
      } else {
        form4.velocityX = a * 0.65;
        plat4.velocityX = a * 0.65;
        platform4.velocityX = a * 0.65;
      }

      if (form5.velocityX < 0) {
        form5.velocityX = a * -1;
        plat5.velocityX = a * -1;
        platform5.velocityX = a * -1;
      } else {
        form5.velocityX = a * 1;
        plat5.velocityX = a * 1;
        platform5.velocityX = a * 1;
      }

      plat.x = form.x;
      platform.x = form.x;

      plat1.x = form1.x;
      platform1.x = form1.x;

      plat3.x = form3.x;
      platform3.x = form3.x;

      plat2.x = form2.x;
      platform2.x = form2.x;

      plat4.x = form4.x;
      platform4.x = form4.x;

    }

    if (block.isTouching(trophy)) {
      a = a + 1;

      starSound.play();

      trophy.x = random(40, 760);

      if (form.velocityX > 0) {
        form.velocityX = a * 0.65;
        plat.velocityX = a * 0.65;
        platform.velocityX = a * 0.65;
      } else {
        form.velocityX = a * -0.65;
        plat.velocityX = a * -0.65;
        platform.velocityX = a * -0.65;
      }

      if (form1.velocityX < 0) {
        form1.velocityX = a * -1 * 0.5;
        plat1.velocityX = a * -1 * 0.5;
        platform1.velocityX = a * -1 * 0.5;
      } else {
        form1.velocityX = a * 1 * 0.5;
        plat1.velocityX = a * 1 * 0.5;
        platform1.velocityX = a * 1 * 0.5;
      }

      if (form3.velocityX > 0) {
        form3.velocityX = a * 1;
        plat3.velocityX = a * 1;
        platform3.velocityX = a * 1;
      } else {
        form3.velocityX = a * -1;
        plat3.velocityX = a * -1;
        platform3.velocityX = a * -1;
      }

      if (form4.velocityX < 0) {
        form4.velocityX = a * -0.65;
        plat4.velocityX = a * -0.65;
        platform4.velocityX = a * -0.65;
      } else {
        form4.velocityX = a * 0.65;
        plat4.velocityX = a * 0.65;
        platform4.velocityX = a * 0.65;
      }

      if (form5.velocityX < 0) {
        form5.velocityX = a * -1;
        plat5.velocityX = a * -1;
        platform5.velocityX = a * -1;
      } else {
        form5.velocityX = a * 1;
        plat5.velocityX = a * 1;
        platform5.velocityX = a * 1;
      }

      plat.x = form.x;
      platform.x = form.x;

      plat1.x = form1.x;
      platform1.x = form1.x;

      plat3.x = form3.x;
      platform3.x = form3.x;

      plat2.x = form2.x;
      platform2.x = form2.x;

      plat4.x = form4.x;
      platform4.x = form4.x;

    }

    form.bounceOff(edges);
    platform.bounceOff(edges);
    plat.bounceOff(edges);

    form1.bounceOff(edges);
    platform1.bounceOff(edges);
    plat1.bounceOff(edges);

    form1.bounceOff(half);
    platform1.bounceOff(half);
    plat1.bounceOff(half);

    form3.bounceOff(edges);
    platform3.bounceOff(edges);
    plat3.bounceOff(edges);

    form4.bounceOff(edges);
    platform4.bounceOff(edges);
    plat4.bounceOff(edges);

    form5.bounceOff(edges);
    platform5.bounceOff(edges);
    plat5.bounceOff(edges);



  }
  drawSprites();
}