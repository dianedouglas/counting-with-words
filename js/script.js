var numericalValue = function(inputNumber){


  var singleDigitWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var outputWord = "";
  if(inputNumber < 10 ){
    outputWord = singleDigitWords[inputNumber];
  }
  else if ((inputNumber > 20) && (inputNumber < 30)){
    outputWord = "twenty " + singleDigitWords[inputNumber - 20];
  }



  return outputWord;
}
