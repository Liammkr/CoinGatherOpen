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
var userName;
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
function setup() {
  var canvasPos = createCanvas(400, 400);
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  canvasPos.position(x, y);
  console.log(
    "Welcome to my game , I am well aware on how easy it is to add fake posts to the data base and use the console to increase your score but just please dont. I have made this game purely for fun and so other people can learn from the code. Hope you enjoy the game - Liam"
  );
  userName = getItem("userName");
  coins = getItem("coins");
  shield = getItem("shield");
  highscore = getItem("highscore");
  settingsMove = getItem("settingsMove");
  settingsCarMove = getItem("settingsCarMove");
  coinMultiplier = getItem("coinMultiplier");
  coinCost = getItem("coinCost");
  oldscore1 = score1;
  wipeInfo = getItem("wipeInfo");
  if (wipeInfo == null) {
    wipeInfo = 1;
    storeItem("wipeInfo", wipeInfo);
    highscore = 0;
    coins = 0;
    shield = 0;
    coinMultiplier = 1;
    coinCost = 200;
  }
  if (shield == null) {
    shield = 0;
  }
  if (coins == null) {
    coins = 0;
  }
  if (highscore == null) {
    highscore = 0;
  }
  if (userName == "" || userName == null) {
    userName = "Input UserName";
  }
  if (settingsMove == null) {
    settingsMove = 10;
  }
  if (settingsCarMove == null) {
    settingsCarMove = 10;
  }
  if (coinMultiplier == null) {
    coinMultiplier = 1;
  }
  if (coinCost == null) {
    coinCost = 200;
  }
  button1 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/Play.png", "Play")
    .position(x + 175, y + 150)
    .size(50, 50)
    .mousePressed(gameStart);
  button2 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/Menu_Shop.png", "shop")
    .position(x + 20, y + 300)
    .size(30, 30)
    .mousePressed(clicked2);
  button4 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/Back.png", "back")
    .position(x + 10, y + 10)
    .size(20, 20)
    .mousePressed(back1);
  button3 = createButton("Buy")
    .position(x + 40, y + 110)
    .size(75, 20)
    .mousePressed(buy);
  button5 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/LeaderBoard1.png", "LeaderBoard")
    .size(30, 30)
    .position(x + 360, y + 300)
    .mousePressed(leaderBoardPress);
  button6 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/Menu_Img.png", "go back to menu")
    .position(x + 10, y + 10)
    .size(30, 30)
    .mousePressed(menuGoBack);
  button7 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/Shield-2.png", "shield")
    .position(x + 30, y + 320)
    .size(30, 30)
    .mousePressed(shieldActivate);
  button8 = createInput(userName).position(x + 115, y + 300);
  button9 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/Settings.png", "settings")
    .position(x + 10, y + 10)
    .size(30, 30)
    .mousePressed(openSettings);
  button10 = createSlider(1, 30, settingsMove).position(x + 100, y + 150);
  button13 = createSlider(1, 30, settingsCarMove).position(x + 100, y + 250);
  button11 = createButton("Buy")
    .position(x + 200, y + 110)
    .size(75, 20)
    .mousePressed(buy1);
  button12 = createButton("Submit Score")
    .position(x + 150, y + 325)
    .size(100, 50)
    .mousePressed(submitScore);
  button14 = createButton("Buy")
    .position(x + 40, y + 280)
    .size(75, 20)
    .mousePressed(buy3);
  behind1 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/PurpleImg.png", "left")
    .position(0, 0)
    .size(x, windowHeight);
  behind2 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/PurpleImg.png", "left").position(x, 0).size(width, y);
  behind3 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/PurpleImg.png", "left")
    .position(x, y + height)
    .size(width, y);
  behind4 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/PurpleImg.png", "left")
    .position(x + width, 0)
    .size(x, windowHeight);
  button15 = createButton("Play")
    .size(90, 40)
    .position(x + 55, y + 250)
    .mousePressed(gameStartFinal);
  button16 = createButton("Play (Beta)")
    .size(90, 40)
    .position(x + 260, y + 250);
  button17 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/P5jsLogo.png","P5logo").size(50,50).position(x+ 30,y + 330).mousePressed(p5Open);
  button18 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/GitHub.png","GitHubLogo").size(50,50).position(x+ 100,y + 330).mousePressed(sitesOpen);
  button19 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/GlitchLogo.jpeg","GlitchLogo").size(50,50).position(x+ 240,y + 330).mousePressed(glitchOpen);
  button20 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/ReplitLogo.png","ReplitLogo").size(50,50).position(x+ 310,y + 330).mousePressed(replOpen);
  button21 = createImg("https://coingathergame.liamrubin2.repl.co/Assets/GitHub.png","GitHubLogo").size(50,50).position(x+ 170,y + 330).mousePressed(repoOpen);
  button11.hide();
  button15.hide();  
  button16.hide();
  button12.hide();
  button13.hide();
  button3.hide();
  button4.hide();
  button6.hide();
  button7.hide();
  button8.hide();
  button10.hide();
  button14.hide();
  button21.hide();
  button20.hide();
  button19.hide();
  button18.hide();
  button17.hide();
  var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: "",
  };
  firebase.initializeApp(config);
  database = firebase.database();
  ref1 = database.ref("first");
  ref2 = database.ref("second");
  ref3 = database.ref("third");
  ref4 = database.ref("fourth");
  ref5 = database.ref("fifth");
  ref6 = database.ref("sixth");
  ref7 = database.ref("seventh");
  ref8 = database.ref("eighth");
  ref9 = database.ref("ninth");
  ref10 = database.ref("tenth");
  var data1 = {
    name: userName,
    score: highscore,
  };
  ref1.on("value", gotData1, errData);
  ref2.on("value", gotData2, errData);
  ref3.on("value", gotData3, errData);
  ref4.on("value", gotData4, errData);
  ref5.on("value", gotData5, errData);
  ref6.on("value", gotData6, errData);
  ref7.on("value", gotData7, errData);
  ref8.on("value", gotData8, errData);
  ref9.on("value", gotData9, errData);
}
function gotData1(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
  }
  name1 = scores[k].name;
  score1 = scores[k].score;
}
function gotData2(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
  }
  name2 = scores[k].name;
  score2 = scores[k].score;
}
function gotData3(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
  }
  name3 = scores[k].name;
  score3 = scores[k].score;
}
function gotData4(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
  }
  name4 = scores[k].name;
  score4 = scores[k].score;
}
function gotData5(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
  }
  name5 = scores[k].name;
  score5 = scores[k].score;
}
function gotData6(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
  }
  name6 = scores[k].name;
  score6 = scores[k].score;
}
function gotData7(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
  }
  name7 = scores[k].name;
  score7 = scores[k].score;
}
function gotData8(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
  }
  name8 = scores[k].name;
  score8 = scores[k].score;
}
function gotData9(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
  }
  name9 = scores[k].name;
  score9 = scores[k].score;
}
function errData(err) {
  console.log("Error");
  console.log(err);
}
function preload() {
  menu = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Menu_Shop.png");
  play = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Play.png");
  settingsImg = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Settings.png"
  );
  leaderBoardImg = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/LeaderBoard1.png"
  );
  pixel = loadFont("Assets/slkscre.ttf");
  shieldImg = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Shield-2.png"
  );
  characterImg = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Character.png"
  );
  coinImg = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Coin.png");
  bigCoinImg = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/BigCoin.png"
  );
  shipImg = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Spaceship.png"
  );
  carImg = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Car.png");
  street = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Street.png");
  heart[6] = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Heart6.png");
  heart[5] = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Heart5.png");
  heart[4] = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Heart4.png");
  heart[3] = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Heart3.png");
  heart[2] = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Heart2.png");
  heart[1] = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Heart1.png");
  heart[0] = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Heart0.png");
  sky1 = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Sky2.png");
  coinSound = loadSound("https://coingathergame.liamrubin2.repl.co/Assets/CoinSound.wav");
  shieldSound = loadSound("https://coingathergame.liamrubin2.repl.co/Assets/ShieldUse.wav");
  buySound = loadSound("https://coingathergame.liamrubin2.repl.co/Assets/BuyingSound.wav");
  deathSound = loadSound("https://coingathergame.liamrubin2.repl.co/Assets/DeathSound.wav");
  lootBox1Img = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/CommonBox.png");
}
function draw() {
  oldscore1 = score1;
  background(canvasCol.r, canvasCol.g, canvasCol.b);
  textAlign(CENTER, CENTER);
  userName = button8.value();
  settingsMove = button10.value();
  settingsCarMove = button13.value();
  storeItem("settingsMove", settingsMove);
  storeItem("settingsCarMove", settingsCarMove);
  highScoreCheck();
  storeItem("coinMultiplier", coinMultiplier);
  storeItem("userName", userName);
  storeItem("coins", coins);
  storeItem("shield", shield);
  storeItem("highscore", highscore);
  storeItem("coinCost", coinCost);
  //if(userName == 'liam'){
  //highscore = 0;
  //}
  /*if(broke == true){
    text("Too Broke",200,200);
    var Time1234 = 0;
    Time1234 ++;
    if(Time1234 >= 2){
      brokeOff();
      Time1234 = 0;
    }
  */
  if (mainMenu == true) {
    image(sky1, 0, 0, width, height);
    fill("black");
    textFont(pixel);
    textSize(20);
    text("Coin Gather!", 200, 60);
    text("High Score: " + highscore, 200, 130);
    canvasCol.r = 120;
    canvasCol.g = 120;
    canvasCol.b = 160;
    button8.show();
    button9.show();
    textColor.r = 0;
    textColor.g = 0;
    textColor.b = 0;
  }
  if (shop == true) {
    textSize(15);
    fill("black");
    text("Shield", 75, 30);
    text("CommonBox", 80, 200);
    text("You Have:" + shield, 85, 160);
    text("Coin Multiplier", 225, 30);
    text("Multiplier:x" + coinMultiplier, 250, 160);
    canvasCol.r = 30;
    canvasCol.g = 120;
    canvasCol.b = 163;
    button1.hide();
    button2.hide();
    button3.show();
    button4.show();
    button5.hide();
    button8.hide();
    button9.hide();
    button11.show();
    button14.show();
    image(shieldImg, 40, 40, 75, 75);
    image(coinImg, 200, 40, 70, 70);
    image(lootBox1Img, 40, 210, 70, 70);
    text("Cost:150", 80, 140);
    text("Cost:300", 80, 310);
    text("Cost:" + coinCost, 240, 140);
    textSize(10);
    text("Last Open: " + prize, 90, 330);
  }
  if (leaderBoard == true) {
    fill("Black");
    text(
      "1st: " +
        name1 +
        "," +
        score1 +
        "\n2nd: " +
        name2 +
        "," +
        score2 +
        "\n3rd: " +
        name3 +
        "," +
        score3 +
        "\n4th: " +
        name4 +
        "," +
        score4 +
        "\n5th: " +
        name5 +
        "," +
        score5 +
        "\n6th: " +
        name6 +
        "," +
        score6 +
        "\n7th: " +
        name7 +
        "," +
        score7 +
        "\n8th: " +
        name8 +
        "," +
        score8 +
        "\n9th: " +
        name9 +
        "," +
        score9,
      200,
      200
    );
    button1.hide();
    button2.hide();
    button3.hide();
    button4.show();
    button5.hide();
    button8.hide();
    button9.hide();
    button11.hide();
    button12.show();
  }
  if (settingsMenu == true) {
    fill("black");
    textSize(15);
    text("Character Move Speed", 180, 140);
    text("Car Move Speed", 170, 240);
    button1.hide();
    button3.hide();
    button2.hide();
    button4.show();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
    button9.hide();
    button10.show();
    button13.show();
    canvasCol.r = 30;
    canvasCol.g = 120;
    canvasCol.b = 160;
    text(settingsMove, 175, 190);
    text(settingsCarMove, 175, 290);
  }

  if (game == true) {
    //start();
    fill("green");
    rect(0, 0, width, height);
    button1.hide();
    button2.hide();
    button3.hide();
    button4.show();
    button5.hide();
    button7.hide();
    button8.hide();
    button9.hide();
    button11.hide();
    button14.hide();
    button21.show();
    button20.show();
    button19.show();
    button18.show();
    button17.show();
    image(coinImg, 37, 60, 125, 125);
    fill("black");
    text("Original", 105, 200);
    fill("red");
    rect(300, 60, 50, 50);
    fill("blue");
    rect(250, 160, 50, 50);
    fill("black");
    text("1v1 Game", 305, 230);
    textSize(15);
    text("Other Pages (click) :",200,320);
    textSize(12);
    text("P5.js", 55, 390);
    text("Sites", 125, 390);
    text("Repo", 195, 390);
    text("Glitch", 265, 390);
    text("Repl", 335, 390);
    button15.show();
    button16.show();
    noFill();
    strokeWeight(2);
    stroke("black");
    rect(25, 50, 150, 250, 10);
    rect(225, 50, 150, 250, 10);
    noStroke();
  }
  if (gamePlay == true) {
    start();
  }
  ammount();
}
function openSettings() {
  settingsMenu = true;
  mainMenu = false;
  button11.hide();
}
function clicked2() {
  shop = true;
  mainMenu = false;
}
function submitScore() {
  var currentData = {
    name: userName,
    score: highscore,
    coins: coins,
  };
  var data1 = {
    name: name1,
    score: score1,
  };
  var data2 = {
    name: name2,
    score: score2,
  };
  var data3 = {
    name: name3,
    score: score3,
  };
  var data4 = {
    name: name4,
    score: score4,
  };
  var data5 = {
    name: name5,
    score: score5,
  };
  var data6 = {
    name: name6,
    score: score6,
  };
  var data7 = {
    name: name7,
    score: score7,
  };
  var data8 = {
    name: name8,
    score: score8,
  };
  var data9 = {
    name: name9,
    score: score9,
  };
  if (highscore >= score1) {
    if (score1 != highscore) {
      ref9.push(data8);
      ref8.push(data7);
      ref7.push(data6);
      ref6.push(data5);
      ref5.push(data4);
      ref4.push(data3);
      ref3.push(data2);
      ref2.push(data1);
      ref1.push(currentData);
    }
  } else if (highscore >= score2) {
    if (score2 != highscore) {
      ref9.push(data8);
      ref8.push(data7);
      ref7.push(data6);
      ref6.push(data5);
      ref5.push(data4);
      ref4.push(data3);
      ref3.push(data2);
      ref2.push(currentData);
    }
  } else if (highscore >= score3) {
    if (score3 != highscore) {
      ref9.push(data8);
      ref8.push(data7);
      ref7.push(data6);
      ref6.push(data5);
      ref5.push(data4);
      ref4.push(data3);
      ref3.push(currentData);
    }
  } else if (highscore >= score4) {
    if (score4 != highscore) {
      ref9.push(data8);
      ref8.push(data7);
      ref7.push(data6);
      ref6.push(data5);
      ref5.push(data4);
      ref4.push(currentData);
    }
  } else if (highscore >= score5) {
    if (score5 != highscore) {
      ref9.push(data8);
      ref8.push(data7);
      ref7.push(data6);
      ref6.push(data5);
      ref5.push(currentData);
    }
  } else if (highscore >= score6) {
    if (score6 != highscore) {
      ref9.push(data8);
      ref8.push(data7);
      ref7.push(data6);
      ref6.push(currentData);
    }
  } else if (highscore >= score7) {
    if (score7 != highscore) {
      ref9.push(data8);
      ref8.push(data7);
      ref7.push(currentData);
    }
  } else if (highscore >= score8 && score8 != highscore) {
    if (score8 != highscore) {
      ref9.push(data8);
      ref8.push(currentData);
    }
  } else if (highscore >= score9 && score9 != highscore) {
    if (score9 != highscore) {
      ref9.push(currentData);
    }
  }
}
function buy() {
  if (coins >= 150) {
    shield += 1;
    coins -= 150;
    buySound.play();
  }
}
function buy1() {
  if (coins >= coinCost) {
    coinMultiplier += 1;
    coins -= coinCost;
    coinCost += 100;
    buySound.play();
  }
}
function buy3() {
  if (coins >= 300) {
    coins -= 300;
    commonBoxOpen();
    buySound.play();
  } else if (coins < 300) {
    broke = true;
  }
}
function p5Open(){
  window.open("https://editor.p5js.org/lr14/full/B0suIbb69")
}
function commonBoxOpen() {
  commonBoxLoot = int(random(2, 1000));
  if (commonBoxLoot <= 500) {
    commonCoinAdd = int(random(1, 600));
    coins += commonCoinAdd;
    prize = commonCoinAdd + " coins";
    commonBoxLoot = 1;
  }
  if (commonBoxLoot > 500 && commonBoxLoot <= 999) {
    shield += 2;
    prize = "2 Shields";
    commonBoxLoot = 1;
  }
  if (commonBoxLoot == 1000) {
    coins += 9999;
    prize = "9999 Coins";
    commonBoxLoot = 1;
  }
}
function shieldActivate() {
  if (shield >= 1 && heartIndex < 6 && life > 0) {
    shield -= 1;
    heartIndex += 1;
    life += 1;
    shieldSound.play();
  }
}
function menuGoBack() {
  game = false;
  gamePlay = false;
  mainMenu = true;
  shieldPressing = false;
  button6.hide();
  button1.show();
  button2.show();
  button5.show();
  button8.show();
  ballance = true;
  shieldPressed = false;
  textColor.r = 0;
  textColor.g = 0;
  textColor.b = 0;
}
function gameStart() {
  game = true;
  //gamePlay = true;
  mainMenu = false;
  shieldPressed = true;
  button8.hide();
  button7.show();
  moveSpeed = settingsMove;
  button15.hide();
  button16.hide();
}
function gameStartFinal() {
  game = false;
  gamePlay = true;
  mainMenu = false;
  shieldPressed = true;
  button8.hide();
  button7.show();
  moveSpeed = settingsMove;
  button15.hide();
  button16.hide();
}
function back1() {
  button2.show();
  button15.hide();
  button16.hide();
  button1.show();
  button3.hide();
  button4.hide();
  button10.hide();
  button11.hide();
  button12.hide();
  button13.hide();
  button5.show();
  button14.hide();
  button21.hide();
  button20.hide();
  button19.hide();
  button18.hide();
  button17.hide();
  canvasCol.r = 30;
  canvasCol.g = 120;
  canvasCol.b = 160;
  shop = false;
  leaderBoard = false;
  mainMenu = true;
  settingsMenu = false;
  game = false;
}
function leaderBoardPress() {
  leaderBoard = true;
  mainMenu = false;
}
function start() {
  shieldPressing = true;
  button21.hide();
  button20.hide();
  button19.hide();
  button18.hide();
  button17.hide();
  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
  button9.hide();
  canvasCol.r = 255;
  canvasCol.g = 255;
  canvasCol.b = 255;
  mainMenu = false;
  ballance = false;
  image(street, streetC.x, streetC.y, 400, 400);
  textAlign(CENTER);
  image(coinImg, coin.x, coin.y, coin.w, coin.h);
  image(characterImg, character.x, character.y, character.w, character.h);
  image(bigCoinImg, huge.x, huge.y, huge.w, huge.h);
  image(shipImg, ship.x, ship.y, ship.w, ship.h);
  image(carImg, car.x, car.y, car.w, car.h);
  fill(carBox.r, carBox.g, carBox.b);
  fill(0, 200, 0);
  rect(grass.x, grass.y, 400, 40);
  rect(grass.x1, grass.y1, 400, 50);
  stroke("white");
  fill(carBox.r, carBox.g, carBox.b);
  strokeWeight(4);
  rect(carBox.x, carBox.y, carBox.w, carBox.h);
  noStroke();
  textSize(20);
  fill(textColor.r, textColor.g, textColor.b);
  text("Score: " + score, 195, 20);
  image(heart[heartIndex], 0, 0, 120, 40);
  spaceLaunchTimer++;
  carLaunchTimer++;
  moveCharacter();
  inside();
  defeat();
  deathBox1();
  if ((score >= 25 && score < 100) || score >= 125) {
    deathBox2();
    level = 2;
    boxSpeed = 3;
  }
  if ((score >= 50 && score < 100) || score >= 150) {
    deathBox3();
    level = 3;
    boxSpeed = 4;
  }
  if (space == true) {
    level = 4;
  }
  if (score < 50) {
    spaceLaunchTimer = 0;
  }
  if (score < 100) {
    carLaunchTimer = 0;
  }
  if (spaceLaunchTimer == 2) {
    ship.x = 200;
    ship.y = 200;
  }
  if (carLaunchTimer == 2) {
    car.x = 200;
    car.y = 200;
  }
  if (score >= 100) {
    level = 5;
  }
  if (score == 125) {
    stage4Transition();
  }
}

