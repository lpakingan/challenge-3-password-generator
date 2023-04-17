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
  lengthInquiry()

  var passwordCharacters = []
  var whichCharacters = function() {
    var wantLowercase = confirm("Would you like lowercase letters in your password? Press Ok if yes and Cancel if no.");
    if(wantLowercase) {
      passwordCharacters = passwordCharacters.concat(lowercaseSet)
    }
    var wantUppercase = confirm("Would you like uppercase letters in your password? Press Ok if yes and Cancel if no.");
    if(wantUppercase) {
      passwordCharacters = passwordCharacters.concat(uppercaseSet)
    }
    var wantNumbers = confirm("Would you like numbers in your password? Press Ok if yes and Cancel if no.");
    if(wantNumbers) {
      passwordCharacters = passwordCharacters.concat(numbersSet)
    }
    var wantSpecialchar = confirm("Would you like special characters in your password? Press Ok if yes and Cancel if no.");
    if(wantSpecialchar) {
      passwordCharacters = passwordCharacters.concat(specialcharactersSet)
    }
  }
  whichCharacters()
  console.log(passwordCharacters)
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
