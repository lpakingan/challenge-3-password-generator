// Assignment code here
var lowercaseSet = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseSet = lowercaseSet.toUpperCase().split("")
lowercaseSet = lowercaseSet.split("")
var numbersSet = '0123456789'.split("")
var specialcharactersSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
