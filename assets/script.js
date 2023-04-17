// Assignment code here
var lowercaseSet = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseSet = lowercaseSet.toUpperCase().split("")
lowercaseSet = lowercaseSet.split("")
var numbersSet = '0123456789'.split("")
var specialcharactersSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")

var generatePassword = function() {
  var welcomeMessage = confirm("Welcome to the password generator! Press Ok to continue");

  if (!welcomeMessage) {
    alert('Password generator process cancelled. Press the button to restart!');
    return;
  }

  var lengthInquiry = function() {
    inquiry = prompt("How many characters would you like for your password? Please enter a number between 8 and 128 characters");

    while(inquiry < 8 || inquiry > 128 || isNaN(inquiry) || inquiry == "") {
      alert('Password length invalid! You must enter a number between 8 to 128.');
      lengthInquiry()
    }
    return inquiry;
  }
}

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