function keyPressed() {
  if (keyCode == 16 && shield >= 1) {
    shieldActivate();
  }
  if (keyCode === ENTER && life == 0 && gamePlay == true) {
    boxSpeed = 2;
    score = 0;
    life = 3;
    coin.x = 100;
    coin.y = 100;
    character.x = 200;
    character.y = 200;
    box1.r = 200;
    box2.r = 200;
    box3.r = 200;
    box1.g = 0;
    box2.g = 0;
    box3.g = 0;
    box1.b = 0;
    box2.b = 0;
    box3.b = 0;
    canvasCol.r = 255;
    canvasCol.g = 255;
    canvasCol.b = 255;
    level = 1;
    box1.x = 400;
    box2.x = 400;
    box3.x = 400;
    textColor.r = 0;
    textColor.g = 0;
    textColor.b = 0;
    shipSpeed = 2;
    space = false;
    carBoxSpeed = 0;
    carBox.x = 410;
    carBox.y = 10;
    car.x = -100;
    car.y = -100;
    grass.x = 600;
    grass.x1 = 600;
    streetC.x = 600;
    carSpeed = 0;
    stage3 = false;
    carActive = false;
    moveSpeed = settingsMove;
    collected = 0;
    oxygenTime = 60;
    oxygenSpeed = 0.1;
    lifeScore = 0;
    ship.x = 600;
    ship.y = 600;
    heartIndex = 3;
    button6.hide();
    button7.show();
    shieldPressesing = true;
  }
}

