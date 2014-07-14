var numericalValue = function(inputNumber){
  inputNumber = inputNumber.toString().split("");
  var singleDigitWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var secondDigitWords = ["teen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ]
  var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  var outputWord = "";

  if (inputNumber.length === 1){
    outputWord = singleDigitWords[inputNumber[0]];
  } else if (inputNumber.length === 2){

    if (inputNumber[1] === "0" && inputNumber[0] !== "1"){ //10 happens here
      outputWord = secondDigitWords[inputNumber[0]-1];
    } else if (inputNumber[0] === "1"){
      outputWord = teens[inputNumber[1]];
    }
    else {
      outputWord = secondDigitWords[inputNumber[0]-1] + " " + singleDigitWords[inputNumber[1]];
    }
  }


  return outputWord;
}
