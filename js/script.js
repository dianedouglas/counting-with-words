var firstNumberSection = function(inputNumber){
  inputNumber = inputNumber.toString().split("");
  var singleDigitWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var secondDigitWords = ["teen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ]
  var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  var outputWord = "";

  if (inputNumber.length === 3){
    if((inputNumber[1] === "0") && (inputNumber[2] === "0")){
      return outputWord = singleDigitWords[inputNumber[0]] + " hundred";
    } else{
      outputWord = singleDigitWords[inputNumber[0]] + " hundred and ";
      inputNumber.splice(0, 1);
    }
  }


  if (inputNumber.length === 1){
    outputWord += singleDigitWords[inputNumber[0]];
  } else if (inputNumber.length === 2){

    if (inputNumber[1] === "0" && inputNumber[0] !== "1"){ //10 happens here
      outputWord += secondDigitWords[inputNumber[0]-1];
    } else if (inputNumber[0] === "1"){
      outputWord += teens[inputNumber[1]];
    }
    else {
      outputWord += secondDigitWords[inputNumber[0]-1] + " " + singleDigitWords[inputNumber[1]];
    }
  }
  return outputWord;
}

// nine hundred ninety nine billion
// nine hundred ninety nine million
// nine hundred ninety nine thousand
// nine hundred ninety nine

// nine hundred ninety nine billion
// nine hundred and nine million
// nine hundred ninety nine thousand
// nine hundred ninety nine

