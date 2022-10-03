// Assignment Code

// DATA
var generateBtn = document.querySelector("#generate");


// FUNCTIONS

// create the generatePassword function that will return our password
function generatePassword(){
  // different sets of characters - store as data
var numbers = "01234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#%&'()*+,-./:;<=>?@[\]^_`{|}~";
var includedCharacters = "";
var password = "";

// PASSWORD LENGTH

// get selection of character types


var includeNumbers = confirm("Would you like your password to include numbers?");
if (includeNumbers) includedCharacters = includedCharacters + numbers;

var includeLowerCase = confirm("Would you like your password to include lowercase letters?");
if (includeLowerCase) includedCharacters = includedCharacters + lowerCase;

var includeUpperCase = confirm("Would you like your password to include uppercase letters?");
if (includeUpperCase) includedCharacters = includedCharacters + upperCase;

var includeSpecialChar = confirm("Would you like your password to include special characters?");
if (includeSpecialChar) includedCharacters = includedCharacters + specialChar;

}

  return "password"




// INITIALIZATION
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


