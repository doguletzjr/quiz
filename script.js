$(document).ready(function(){
$('.message').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  });
  $("#results").click(function() {
  if (!$("input[@name=q1]:checked").val() ||
  !$("input[@name=q2]:checked").val() ||
  !$("input[@name=q3]:checked").val() ||
  !$("input[@name=q4]:checked").val() ||
  !$("input[@name=q5]:checked").val() ||
  !$("input[@name=q6]:checked").val() ||
  !$("input[@name=q7]:checked").val() ||
  !$("input[@name=q8]:checked").val() ||
  !$("input[@name=q9]:checked").val()
  ) {
  alert("You're not done yet!");
  } else {
  var answears = 0;
  if ($("input[@name=q1]:checked").val() == "3"){
    answears++
  };
  if ($("input[@name=q2]:checked").val() == "8"){
    answears++
  };
  if ($("input[@name=q3]:checked").val() == "4"){
    answears++
  };
  if ($("input[@name=q4]:checked").val() == "8"){
    answears++
  };
  if ($("input[@name=q5]:checked").val() == "4"){
    answears++
  };
  if ($("input[@name=q6]:checked").val() == "8"){
    answears++
  };
  if ($("input[@name=q7]:checked").val() == "2"){
    answears++
  };
  if ($("input[@name=q8]:checked").val() == "7"){
    answears++
  };
  if ($("input[@name=q9]:checked").val() == "8"){
    answears++
  };
  var score = 'You answered ' + answears + '/9 correctly!';
$("#categorylist").text(score);
$("#categorylist").show("slow");
  }
      });});
