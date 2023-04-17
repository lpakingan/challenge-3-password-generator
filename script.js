//separate all the potential password variables into individual strings within an array by using .split()
var lowercaseSet = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseSet = lowercaseSet.toUpperCase().split("")
lowercaseSet = lowercaseSet.split("")
var numbersSet = '0123456789'.split("")
var specialcharactersSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")

//the main function generatePassword that contains the random password generation process
var generatePassword = function() {
  //confirms that the user would like to continue with password generation
  //if the user chooses Cancel, the process is ended
  var welcomeMessage = confirm("Welcome to the password generator! Press Ok to continue");

  if (!welcomeMessage) {
    alert('Password generator process cancelled. Press the button to restart!');
    return;
  }

  //lengthInquiry prompts the user to input a number between 8 to 128 for their password
  var lengthInquiry = function() {
    inquiry = prompt("How many characters would you like for your password? Please enter a number between 8 and 128 characters");

    //checks whether the input is a number <8 or >128, is not a number, or empty
    //if input fulfills one of these criteria, the user is alerted and lengthInquiry is repeated
    //if input is good the number is returned
    while(inquiry < 8 || inquiry > 128 || isNaN(inquiry) || inquiry == "") {
      alert('Password length invalid! You must enter a number between 8 to 128.');
      lengthInquiry()
    }
    return inquiry;
  }
  lengthInquiry()

  // creation of array for adding possible character sets
  var passwordCharacters = []
  //whichCharacters prompts the user of what character types to include in their password
  //if user says yes, the character set is concatenated to the empty array
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

    // checks if the passwordCharacters array is 0; this would mean that the user chose 0 options
    // if user chose none of the options, then the whichCharacters function will restart
    while(passwordCharacters.length === 0) {
      alert('You must choose at least one type of character type for your password! Please select again.');
      whichCharacters();
    }
  }
  whichCharacters()

  var generatedPassword = ""
  var createPassword = function() {
    for(var i=0; i < inquiry; i++) {
      generatedPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
    }
    return generatedPassword;
  }
  createPassword()
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