function moveCharacter() {
  if (
    (keyIsDown(87) && character.y > 0) ||
    (keyIsDown(UP_ARROW) && character.y > 0)
  ) {
    character.y -= moveSpeed;
  }
  if (
    (keyIsDown(83) && character.y <= height - 60) ||
    (keyIsDown(DOWN_ARROW) && character.y <= height - 60)
  ) {
    character.y += moveSpeed;
  }
  if (
    (keyIsDown(65) && character.x >= 1) ||
    (keyIsDown(LEFT_ARROW) && character.x >= 1)
  ) {
    character.x -= moveSpeed;
  }
  if (
    (keyIsDown(68) && character.x <= width - 60) ||
    (keyIsDown(RIGHT_ARROW) && character.x <= width - 60)
  ) {
    character.x += moveSpeed;
  }
  if ((keyIsDown(87) && car.y > 60) || (keyIsDown(UP_ARROW) && car.y > 60)) {
    car.y -= carSpeed;
  }
  if (
    (keyIsDown(83) && car.y <= 300) ||
    (keyIsDown(DOWN_ARROW) && car.y <= 300)
  ) {
    car.y += carSpeed;
  }
  if ((keyIsDown(65) && car.x >= 1) || (keyIsDown(LEFT_ARROW) && car.x >= 1)) {
    car.x -= carSpeed;
  }
  if (
    (keyIsDown(68) && car.x <= 300) ||
    (keyIsDown(RIGHT_ARROW) && car.x <= 300)
  ) {
    car.x += carSpeed;
  }
  if (keyIsDown(187) && userName == "Liam") {
    //coins = 1000;
    //shield = 10;
    //coinCost = 600;
    //coinMultiplier = 5;
    score++;
  }
  //if(keyIsDown(187)&&userName == "Kool"){
  //coins += 1
  //}
}

