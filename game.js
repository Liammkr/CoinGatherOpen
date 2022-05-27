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
