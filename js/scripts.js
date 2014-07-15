var firstNumberSection = function(inputNumber){
  inputNumber = inputNumber.toString().split("");
  var singleDigitWords = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var secondDigitWords = ["teen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ]
  var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  var outputWord = "";

  if (inputNumber.length === 3){
    if((inputNumber[1] === "0") && (inputNumber[2] === "0")){
      return outputWord = singleDigitWords[inputNumber[0]] + " hundred";
    } else if((inputNumber[1] === "0")){
      outputWord = singleDigitWords[inputNumber[0]] + " hundred and ";
      inputNumber.splice(0, 2);
    } else {
      outputWord = singleDigitWords[inputNumber[0]] + " hundred and ";
      inputNumber.splice(0, 1);
    }
  }
  if (inputNumber.length === 1){
    outputWord += singleDigitWords[inputNumber[0]];
  }
  else if (inputNumber.length === 2){
    if (inputNumber[1] === "0" && inputNumber[0] !== "1"){
      outputWord += secondDigitWords[inputNumber[0]-1];
    } else if (inputNumber[0] === "1"){
      outputWord += teens[inputNumber[1]];
    } else {
      outputWord += secondDigitWords[inputNumber[0]-1] + " " + singleDigitWords[inputNumber[1]];
    }
  }
  return outputWord;
}

var numbWord = function(number){
  if (number === 0) {
    return "zero";
  }
  var digitName = ["","thousand","million","billion","trillion","quadrillion","quintillion","sixtillion","sectillion","octillion","ninetillion","trillion billion"];
  var numbArray = number.toString().split("");
  var loopStop = Math.ceil(numbArray.length / 3);
  var numbInt = parseInt(numbArray.join(""));
  var outputWord = "";

  for(var i = 0; loopStop > 0; loopStop--){
    var remainder = numbInt % 1000;
    if ((i === 0) && ((remainder < 100) && (remainder > 0)) && (numbArray.length > 3)) {
      outputWord = "and " + firstNumberSection(remainder);
    } else if(remainder !== 0){
      outputWord = firstNumberSection(remainder) + " " + digitName[i] + " " + outputWord;
    }
    i++;
    numbInt = Math.floor(numbInt / 1000);
  }
  return outputWord.trim();
}

$(document).ready(function(){
  $("form").submit(function(event){
    var inputNumber = $("input#userNumber").val();
    var outputWord = numbWord(Math.abs(inputNumber));

    if(inputNumber >= 0){
      if(inputNumber !== ""){
        outputWord = outputWord.charAt(0).toUpperCase() + outputWord.slice(1);
        $("#result p").text("That would equal: "+outputWord+"!");
        $("#result").show();
      } else {
        alert("Please enter a number.");
        $("#result").hide();
      }
    } else {
      $("#result p").text("That would equal: Negative "+outputWord+"!");
      $("#result").show();
    }
    event.preventDefault();
  })
})