function inside() {
  if (
    character.x < coin.x + coin.w &&
    character.x + coin.w > coin.x &&
    character.y < coin.y + coin.h &&
    character.y + coin.h > coin.y
  ) {
    collect = 1;
    coins += 1 * coinMultiplier;
    coinSound.play();
  }
  if (
    character.x < huge.x + huge.w &&
    character.x + huge.w > huge.x &&
    character.y < huge.y + huge.h &&
    character.y + huge.h > huge.y
  ) {
    hugeCollect = 1;
    coins += 10 * coinMultiplier;
    coinSound.play();
  }
  if (
    character.x < box1.x + box1.w &&
    character.x + box1.w > box1.x &&
    character.y < box1.y + box1.h &&
    character.y + box1.h > box1.y
  ) {
    death = true;
  }
  if (
    character.x < box2.x + box2.w &&
    character.x + box2.w > box2.x &&
    character.y < box2.y + box2.h &&
    character.y + box2.h > box2.y
  ) {
    death = true;
  }
  if (
    character.x < box3.x + box3.w &&
    character.x + box3.w > box3.x &&
    character.y < box3.y + box3.h &&
    character.y + box3.h > box3.y
  ) {
    death = true;
  }
  if (
    character.x < ship.x + ship.w &&
    character.x + ship.w > ship.x &&
    character.y < ship.y + ship.h &&
    character.y + ship.h > ship.y
  ) {
    spaceLaunch = true;
  }
  if (
    car.x < carBox.x + carBox.w &&
    car.x + carBox.w > carBox.x &&
    car.y < carBox.y + carBox.h &&
    car.y + carBox.h > carBox.y
  ) {
    death = true;
  }
  if (
    character.x < car.x + car.w &&
    character.x + car.w > car.x &&
    character.y < car.y + car.h &&
    character.y + car.h > car.y
  ) {
    stage3 = true;
  }
  if (
    character.x < oxygen.x + oxygen.w &&
    character.x + oxygen.w > oxygen.x &&
    character.y < oxygen.y + oxygen.h &&
    character.y + oxygen.h > oxygen.y
  ) {
    oxygenTime++;
    if (oxygenTime >= 60) {
      oxygenTime = 60;
    }
  }

  if (collect == 1) {
    score += 1;
    coin.x = random(0, width - 100);
    coin.y = random(0, height - 50);
    hugeCoin = int(random(0, 100));
    collect = 0;
  }
  if (spaceLaunch == true) {
    character.x = 600;
    character.y = 600;
    moveSpeed = 0;
    ship.y -= shipSpeed;
  }
  if (ship.y <= -100) {
    character.x = 200;
    character.y = 200;
    moveSpeed = 10;
    box1.x = 700;
    box2.x = 700;
    box3.x = 700;
    space = true;
    spaceLaunch = false;
  }
  if (space == true) {
    moveSpeed = settingsMove;
    ship.y = 600;
    shipSpeed = 2;
    canvasCol.r = 0;
    canvasCol.b = 100;
    canvasCol.g = 0;
    textColor.r = 255;
    textColor.g = 255;
    textColor.b = 255;
    box1.r = 220;
    box1.g = 220;
    box1.b = 220;
    box2.r = 220;
    box2.g = 220;
    box2.b = 220;
    box3.r = 220;
    box3.g = 220;
    box3.b = 220;
    oxygenStation();
  }
  if (stage3 == true) {
    car.x += 3;
    character.x = -100;
    character.y = -100;
    moveSpeed = 0;
    space = false;
  }
  if (car.x >= 400) {
    carStage();
  }
  carBox.x -= carBoxSpeed;

  if (carBox.x <= 0) {
    // start again from other side
    carBox.x = width;
    // make y coordinates random
    carBox.y = random(60, 300);
    //increase speed
    carBoxSpeed += 0.5;
    //add score each time you pass
    score += 1;
    //change box color
    carBox.r = random(0, 250);
    carBox.g = random(0, 250);
    carBox.b = random(0, 250);
    carBox.w = random(50, 150);
  }
  if (carBoxSpeed >= 15) {
    // cap the speed
    carBoxSpeed = 15;
  }

  if (hugeCoin == 2) {
    huge.x = random(0, width - 100);
    huge.y = random(0, height - 50);
    hugeCoin = 0;
  }
  if (hugeCollect == 1) {
    score += 20;
    huge.x = 500;
    huge.y = 500;
    hugeCollect = 0;
  }
}

