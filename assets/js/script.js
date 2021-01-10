
// NEED TO ESTABLISH SPECIAL CHARACTORS. 
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]
const generateButton = document.getElementById('generate')

//NEED TO ACTIVATE BUTTON TO GENERATED BUTTON.  
generateButton.addEventListener('click', writePassword)

// GOT TO START THE PROCESS OF CREATING. INPUT THROUG FUNCTION ONCE BUTTON CLICKED//  
function writePassword() {
  var password = passwordGen();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// PROMPT WITH NUMBER RANGE 8 -128 USING FUNCTION WITH VAR AND NEST IF STATEMENT TO REQUEST NUMBER RANGE 
function passwordGen() {
  var passwordLength = window.prompt("please enter a number between 8 and 128 to determine the length of password ");
      if (passwordLength >=  129 || passwordLength <= 7|| passwordLength == ""|| passwordLength == specialCharacters) {
        return passwordGen();
      }
  //IF TRUE, PROMPT OTHER QUESTION MOVE ON THER QUESTION.

  //PROMPTED FOR OTHER QUESTION AND CREATION OF VAR.  
      var numbers = prompt("Do you want numbers in your password?");
      var special = prompt("Do you want special characters in your password?");
      var lowerCaseLetters = prompt("Do you want lowercaseLetters in your password?");
      var upperCaseLetters = prompt("Do you want uppercaseLetters in your password?");
      

  //ESTABLISH MINIMUM FIVE VAR: 8-128, NUMBERS, LOWERCASE LETTERS, UPPERCASE LETTERS
      var minimumCount = 0;
      var minimumNumbers = "";
      var minimumLowerCaseLetters = "";
      var minimumUpperCaseLetters = "";
      var minimumSpecialCharacters = "";

  // STRING VARIABLE FOR LOOP BELOW
        for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
          var randomNumberPicked = Math.floor(Math.random() * 4);
          randomPasswordGenerated += randomNumberPicked;
        }
  // Checks to make sure user selected ok for all and uses empty minimums from above
      if (numbers === true) {
        minimumNumbers = functionArray.getNumbers();
        minimumCount++;
      }
      if (lowerCaseLetters === true) {
        minimumLowerCaseLetters = functionArray.getLowerCases();
        minimumCount++;
      }
      if (upperCaseLetters === true) {
        minimumUpperCaseLetters = functionArray.getUpperCaseLetters();
        minimumCount++;
      }
      if (special === true) {
        minimumSpecialCharacters = functionArray.getSpecialCharacters();
        minimumCount++;
      }
 
        var randomPasswordGenerated = "";
        // to make sure characters are added to the password
        randomPasswordGenerated += minimumNumbers;
        randomPasswordGenerated += minimumLowerCases;
        randomPasswordGenerated += minimumUpperCaseLetters;
        randomPasswordGenerated += minimumSpecialCharacters;
        return randomPasswordGenerated;
 
  // GENERATE NUMBERS VAR
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCaseLetters: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCaseLetters: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
}; 
}

//ISSUES ALLOW TO USER TO 