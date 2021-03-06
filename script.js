$(document).ready(function(){
$('.message').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
 $(".results").click(function() {
  if (!$("input[name='q1']:checked").val() ||
  !$("input[name='q2']:checked").val() ||
  !$("input[name='q3']:checked").val() ||
  !$("input[name='q4']:checked").val() ||
  !$("input[name='q5']:checked").val() ||
  !$("input[name='q6']:checked").val() ||
  !$("input[name='q7']:checked").val() ||
  !$("input[name='q8']:checked").val() ||
  !$("input[name='q9']:checked").val()
  ) {
  alert("You're not done yet!");
  } else {
  var answers = 0;
  if ($("input[name='q1']:checked").val() == "3"){
    answers++
  };
  if ($("input[name='q2']:checked").val() == "8"){
    answers++
  };
  if ($("input[name='q3']:checked").val() == "4"){
    answers++
  };
  if ($("input[name='q4']:checked").val() == "8"){
    answers++
  };
  if ($("input[name='q5']:checked").val() == "4"){
    answers++
  };
  if ($("input[name='q6']:checked").val() == "8"){
    answers++
  };
  if ($("input[name='q7']:checked").val() == "2"){
    answers++
  };
  if ($("input[name='q8']:checked").val() == "7"){
    answers++
  };
  if ($("input[name='q9']:checked").val() == "8"){
    answers++
  };
  var score = 'You got ' + answers + '/9 questions correctly!';
$(".results").text(score);
$(".results").show("slow");
  }
      });
$(function(){  // Initialize Firebase
        var config = {
          apiKey: "AIzaSyBJpIuAiESFuSKxcNkd1KMGpi4CKeHhgSU",
          authDomain: "quiz-a68ad.firebaseapp.com",
          databaseURL: "https://quiz-a68ad.firebaseio.com",
          projectId: "quiz-a68ad",
          storageBucket: "quiz-a68ad.appspot.com",
          messagingSenderId: "533066696037"
        };
        firebase.initializeApp(config);
        // Get Elements
    const emailRegister = document.getElementById('email-register');
    const passwordRegister = document.getElementById('password-register');
    const emailLogin = document.getElementById('email-login');
    const passwordLogin = document.getElementById('password-login');
    const LogIn= document.getElementById('LogIn');
    const SignUp= document.getElementById('SignUp');
    const Logout= document.getElementById('Logout');

    LogIn.addEventListener('click', e => {
      const txtEmail = emailLogin.value;
      const txtPass = passwordLogin.value;
      const auth = firebase.auth();
      // Sign in
      const promise = auth.signInWithEmailAndPassword(txtEmail, txtPass);
      promise.catch(e => console.log(e.message));
    });
    SignUp.addEventListener('click', e => {
      const txtEmail = emailRegister.value;
      const txtPass = passwordRegister.value;
      const auth = firebase.auth();
      // Sign in
      const promise = auth.createUserWithEmailAndPassword(txtEmail, txtPass);
      promise.catch(e => console.log(e.message));
    });
    LogOut.addEventListener('click', e => {
      firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        $("body").css("background", "white");
        $('#login-page').hide();
        $('#LogOut').show();
        $('#quiz-form').show();
        $('#logo').show();
        $('#header').hide();
        console.log('firebaseUser');
      } else {
        $("body").css("background", "linear-gradient(to left, #5f4ea2, #321d84)");
        $('#header').show();
        $('#logo').hide();
        $('#quiz-form').hide();
        $('#LogOut').hide();
        $('#login-page').show();
        console.log('not logged in');
      }
    });
});});
