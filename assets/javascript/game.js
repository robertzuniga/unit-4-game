// Robert Zuniga
$(document).ready(function() {
    // When the document has finished being loaded by the web
    // browser, then execute the following code:
    var targetNumber=53;
    $("#number-to-guess").text(targetNumber);
    var counter = 0;
    var numberOptions = [
        { fileName: "crystal-red.png",  value: 10 },
        { fileName: "crystal-blue.png", value: 20 },
        { fileName: "crystal-green.png", value: 30 },
        { fileName: "crystal-yellow.png", value: 40 },
    ];

/* <img src="assets/images/crystal-red.png" class="img crystal-red">
<img src="assets/images/crystal-blue.png" class="img crystal-blue">
<img src="assets/images/crystal-yellow.png" class="img crystal-yellow">
<img src="assets/images/crystal-green.png" class="img crystal-green"></img> */
  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/" + numberOptions[i].fileName);
    imageCrystal.attr("data-crystalvalue", numberOptions[i].value);
    $("#crystals").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    $("#crystalValueExample").text(`Crystal's Value: ${crystalValue}`);
    // counter += crystalValue;
    // alert("New score: " + counter);
    // if (counter === targetNumber) {
    //   alert("You win!");
    // }
    // else if (counter >= targetNumber) {
    //   alert("You lose!!");
    // }
  });

});

