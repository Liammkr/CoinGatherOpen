//require("dotenv").config();
function setup() {
  var canvasPos = createCanvas(400, 400);
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  canvasPos.position(x, y);
  // Welcome to my game , I am well aware on how easy it is to add fake posts to the data base and use the console to increase your score but just please dont. I have made this game for fun and so other people can learn from the code. Hope you enjoy the game - Liam
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
    userName = "logged out";
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
  button1 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/Play.png",
    "Play"
  )
    .position(x + 175, y + 150)
    .size(50, 50)
    .mousePressed(gameStart);
  button2 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/Menu_Shop.png",
    "shop"
  )
    .position(x + 20, y + 300)
    .size(30, 30)
    .mousePressed(clicked2);
  button4 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/Back.png",
    "back"
  )
    .position(x + 10, y + 10)
    .size(20, 20)
    .mousePressed(back1);
  button3 = createButton("Buy")
    .position(x + 40, y + 110)
    .size(75, 20)
    .mousePressed(buy);
  button5 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/LeaderBoard1.png",
    "LeaderBoard"
  )
    .size(30, 30)
    .position(x + 360, y + 300)
    .mousePressed(leaderBoardPress);
  button6 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/Menu_Img.png",
    "go back to menu"
  )
    .position(x + 10, y + 10)
    .size(30, 30)
    .mousePressed(menuGoBack);
  button7 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/Shield-2.png",
    "shield"
  )
    .position(x + 30, y + 320)
    .size(30, 30)
    .mousePressed(shieldActivate);
  button9 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/Settings.png",
    "settings"
  )
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
  behind1 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/PurpleImg.png",
    "left"
  )
    .position(0, 0)
    .size(x, windowHeight);
  behind2 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/PurpleImg.png",
    "top"
  )
    .position(x, 0)
    .size(width, y);
  behind3 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/PurpleImg.png",
    "bottom"
  )
    .position(x, y + height)
    .size(width, y);
  behind4 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/PurpleImg.png",
    "right"
  )
    .position(x + width, 0)
    .size(x, windowHeight);
  button15 = createButton("Play")
    .size(90, 40)
    .position(x + 55, y + 250)
    .mousePressed(gameStartFinal);
  button16 = createButton("Play (Beta)")
    .mousePressed(game2Open)
    .size(90, 40)
    .position(x + 260, y + 250);
  button17 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/P5jsLogo.png",
    "P5logo"
  )
    .size(50, 50)
    .position(x + 30, y + 330)
    .mousePressed(p5Open);
  button18 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/GitHub.png",
    "GitHubLogo"
  )
    .size(50, 50)
    .position(x + 100, y + 330)
    .mousePressed(sitesOpen);
  button19 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/GlitchLogo.jpeg",
    "GlitchLogo"
  )
    .size(50, 50)
    .position(x + 240, y + 330)
    .mousePressed(glitchOpen);
  button20 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/ReplitLogo.png",
    "ReplitLogo"
  )
    .size(50, 50)
    .position(x + 310, y + 330)
    .mousePressed(replOpen);
  button21 = createImg(
    "https://coingathergame.liamrubin2.repl.co/Assets/GitHub.png",
    "GitHubLogo"
  )
    .size(50, 50)
    .position(x + 170, y + 330)
    .mousePressed(repoOpen);
  button22 = createButton("Log In")
    .size(75, 30)
    .position(x + 120, y + 300)
    .mousePressed(loginMenu);
  button23 = createButton("Sign Up")
    .size(75, 30)
    .position(x + 220, y + 300)
    .mousePressed(signUpMenu);
  button24 = createInput().size(150, 20).position(x+100, y+175);
  button25 = createInput().size(150, 20).position(x+100, y+275);
  button26 = createButton("Log In").size(100, 30).position(x+130, y+350).mousePressed(doLogin);
  button27 = createButton("Sign Up").size(100, 30).position(x+130, y+350).mousePressed(doSignUp);
  button28 = createButton("Log Out").size(80,20).position(x + 165, y + 370).mousePressed(doLogOut);
  button28.hide();
  button24.hide();
  button25.hide();
  button11.hide();
  button15.hide();
  button16.hide();
  button12.hide();
  button13.hide();
  button3.hide();
  button4.hide();
  button6.hide();
  button7.hide();
  button10.hide();
  button14.hide();
  button21.hide();
  button20.hide();
  button19.hide();
  button18.hide();
  button17.hide();
  button22.hide();
  button23.hide();
  button26.hide();
  button27.hide();
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
  menu = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Menu_Shop.png"
  );
  play = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Play.png");
  settingsImg = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Settings.png"
  );
  leaderBoardImg = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/LeaderBoard1.png"
  );
  pixel = loadFont(
    "https://coingathergame.liamrubin2.repl.co/Assets/slkscre.ttf"
  );
  shieldImg = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Shield-2.png"
  );
  characterImg = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Character.png"
  );
  coinImg = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Coin.png"
  );
  bigCoinImg = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/BigCoin.png"
  );
  shipImg = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Spaceship.png"
  );
  carImg = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Car.png"
  );
  street = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Street.png"
  );
  heart[6] = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Heart6.png"
  );
  heart[5] = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Heart5.png"
  );
  heart[4] = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Heart4.png"
  );
  heart[3] = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Heart3.png"
  );
  heart[2] = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Heart2.png"
  );
  heart[1] = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Heart1.png"
  );
  heart[0] = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/Heart0.png"
  );
  sky1 = loadImage("https://coingathergame.liamrubin2.repl.co/Assets/Sky2.png");
  coinSound = loadSound(
    "https://coingathergame.liamrubin2.repl.co/Assets/CoinSound.wav"
  );
  shieldSound = loadSound(
    "https://coingathergame.liamrubin2.repl.co/Assets/ShieldUse.wav"
  );
  buySound = loadSound(
    "https://coingathergame.liamrubin2.repl.co/Assets/BuyingSound.wav"
  );
  deathSound = loadSound(
    "https://coingathergame.liamrubin2.repl.co/Assets/DeathSound.wav"
  );
  lootBox1Img = loadImage(
    "https://coingathergame.liamrubin2.repl.co/Assets/CommonBox.png"
  );
}
function draw() {
  login();
  background(canvasCol.r, canvasCol.g, canvasCol.b);
  textAlign(CENTER, CENTER);
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
    textSize(15);
    text("Logged In As: " + userName, 200,350);
    canvasCol.r = 120;
    canvasCol.g = 120;
    canvasCol.b = 160;
    button9.show();
    textColor.r = 0;
    textColor.g = 0;
    textColor.b = 0;
    if (userName == "logged out") {
      button22.show();
      button23.show();
    } else {
      button28.show();
    }
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
    button22.hide();
    button23.hide();
    button3.show();
    button4.show();
    button5.hide();
    button9.hide();
    button28.hide();
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
    button9.hide();
    button11.hide();
    button22.hide();
    button23.hide();
    button12.show();
    button28.hide();
  }
  if (settingsMenu == true) {
    fill("black");
    textSize(15);
    text("Character Move Speed", 180, 140);
    text("Car Move Speed", 170, 240);
    button1.hide();
    button3.hide();
    button28.hide();
    button2.hide();
    button4.show();
    button5.hide();
    button6.hide();
    button7.hide();
    button9.hide();
    button10.show();
    button13.show();
    button24.hide();
    button25.hide();
    button22.hide();
    button23.hide();
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
    button28.hide();
    button3.hide();
    button4.show();
    button5.hide();
    button7.hide();
    button9.hide();
    button11.hide();
    button14.hide();
    button21.show();
    button20.show();
    button19.show();
    button18.show();
    button17.show();
    button22.hide();
    button23.hide();
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
    text("Other Pages (click) :", 200, 320);
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
    button22.hide();
    button23.hide();
    start();
  }
  if (lMenu == true) {
    text("Log In", 200, 100);
    text("Username", 175, 150);
    text("Password", 175, 250);
    textSize(10);
    if (button24.value().length > 8) {
      button26.attribute('disabled', '');
      button26.style("background","grey");
      button26.style("border-color","grey");
    } else {
      button26.removeAttribute('disabled');
      button26.style("background","rgb(5,111,171)");
      button26.style("border-color","rgb(5,111,171)");
    }
    button1.hide();
    button3.hide();
    button2.hide();
    button4.show();
    button5.hide();
    button6.hide();
    button7.hide();
    button9.hide();
    button22.hide();
    button23.hide();
    button24.show();
    button25.show();
    button26.show();
    canvasCol.r = 120;
    canvasCol.g = 30;
    canvasCol.b = 160;
  }
  if (suMenu == true) {
    text("Sign Up", 200, 100);
    text("Username", 175, 150);
    text("Password", 175, 250);
    if (button24.value().length > 8) {
      button27.attribute('disabled', '');
      button27.style("background","grey");
      button27.style("border-color","grey");
    } else {
      button27.removeAttribute('disabled');
      button27.style("background","rgb(5,111,171)");
      button27.style("border-color","rgb(5,111,171)");
    }
    button1.hide();
    button3.hide();
    button2.hide();
    button4.show();
    button5.hide();
    button6.hide();
    button7.hide();
    button9.hide();
    button22.hide();
    button23.hide();
    button24.show();
    button25.show();
    button27.show();
    canvasCol.r = 120;
    canvasCol.g = 30;
    canvasCol.b = 160;
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
  if(userName == "logged out"){
    alert("Sign Up / Log In To Submit Score")
  }
  else if(highscore >= score1) {
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
  } else {
    alert("Not Enough Coins!");
  }
}
function buy1() {
  if (coins >= coinCost) {
    coinMultiplier += 1;
    coins -= coinCost;
    coinCost += 100;
    buySound.play();
  } else {
    alert("Not Enough Coins!");
  }
}
function buy3() {
  if (coins >= 300) {
    coins -= 300;
    commonBoxOpen();
    buySound.play();
  } else {
    alert("Not Enough Coins!");
  }
}
function p5Open() {
  window.open("https://editor.p5js.org/lr14/full/B0suIbb69");
}
function sitesOpen() {
  window.open("https://liammkr.github.io/CoinGather/");
}
function repoOpen() {
  window.open("https://github.com/Liammkr/CoinGatherOpen");
}
function glitchOpen() {
  window.open("https://coingather.glitch.me/");
}
function replOpen() {
  window.open("https://CoinGatherGame.liamrubin2.repl.co");
}
function game2Open() {
  window.open("https://editor.p5js.org/lr14/full/rggG9hH3I");
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
  if (userName == "logged out") {
      button22.show();
      button23.show();
    } else {
      button28.show();
    }
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
  button22.hide();
  button23.hide();
  button24.hide();
  button25.hide();
  button26.hide();
  button27.hide();
  canvasCol.r = 30;
  canvasCol.g = 120;
  canvasCol.b = 160;
  shop = false;
  leaderBoard = false;
  mainMenu = true;
  settingsMenu = false;
  game = false;
  lMenu = false;
  suMenu = false;
  if (userName == "logged out") {
      button22.show();
      button23.show();
    } else {
      button28.show();
  }
}
function leaderBoardPress() {
  leaderBoard = true;
  mainMenu = false;
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
