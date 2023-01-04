//modified flatgame template originally designed by by Lee2sman 2018-2019; leetusman.com
//code=MIT license. artistic work = cc 3.0
//modified by nilson 2023

//first number is X, second number is Y. 0,0 is in top left corner
let itemText = [
  ["Everything here seemed really very bad with no way out.\nI apologize to myself in 12th grade,\nand to my best friend feeling bad in the locker room\nand to my dad.",30,20],
  ["graveyard-bodied\nself-unfulfilled these burial-plot scabs deepen.\ni wish i could hug my 12 year old self\nand play secret of mana with them.",600,840],
  ["I stood at the threshold of the maze of my mistakes.",1800,1500],
  ["I'm sorry.",2200,2000],
  ["There were two paths and I was sure I would pick the bad one. \nSo I picked nothing.",1050,200],
  ["In the distance i heard the plants\nfor the first time in a long time:\ntheir language was subtle.",220,1850],
  ["i spoke with the mummies for the second time that night...\n'this boy is a graveyard' they said.\njust tell me the answer to the riddle i cried tears all over my stupid tshirt.",2300,450],
  ["Face practically burned right off,\nmy reflection grumbled sweet nothings\ndungeon-brick-boy who lost some friends.",1400,620] 
    //no comma after last one!
];


let soundtrack;
var player;
var numOfItems = 4; //set this number to number of items in items folder!
var frame;
var item = [];


function preload(){
    soundtrack = loadSound('assets/soundtrack.mp3');

    item[0] = loadAnimation('assets/bubble1.png','assets/bubble2.png')
    item[0].location = {'x':630,'y':1550};

    item[1] = loadAnimation('assets/druid1.png','assets/druid2.png')
    item[1].location = {'x':1800,'y':300};

    item[2] = loadAnimation('assets/fish1.png','assets/fish2.png','assets/fish3.png','assets/fish4.png','assets/fish5.png','assets/fish6.png')
    item[2].location = {'x':1950,'y':860};

    item[3] = loadAnimation('assets/clerk1.png','assets/clerk2.png')
    item[3].location = {'x':300,'y':250};

}

function setup() {
  createCanvas(1800,1000); //how big is our world? (in pixels!)

  //font size
  textSize(24);

  //create a sprite and add the 3 animations
    
  //pass start location to createSprite
  player = createSprite(300, 300);

  var myAnimation = player.addAnimation('moving', 'assets/player/player1.png', 'assets/player/player2.png', 'assets/player/player3.png');
  myAnimation.frameDelay = 8; //slow down the animation

  //load your background image
  frame = loadImage('assets/background.png');

}

function draw() {

  background(5, 5, 5); //background color
  image(frame, 0, 0,2*width,2*height);

  for(var i=0; i<numOfItems; i++){
     animation(item[i],item[i].location.x,item[i].location.y);
     item[i].frameDelay = 15;
  }

  movePlayer();

  //set the camera position to the player position
  camera.position.x = player.position.x;
  camera.position.y = player.position.y;

  //limit the player movements
  if(player.position.x < 0)
    player.position.x = 0;
  if(player.position.y < 0)
    player.position.y = 0;
  if(player.position.x > 2*width)
    player.position.x = 2*width;
  if(player.position.y > 2*height)
    player.position.y = 2*height;

  //text for items
  for (var i = 0; i < itemText.length; i++){
    strokeWeight(6);
    stroke(0);
    fill(255,250,200);
    //color of text
    //show all of the text
    text(itemText[i][0],itemText[i][1],itemText[i][2]);
    fill(0);
  }

  //character on the top
  drawSprite(player);
}

function movePlayer(){
  if (keyIsPressed){
    if (!soundtrack.isPlaying()){
      soundtrack.loop();
    }
  }
 if (keyIsDown(LEFT_ARROW)) {
    player.position.x -= 15;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.position.x += 15;
  }

  if (keyIsDown(UP_ARROW)) {
    player.position.y -= 15;
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.position.y += 15;
  }
}
