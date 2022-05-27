var heart = [];
var heartIndex = 3;
//coin vars , positions
var coin = {
  x: 100,
  y: 100,
  h: 50,
  w: 50,
};
//huge coin vars , positions
var huge = {
  x: 400,
  y: 400,
  w: 50,
  h: 50,
};
//death box1 vars , positions
var box1 = {
  x: 400,
  y: 0,
  h: 50,
  w: 50,
  r: 200,
  g: 0,
  b: 0,
};
//death box2 vars , positions
var box2 = {
  x: 400,
  y: 0,
  h: 50,
  w: 50,
  r: 200,
  g: 0,
  b: 0,
};
//death box3 vars , positions
var box3 = {
  x: 400,
  y: 0,
  h: 50,
  w: 50,
  r: 200,
  g: 0,
  b: 0,
};
var ship = {
  x: 500,
  y: 500,
  w: 50,
  h: 100,
};
//character vars , positions
var character = {
  x: 200,
  y: 200,
  w: 50,
  h: 50,
};
//canvas fill colors
var canvasCol = {
  r: 255,
  g: 255,
  b: 255,
};
var textColor = {
  r: 0,
  b: 200,
  g: 0,
};
var oxygen = {
  x: 0,
  y: 90,
  h: 80,
  w: 40,
};
var car = {
  x: -200,
  y: 100,
  w: 100,
  h: 50,
};
var carBox = {
  x: 410,
  y: 0,
  w: 50,
  h: 50,
  r: 100,
  g: 100,
  b: 100,
};
var stage = {
  1: 25,
  2: 50,
  3: 75,
  4: 100,
};
var streetC = {
  x: 800,
  y: 800,
};
var grass = {
  x: 800,
  y: 800,
  x1: 800,
  y1: 800,
};
var lvlbox = {
  x: 100,
  y: 100,
  w: 50,
  h: 100,
};
var lvlbox2 = {
  x: 100,
  y: 100,
  w: 50,
  h: 100,
};
var lvlbox3 = {
  x: 100,
  y: 100,
  w: 50,
  h: 100,
};
var lvlCol = {
  r: 100,
  g: 100,
  b: 100,
};
var lvlCol2 = {
  r: 100,
  g: 100,
  b: 100,
};
var shipSpeed = 2;
var space = false;
var spaceLaunch = false;
var gamePlay;
//score
var score = 0;
//level display
var level = 1;
//lives
var life = 3;
//seeing if you died or not , true / false
var death = false;
//the speed of the box
var boxSpeed = 2;
//determine if you collect the coin
var collect = 0;
//movement speed of the character
var moveSpeed = 10;
//determening if you collect the big coin
var hugeCollect = 0;
//the randomizer for the huge coin
var hugeCoin = 0;
//stage 3, car part
var stage3 = false;
// car speed
var carSpeed = 0;
// car box speed
var carBoxSpeed = 0;
// fixing a bug
var carActive = false;
var collected = 0;
var lifeScore = 0;
var oxygenSpeed = 0.1;
var oxygenTime = 60;
var spaceLaunchTimer = 0;
var carLaunchTimer = 0;
var stage4 = false;
var LVL = 0;
var ballance = true;
var button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button10,
  button11;
var shop = false;
var game = false;
var mainMenu = true;
var shield = 0;
var coins = 0;
var broke = false;
var highscore = 0;
var leaderBoard = false;
var userName = "logged out"
var myUserName;
var settingsMove;
var settingsCarMove = 10;
var settingsMenu = false;
var shieldPressing = false;
var coinMultiplier = 1;
var coinCost = 200;
var database, ref1;
var wipeInfo;
var prize = " ";
var commonCoinAdd;
var score1, name1, oldscore, score2, name2, score3, name3, score4, name4;
var lMenu = false;
var suMenu = false;
var logOut = true;
var loginAllow;
var userL;
var passL;
var correctPass;
var takenName;
