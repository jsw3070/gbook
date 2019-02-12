var config = {
    apiKey: "AIzaSyD6cGW7r4WXJd3lJbd5VI0h3aRXKbpYofg",
    authDomain: "jsw3070-gbook.firebaseapp.com",
    databaseURL: "https://jsw3070-gbook.firebaseio.com",
    projectId: "jsw3070-gbook",
    storageBucket: "jsw3070-gbook.appspot.com",
    messagingSenderId: "264570551322"
  };
  firebase.initializeApp(config);

/***** 전역변수 설정 *****/
var log = console.log;
var auth = firebase.auth();
var db = firebase.database();
var googleAuth = new firebase.auth.GoogleAuthProvider();

/***** Auth *****/
$("#login_bt").on("click", function(){
  auth.signInWithPopup(googleAuth);
  // auth.signInWithRedirect(googleAuth);
});
$("#logout_bt").on("click", function(){
   auth.signOut();
});

auth.onAuthStateChanged(function(result){
  if(result){
    var email = '<img src="'+result.photoURL+'" style="width:24px; box-radius:50%;"> '+result.email
    $("#login_bt").hide();
    $("#logout_bt").show();
    $("#user_email").html(result.email);
  }
  else {
    $("#login_bt").show();
    $("#logout_bt").hide();
    $("#user_email").html('');
  }
});