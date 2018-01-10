$(document).ready(function(){
$('.message').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
});
$(document).ready(function()
{    $("#results").click(function() {

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
}
var cat1 = ($("input[@name=q1]:checked").val() != "3");

var cat2 = ($("input[@name=q2]:checked").val() != "8");

var cat3 = ($("input[@name=q3]:checked").val() != "4");

var cat4 = ($("input[@name=q4]:checked").val() != "8");

var cat5 = ($("input[@name=q5]:checked").val() != "4");

var cat6 = ($("input[@name=q6]:checked").val() != "8");

var cat7 = ($("input[@name=q7]:checked").val() != "2");

var cat8 = ($("input[@name=q8]:checked").val() != "7");

var cat9 = ($("input[@name=q9]:checked").val() != "8");

var cat10 = (!cat1 && !cat2 && !cat3 && !cat4 && !cat5 && !cat6 && !cat7 && !cat8 && !cat9); var categories = [];
alert cat10;
