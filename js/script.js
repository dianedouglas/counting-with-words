var biginNumbas = function(inputNumber){
  var singleDigitWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  biginNumbas = {
    4 : "thousand",
    7 : "million",
    10 : "billion",
    13 : "trillion",
  };
  inputNumber = inputNumber.toString().split("");
  var outputWord = "";

  for (var i = inputNumber.length; inputNumber.length > 0;){
    var inputNumberString = inputNumber.join("");
    var inputNumberInt = parseInt(inputNumberString);
    var inputNumberRemainder = inputNumberInt % 1000;
    var frontSection = firstNumberSection(inputNumberRemainder);
    inputNumber.splice((inputNumber.length-3),3);

    var biginNumba = biginNumbas[inputNumber.length];
    outputWord += biginNumba + frontSection;
    // for (var h = 0; h <= 3; h++){
    //   firstNumberSection(inputNumber);
  }

  return outputWord;

  // }
  // var outputWord = "";
  // var firstThreeDigits = "";
  // if (inputNumber.length > 3){
  //   //if more than 3 digits, first get the smallest three digits translated.
  //   inputNumber = inputNumber.reverse();
  //   firstThreeDigits = inputNumber.slice(0, 3);
  //   inputNumber = inputNumber.reverse();
  //   firstThreeDigits.reverse();
  //   firstThreeDigits = firstThreeDigits.join("");

  //   if(inputNumber.length === 3){
  //     outputWord += singleDigitWords[]
  //   }

  // }
  //   console.log(firstNumberSection(firstThreeDigits));

}



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

