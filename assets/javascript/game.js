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
    var crystalValue= 0;
    //var imageCrystal = $("<img>");


    //get computerRandomNumber to match
      computerRandomNumber=Math.floor(Math.random()*101)+19;
  
      //Value Needed to Match:
      $("#myComputerRandomNumber").text('Value Needed: '+ computerRandomNumber);
      console.log('Value Needed TOP: ',computerRandomNumber);

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
  
      console.log (   "redTOP: ",numberOptions[0].value);
      console.log (  "blueTOP: ",numberOptions[1].value);
      console.log ( "greenTOP: ",numberOptions[2].value);
      console.log ("yellowTOP: ",numberOptions[3].value);

      //assign crystal values to images on DOM 
      for (var i = 0; i < numberOptions.length; i++) {
        //var imageCrystal = $("<img>");
        imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "assets/images/" + numberOptions[i].fileName);
        imageCrystal.attr("data-crystalvalue", numberOptions[i].value);
        $("#crystals").append(imageCrystal);
      }

    console.log("initial sumTOP: ",sum);
  /////////////////////////////////////////////////////////////////////////////////////////////////
  //
  //     Play Game
  //
  //  click crystal image to get value to sum and check 
  //
  /////////////////////////////////////////////////////////////////////////////////////////////////

    $(".crystal-image").on("click", function() {
        crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        sum = sum+crystalValue;

        console.log ("sumS: ",sum);
      
        // Update- Your Total Score Is:
        $("#sumCrystalValues").text(`  ${sum}`);
      
        if (sum === computerRandomNumber){
          console.log("win");
          wins++
          //Reset Values

          sum=0;
          // Your Total Score Is: 0
          $("#sumCrystalValues").text(`  ${sum}`);
          
          // Get new Value Needed to Match
          computerRandomNumber=Math.floor(Math.random()*101)+19;
          $("#myComputerRandomNumber").text('Value NeededW: '+ computerRandomNumber);
          
          // Get new crystal values
          redValue=Math.floor(Math.random()*12)+1;
          blueValue=Math.floor(Math.random()*12)+1;
          greenValue=Math.floor(Math.random()*12)+1;
          yellowValue=Math.floor(Math.random()*12)+1;
          
          numberOptions[0].value = redValue;
          numberOptions[1].value = blueValue;
          numberOptions[2].value = greenValue;
          numberOptions[3].value = yellowValue;

          console.log (   "new redW: ",numberOptions[0].value);
          console.log (  "new blueW: ",numberOptions[1].value);
          console.log ( "new greenW: ",numberOptions[2].value);
          console.log ("new yellowW: ",numberOptions[3].value);

          //assign crystal values to images on DOM 
          
           //for (var i = 0; i < numberOptions.length; i++) {
           //  var imageCrystal = $("<img>");
             //imageCrystal.addClass("crystal-image");
             //imageCrystal.attr("src", "assets/images/" + numberOptions[i].fileName);

             //this is changing yellow only 
             imageCrystal.attr("data-crystalvalue", numberOptions[0].value);
             //imageCrystal.attr("data-crystalvalue", numberOptions[1].value);
             //imageCrystal.attr("data-crystalvalue", numberOptions[2].value);
             //imageCrystal.attr("data-crystalvalue", numberOptions[3].value);

             //   $("#crystals").append(imageCrystal);
           //}

          $("#yourWinsLosses").html('<p> wins: '+ wins  + "</p><p>" +'    losses: ' + losses + '</p>');   
          //end win updates   
          
        } else {
          if (sum > computerRandomNumber) {
            console.log("lose")
            losses++;
            //Reset Values
            sum=0;
            // Your Total Score Is : 0
            $("#sumCrystalValues").text(`  ${sum}`);
            
            // Get new Value Needed to Match
            computerRandomNumber=Math.floor(Math.random()*101)+19;
            $("#myComputerRandomNumber").text('Value NeededL: '+ computerRandomNumber);
            
            // Get new crystal values
            redValue=Math.floor(Math.random()*12)+1;
            blueValue=Math.floor(Math.random()*12)+1;
            greenValue=Math.floor(Math.random()*12)+1;
            yellowValue=Math.floor(Math.random()*12)+1;
            
            numberOptions[0].value = redValue;
            numberOptions[1].value = blueValue;
            numberOptions[2].value = greenValue;
            numberOptions[3].value = yellowValue;

             console.log (   "new redL: ",numberOptions[0].value);
             console.log (  "new blueL: ",numberOptions[1].value);
             console.log ( "new greenL: ",numberOptions[2].value);
             console.log ("new yellowL: ",numberOptions[3].value);

            $("#yourWinsLosses").html('<p> wins: '+ wins  + "</p><p>" +'    losses: ' + losses + '</p>');
            //end losses updates
          } else {
            console.log ("In the game: ",sum);
          }
        }
      } // end crystal click function
    ); // end crystal click query on
  } // end document ready function
);//end document ready on

