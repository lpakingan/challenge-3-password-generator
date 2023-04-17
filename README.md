# Bootcamp Challenge #3: Password Generator

## Summary of the Challenge

In this week's challenge, we were tasked with creating a random password generator based on criteria that is chosen by the user.

## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Strategy

#### Acquiring the Password Parameters
In order to get their random password, the user had to be prompted for which criteria they wanted for their password. The first main criteria was how many characters they wanted. The password generator asks for the user to input a number between 8 through 128 and will store this value for the password length. Any number/character that is input outside of the required parameters will prompt the user until a correct number is entered.

After determining the amount of password characters, the generator then asks the user to choose what character types they would like for their password by clicking Ok/Cancel to the prompts. If the user says Cancel to all 4 prompts, the generator returns an alert that one character type must be chosen and will restart the asking of the user's preferences.

Once all these criteria are acquired, the generator picks randomly from an array containing all of the character types the user chose and will generate the password of the user's desired length. A gif detailing the generator's full process is shown below:

![](https://github.com/lpakingan/challenge-3-password-generator/blob/main/assets/images/pw_demo.gif)

## Deployed Application
The final deployed webpage can be found [here](https://lpakingan.github.io/challenge-3-password-generator/).