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
      (function(){  // Initialize Firebase
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
    const auth = firebase.auth();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const username = document.getElementById('username');
    const LogIn= document.getElementById('LogIn');
    const SignUp= document.getElementById('SignUp');


    LogIn.addEventListener('click', e => {
      const txtusername = username.value;
      const txtpass = password.value;
      const auth = firebase.auth();
      // Sign in
      const promise = auth.SignInWithUsernameAndPassword(username, password);
      promise.catch(e => console.log(e.message));
    });
    SignUp.addEventListener('click', e => {
      const txtemail = email.value;
      const txtusername = username.value;
      const txtpass = password.value;
      const auth = firebase.auth();
      // Sign in
      const promise = auth.SignInWithUsernameAndPassword(username, password);
      promise.catch(e => console.log(e.message));
});
  //realtime listener
  firebase.auth().onAtuhStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log('not logged in');
  };
});});});