function deathBox1() {
  fill(box1.r, box1.g, box1.b);
  rect(box1.x, box1.y, box1.w, box1.h);
  box1.x = box1.x - boxSpeed;
  if (box1.x <= 0 - box1.w) {
    box1.x = 400;
    box1.y = random(0, 300);
  }
}
function deathBox2() {
  fill(box2.r, box2.g, box2.b);
  rect(box2.x, box2.y, box2.w, box2.h);
  box2.x = box2.x - boxSpeed;
  if (box2.x <= 0 - box2.w) {
    box2.x = 400;
    box2.y = random(0, 300);
  }
}
function deathBox3() {
  fill(box3.r, box3.g, box3.b);
  rect(box3.x, box3.y, box3.w, box3.h);
  box3.x = box3.x - boxSpeed;
  if (box3.x <= -50) {
    box3.x = 400;
    box3.y = random(0, 300);
  }
}

function defeat() {
  if (death == true) {
    life = life - 1;
    heartIndex -= 1;
    box1.x = 400;
    box2.x = 400;
    box3.x = 400;
    carBox.x = 400;
    death = false;
    if (carActive == true) {
      car.x = 200;
      car.y = 200;
    }
    if (carActive == false) {
      character.x = 200;
      character.y = 200;
    }
    deathSound.play();
  }
  if (life == 0) {
    shieldPressing = false;
    button7.hide();
    button6.show();
    fill("teal");
    rect(0, 0, width, height);
    fill("Black");
    text(
      "GAME OVER\nPress ENTER To Restart\nScore: " +
        score +
        "\n\nLeaderboard " +
        "\n1st: " +
        name1 +
        "," +
        score1 +
        "\n2nd: " +
        name2 +
        "," +
        score2 +
        "\n3rd: " +
        name3 +
        "," +
        score3 +
        "\n4th: " +
        name4 +
        "," +
        score4 +
        "\n5th: " +
        name5 +
        "," +
        score5 +
        "\n6th: " +
        name6 +
        "," +
        score6 +
        "\n7th: " +
        name7 +
        "," +
        score7 +
        "\n8th: " +
        name8 +
        "," +
        score8 +
        "\n9th: " +
        name9 +
        "," +
        score9,
      200,
      200
    );
    boxSpeed = 0;
    car.x = -100;
    car.y = -100;
    coin.x = 500;
    coin.y = 500;
    box1.x = 500;
    box1.y = 500;
    box2.x = 500;
    box2.y = 500;
    box3.x = 500;
    box3.y = 500;
    textColor.r = 0;
    textColor.g = 0;
    textColor.b = 0;
    carBoxSpeed = 0;
    oxygenSpeed = 0;
  }
}
function carStage() {
  carBoxSpeed = 3;
  carActive = true;
  car.x = 200;
  car.y = 200;
  carSpeed = settingsCarMove;
  stage3 = false;
  coin.x = -100;
  coin.y = 100;
  streetC.x = 0;
  streetC.y = 0;
  boxSpeed = 0;
  box1.x = 600;
  box1.y = 600;
  box2.x = 600;
  box2.y = 600;
  box3.x = 600;
  box3.y = 600;
  grass.x = 0;
  grass.y = 0;
  grass.x1 = 0;
  grass.y1 = 375;
  level = 6;
}
function oxygenStation() {
  fill("black");
  rect(oxygen.x, oxygen.y, oxygen.w, oxygen.h);
  fill("white");
  rect(10, 100, 20, oxygenTime);
  oxygenTime -= oxygenSpeed;
  if (oxygenTime <= 0) {
    life -= 1;
    oxygenTime = 60;
    oxygenSpeed += 0.01;
  }
}
function stage4Transition() {
  carBoxSpeed = 0;
  carBox.x = 600;
  car.x += carSpeed;
  if (car.x >= 380) {
    stage4 = true;
    carSpeed = 0;
  }
  if (stage4 == true) {
    character.w = 50;
    character.h = 50;
    character.x = 100;
    character.y = 100;
    carActive = false;
    grass.x = 600;
    carSpeed = 0;
    grass.x1 = 600;
    streetC.x = 600;
    moveSpeed = settingsMove;
    car.x = -200;
    canvasCol.r = 255;
    canvasCol.g = 255;
    canvasCol.b = 255;
    coin.x = 50;
    coin.y = 50;
    box1.x = 410;
    box2.x = 410;
    textColor.r = 0;
    textColor.g = 0;
    textColor.b = 200;
    box1.r = 200;
    box2.r = 200;
    box3.r = 200;
    box1.g = 0;
    box2.g = 0;
    box3.g = 0;
    box1.b = 0;
    box2.b = 0;
    box3.b = 0;
    stage4 = false;
  }
}
function ammount() {
  image(coinImg, 310, 11, 30, 30);
  fill("black");
  textSize(20);
  fill(textColor.r, textColor.g, textColor.b);
  text(coins, 370, 23);
  if (shieldPressing == true) {
    fill(textColor.r, textColor.g, textColor.b);
    text(shield, 45, 300);
  }
}
function highScoreCheck() {
  if (score >= highscore && score >= 1) {
    highscore += 1;
  }
  if (highscore - 1 == score) {
    highscore -= 1;
  }
}
