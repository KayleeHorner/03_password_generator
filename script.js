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
  passwordLength = prompt("How many characters do you want your password to be?"); 
    if (passwordLength < 8) {
      alert("Not secure enough, you need more characters!");
    } 
    if (passwordLength > 128) {
      alert("Try again, that's too many characters!");
    }
  
    

  }

