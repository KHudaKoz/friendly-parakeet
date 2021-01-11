//BUTTON PROMPT BEGIN.  
var generateButton = document.getElementById('generaterandom');
generateButton.addEventListener('click', function () {
  generateNewPassword();
});

// GOT TO START THE PROCESS OF CREATING. INPUT THROUG FUNCTION ONCE BUTTON CLICKED PROMPT WITH NUMBER RANGE 8 -128 USING FUNCTION WITH VAR AND NEST IF 
function generateNewPassword() {
  var length = Number(prompt("Please select the desired charactor length within the new password.  Select a number between 8-128."));
  while (Number.isNaN(length) || length < 8 || length > 128) length = Number(prompt("You must select a number no-less than 8 but no more than 128 characters."));

  // VARIBLES WITH CONFIRMS BO0LEANS T || F : uppercaseletters, lowercaseletters< NUMBERS, SYMBOLS
  var numbers = confirm("Should numbers be included in the new password?  OK = YES, and CANCLE = NO.");
  var symbols = confirm("Should special characters be included in the new password? OK = YES, and CANCLE = NO.");
  var lowercaseletters = confirm("Should lowercase letters be included in your password? OK = YES, and CANCLE = NO.");
  var uppercaseletters = confirm("Should UPPERCASE letters be included in your password? OK = YES, and CANCLE = NO.");

  // CONFIRM INCLUDE QESTIONS IF THE DON'T SELECT>
  while (!uppercaseletters && !lowercaseletters && !numbers && !symbols) {
    alert("You fail to select at least one character type! Try again.");
    numbers = confirm("Should numbers be included in the new password?  OK = YES, and CANCLE = NO.");
    symbols = confirm("Should special characters be included in the new password? OK = YES, and CANCLE = NO.");
    lowercaseletters = confirm("Should lowercase letters be included in your password? OK = YES, and CANCLE = NO.");
    uppercaseletters = confirm("Should UPPERCASE letters be included in your password? OK = YES, and CANCLE = NO.");
    
  }

  // START CREATE RANDOM PASSWORD
  var password = "";
  //BEGIN RANDOM GENERATION VAR=ALLOWED
  var allowed = "";
  if (numbers) allowed += "1234567890";
  if (symbols) allowed += "!@#$%^&*(){}[]=<>/,.";
  if (uppercaseletters) allowed += "QWERTYUIOPASDFGHJKLZXCVBNM";
  if (lowercaseletters) allowed +=  "qwertyuiopasdfghjklzxcvbnm";

  //CONFIMS VAR: 8-128, NUMBERS, LOWERCASE LETTERS, UPPERCASE LETTERS (FOR LOOP FOR DEPENENT)
  for (var i = password.length; i < length; i++) password += allowed [Math.floor(Math.random() * allowed.length)];
  
  document.getElementById("password").value = password;

}


    


