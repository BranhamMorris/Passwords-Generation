// Assignment code here
var characterLength = 8;
var choice = [];
var specialCharacter = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["1","2","3","4","5","6","7","8","9","0"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
} else {
  passwordText.value = "";
}

}

function generatePassword() {
  //generate based on prompts
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choice.length);
    password = password + choice [randomCharacter];
  }
  return password;
}

function getPrompts() {
  choice = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Try again.");
    return false;
  }

  if (confirm(" Do you want lowercase letters in the password?")) {
    choice = choice.concat(lowerCase);
  };
  if (confirm("Do you want uppercase letters in the password?")) {
    choice = choice.concat(upperCase);
  }
  if (confirm("Do you want special characters in the password?")) {
    choice = choice.concat(specialCharacter);
  }

  if (confirm("Do you want numbers in the password?")) {
    choice = choice.concat(number);
  }

}


