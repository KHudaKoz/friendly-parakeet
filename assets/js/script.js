

//BUTTON PROMPT TO BEGIN.  
var generateButton = document.getElementById('generaterandom');
generateButton.addEventListener('click', function() {
  generateNewPassword();
});

// GOT TO START THE PROCESS OF CREATING. INPUT THROUG FUNCTION ONCE BUTTON CLICKED//  
    function writePassword() {
    var password = passWordGenerater();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// PROMPT WITH NUMBER RANGE 8 -128 USING FUNCTION WITH VAR AND NEST IF 
    function generateNewPassword() {
    var length = Number(prompt("Please select the desired charactor length within the new password.  Select a number between 8-128."));
    while (Number.isNaN(length) || length < 8 || length > 128) length = Number(prompt ("You must select a number no-less than 8 but no more than 128 characters."));

// VARIBLES WITH CONFIRMS BOLIENS T || F : uppercaseletters, lowercaseletters< NUMBERS, SYMBOLS
      var numbers = confirm("Should numbers be included in the new password?  OK = YES, and CANCLE = NO.");
      var special = confirm("Should special characters be included in the new password? OK = YES, and CANCLE = NO.");
      var lowercaseletters = confirm("Should lowercase letters be included in your password? OK = YES, and CANCLE = NO.");
      var uppercaseletters = confirm("Should UPPERCASE letters be included in your password? OK = YES, and CANCLE = NO.");

// CONFIRM INCLUDE QESTIONS>
      
    while (!uppercaseletters && !lowercaseletters && !numbers && !symbols) {
      alert("You fail to select at least one character type! Try again.");
      numbers = confirm("Should numbers be included in the new password?  OK = YES, and CANCLE = NO.");
      symbols = confirm("Should special characters be included in the new password? OK = YES, and CANCLE = NO.");
      lowercaseletters = confirm("Should lowercase letters be included in your password? OK = YES, and CANCLE = NO.");
      uppercaseletters = confirm("Should UPPERCASE letters be included in your password? OK = YES, and CANCLE = NO.");
      

    }

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

 