function login() {
  userL = button24.value();
  passL = button25.value();
  firebase
    .database()
    .ref("users/" + userL)
    .once("value")
    .then((snapshot) => {
      correctPass = snapshot.val() && snapshot.val().pass;
      takenName = snapshot.val() && snapshot.val().user;
    });
}
function doLogin() {
  if (correctPass == passL) {
    print("logged in");
    userName = userL;
    lMenu = false;
    mainMenu = true;
    button24.hide();
    button25.hide();
    button4.hide();
    button26.hide();
    button27.hide();
    button5.show();
    button2.show();
    button1.show();
  } else {
    alert("Wrong Username / Password")
  }
}
function doSignUp() {
  if(takenName == userL){
    alert("Username Taken");
  } else {
    suMenu = false;
    mainMenu = true;
    button24.hide();
    button25.hide();
    button4.hide();
    button26.hide();
    button27.hide();
    button5.show();
    button2.show();
    button1.show();
    userData(userL, passL);
    print("Signed Up!");
  }  
}
function userData(userName, password) {
  firebase
    .database()
    .ref("users/" + userL)
    .set({
      user: userName,
      pass: password,
    });
}
function loginMenu(){
  lMenu = true;
  mainMenu = false;
}
function signUpMenu(){
  suMenu = true;
  mainMenu = false;
}
function doLogOut(){
  userName = "logged out"
  button28.hide();
}
