var numericalValue = function(inputNumber){
  inputNumber = inputNumber.toString().split("");
  var singleDigitWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var secondDigitWords = ["teen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ]
  var outputWord = "";

  if (inputNumber.length === 1){
    outputWord = singleDigitWords[inputNumber[0]];
  } else if (inputNumber.length === 2){
    outputWord = secondDigitWords[inputNumber[0]-1] + " " + singleDigitWords[inputNumber[1]];
  }

  // else if ((inputNumber > 20) && (inputNumber < 30)){
  //   outputWord = "twenty " + singleDigitWords[inputNumber - 20];
  // }



  return outputWord;
}
