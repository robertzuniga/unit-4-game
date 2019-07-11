// Robert Zuniga
$(document).ready(function() {
    // When the document has finished being loaded by the web
    // browser, then execute the following code:

  var wins = 0; var losses = 0; 
  var computerRandomNumber = 0;
  var redValue = 0;
  var blueValue = 0;
  var greenValue = 0;
  var yellowValue = 0;
  var sum = 0;
  crystalValue= 0;


   //get computerRandomNumber to match
    computerRandomNumber=Math.floor(Math.random()*101)+19;
    $("#myComputerRandomNumber").text('Value Needed: '+ computerRandomNumber);
  
    console.log('Value Needed: ',computerRandomNumber);

  //get random numbers for crytals and assign to numberOptions object 
    redValue=Math.floor(Math.random()*12)+1;
    blueValue=Math.floor(Math.random()*12)+1;
    greenValue=Math.floor(Math.random()*12)+1;
    yellowValue=Math.floor(Math.random()*12)+1;
   
    var numberOptions = [
        { fileName: "crystal-red.png",  value: redValue},
        { fileName: "crystal-blue.png", value: blueValue },
        { fileName: "crystal-green.png", value: greenValue },
        { fileName: "crystal-yellow.png", value: yellowValue},
    ];
 
    console.log ("red: ",numberOptions[0].value);
    console.log ("blue: ",numberOptions[1].value);
    console.log ("green: ",numberOptions[2].value);
    console.log ("yellow: ",numberOptions[3].value);

    //assign crystal values to images on DOM 
    for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/" + numberOptions[i].fileName);
    imageCrystal.attr("data-crystalvalue", numberOptions[i].value);
    $("#crystals").append(imageCrystal);
  }

  console.log("initial sum: ",sum);

  // click crystal image to get value to sum and check 
  $(".crystal-image").on("click", function() {
    crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    sum = sum+crystalValue;
    console.log ("sum: ",sum);
   

    $("#sumCrystalValues").text(`  ${sum}`);
   
   
   if (sum === computerRandomNumber){
      console.log("match");
      wins++
     $("#yourWinsLosses").text('wins: '+ wins  + '    losses: ' + losses);
    } else {
     if (sum > computerRandomNumber) {
       console.log("lose")
       losses++;
       sum=0;
       $("#sumCrystalValues").text(`  ${sum}`);
       computerRandomNumber=Math.floor(Math.random()*101)+19;
       $("#myComputerRandomNumber").text('Value Needed: '+ computerRandomNumber);
       redValue=Math.floor(Math.random()*12)+1;
       blueValue=Math.floor(Math.random()*12)+1;
       greenValue=Math.floor(Math.random()*12)+1;
       yellowValue=Math.floor(Math.random()*12)+1;
       
       numberOptions[0].value = redValue;
       numberOptions[1].value = blueValue;
       numberOptions[2].value = greenValue;
       numberOptions[3].value = yellowValue;

       console.log ("new red: ",numberOptions[0].value);
       console.log ("new blue: ",numberOptions[1].value);
       console.log ("new green: ",numberOptions[2].value);
       console.log ("new yellow: ",numberOptions[3].value);

       $("#yourWinsLosses").html('<p> wins: '+ wins  + "</p><p>" +'    losses: ' + losses + '</p>');
      } //end losses
     else {
      console.log ("In the game: ",sum);
   

     }
   }


  });


});

