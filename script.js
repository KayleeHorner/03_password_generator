// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate the password
function generatePassword(){
  // Determine password length
  passwordLength = prompt("How many characters do you want your password to be?")
  // Check if password is a number
  if (!isNaN(passwordLength)) {
    } else {alert("Input must be a number"); 
  } 
  // Make sure password meets length requirements
  if (passwordLength < 8) {
    alert("Not secure enough, you need more characters! The minimum is 8");
  }
  if (passwordLength >= 128) {
    alert("Try again, that's too many characters! The max is 128.");
  }

  // Password component confirmations
  if (passwordLength >= 8 && passwordLength <= 128) {
    var uppercase = confirm("Do you want to include uppercase letters?");
    var lowercase = confirm("Do you want to include lowercase letters?");
    var numbers = confirm("Do you want to include numbers?");
    var symbols = confirm("Do you want to include special characters?");
  } 
  if (uppercase === false && lowercase === false && numbers === false && symbols === false) {
    alert("You must select at least one option!");
  }

  // Value options
  var upperValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerValues = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var symbolValues = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  var password = " ";


  var upperRandom = upperValues[Math.floor(Math.random() * (upperValues.length - 1))];
  var lowerRandom = lowerValues[Math.floor(Math.random() * (lowerValues.length - 1))];
  var numericRandom = numeric[Math.floor(Math.random() * (numeric.length - 1))];
  var symbolRandom = symbolValues[Math.floor(Math.random() * (symbolValues.length - 1))];

  // Determining password if all true
  for (var i = 0; i < passwordLength; i++) {
    if (uppercase === true && lowercase === true && numbers === true && symbols === true) {
        password = upperRandom.concat(lowerRandom, numericRandom, symbolRandom);

  // If one is false      
    } else if (uppercase === true && lowercase === true && numbers === true && symbols === false) {
        password = upperRandom.concat(lowerRandom, numericRandom);

    } else if (uppercase === true && lowercase === true && numbers === false && symbols === true) {
        password = upperRandom.concat(lowerRandom, symbolRandom);
    
    } else if (uppercase === true && lowercase === false && numbers === true && symbols === true) {
      password = upperRandom.concat(numericRandom, symbolRandom);
        
    } else if (uppercase === false && lowercase === true && numbers === true && symbols === true) {
      password = lowerRandom.concat(numericRandom, symbolRandom);

  // If two are false
    } else if (uppercase === false && lowercase === false && numbers === true && symbols === true) {
      password = numericRandom.concat(symbolRandom);

    } else if (uppercase === false && lowercase === true && numbers === false && symbols === true) {
      password = lowerRandom.concat(symbolRandom);

    } else if (uppercase === false && lowercase === true && numbers === true && symbols === false) {
      password = lowerRandom.concat(numericRandom);

    } else if (uppercase === true && lowercase === true && numbers === false && symbols === false) {
      password = upperRandom.concat(lowerRandom);

    } else if (uppercase === true && lowercase === false && numbers === true && symbols === false) {
      password = upperRandom.concat(numericRandom);

    } else if (uppercase === true && lowercase === false && numbers === false && symbols === true) {
      password = UpperRandom.concat(symbolRandom);
    
    // If only one is true
    } else if (uppercase === true && lowercase === false && numbers === false && symbols === false) {
      password = upperRandom;

    } else if (uppercase === false && lowercase === true && numbers === false && symbols === false) {
      password = lowerRandom;

    } else if (uppercase === false && lowercase === false && numbers === true && symbols === false) {
      password = numericRandom;

    } else if (uppercase === false && lowercase === false && numbers === false && symbols === true) 
      password = symbolRandom;

    }
    return password;

  }


