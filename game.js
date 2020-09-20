



$( "body" ).keydown(function() {
    $(".Score-title").text("");
$(".MadeBy-title").text("");



  $("#level-title").text("Game Running");


  //START JOC

  var gamePattern = [];

  var userClickedPattern = [];
  var buttonColours = ["red", "blue", "green", "yellow"];




  //Generez Vector
  function generateStep() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  }


  generateStep();

  //Afisare secventei



  function reCall(i, dim) {




    if (i < dim) {
      $("#" + gamePattern[i]).fadeOut(100).fadeIn(100);

      var audio = new Audio("sounds/"+gamePattern[i]+".mp3");
      audio.play();

      var i2 = i;
      var dim2 = dim;
      i2++;
      setTimeout(function() {
        reCall(i2, dim2);
      }, 850);

    }


  }





  function Afisare() {
    var i = 0;
    var dim = gamePattern.length;
    reCall(i, dim);
  }


  Afisare();


  // showGamePattern();

  // Memorare alegere user
  $(".btn").click(function(event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);

    var audio = new Audio("sounds/"+userChosenColour+".mp3");
    audio.play();

    $("#" + userChosenColour).fadeOut(50).fadeIn(50);


    if (checkSizeEquality() == true) {


setTimeout(function(){ getResult(); }, 1200);







    }


    console.log(userClickedPattern);
    console.log(gamePattern);



  });



  function checkSizeEquality() {
    if (userClickedPattern.length == gamePattern.length)
      return true;
    else return false;
  }


  function getResult() {
    if (userClickedPattern.toString() === gamePattern.toString()) {
      console.log("win");




        generateStep();



      Afisare();

      userClickedPattern = [];
    } else
  {
     console.log("lost");
var score=gamePattern.length-1;
  $("#level-title").text("Game Over");
  $(".Score-title").text("Score: "+score);

  $(".MadeBy-title").text("Made By CRS");





  // $("h1").after("<h1 class=Score >Score x</h1>");
  // $(".Score").text("Score:"+gamePattern.length-1);
   }

  }



});
