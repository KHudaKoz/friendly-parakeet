
// NEED TO ESTABLISH SPECIAL CHARACTORS. 
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]
const generateButton = document.getElementById('generate')

//NEED TO ACTIVATE BUTTON TO GENERATED BUTTON.  
generateButton.addEventListener('click', writePassword)

// GOT TO START THE PROCESS OF CREATING. INPUT THROUG FUNCTION ONCE BUTTON CLICKED//  
function writePassword() {
  var password = passWordGenerater();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// PROMPT WITH NUMBER RANGE 8 -128 USING FUNCTION WITH VAR AND NEST IF STATEMENT TO REQUEST NUMBER RANGE 
function passWordGenerater() {
  var passwordLength = window.prompt("please enter a number between 8 and 128 to determine the length of password ");
      if (passwordLength >=  129 || passwordLength <= 7|| passwordLength == ""|| passwordLength == specialCharacters) {
        return passWordGenerater();
      }
  //IF TRUE, PROMPT OTHER QUESTION MOVE ON THER QUESTION.

  //PROMPTED FOR OTHER QUESTION AND CREATION OF VAR.  
      var numbers = confirm("Do you want numbers in your password?");
      var special = confirm("Do you want special characters in your password?");
      var lowerCaseLetters = confirm("Do you want lowercase Letters in your password?");
      var upperCaseLetters = confirm("Do you want uppercase Letters in your password?");
      

  //ESTABLISH MINIMUM FIVE VAR: 8-128, NUMBERS, LOWERCASE LETTERS, UPPERCASE LETTERS
      var minimumCount = 0;
      var minimumNumbers = "";
      var minimumLowerCaseLetters = "";
      var minimumUpperCaseLetters = "";
      var minimumSpecialCharacters = "";

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
 // CHECKED FOR ALL AND EMPTIES ABOVE
      if (numbers === true) {
        minimumNumbers = functionArray.getNumbers();
        minimumCount++;
      }
      if (lowerCaseLetters === true) {
        minimumLowerCaseLetters = functionArray.getLowerCaseLetters();
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
  // STRING VARIABLE FOR LOOP BELOW
        for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
          var randomNumberPicked = Math.floor(Math.random() * 128);
          randomPasswordGenerated += randomNumberPicked;
        }
        var randomPasswordGenerated = "";
        // to make sure characters are added to the password
        randomPasswordGenerated += minimumNumbers;
        randomPasswordGenerated += minimumLowerCaseLetters;
        randomPasswordGenerated += minimumUpperCaseLetters;
        randomPasswordGenerated += minimumSpecialCharacters;
        return randomPasswordGenerated;
 
  // GENERATE NUMBERS VAR
 
}

 