// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var arrOfArr = [
  specialCharacters,
  numericCharacters,
  lowerCasedCharacters,
  upperCasedCharacters,
];


// Generate a password when the button is clicked

// Present a series of prompts for password criteria
// Once I get a number from the user I can the use that number to create an array of the same length
//
//
// Character types
// Assuming thats the bellow are the charactor types
// We can ask the user to pick a number between (0 and length - 1) of each array
// Once we have a number from the user we can use it
// to access the array and find the character at that location
// we will need 4 prompts for each of the following
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// Code should validate for each input and at least one character type should be selected
// Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// Function to prompt user for password options
// At least 8 characters but no more than 128.
function passwordGenerator() {
  function getPasswordOptions() {
    // Length of password
    var passLength = prompt(
      "Enter a number between 8 and 128 to determine the length of your password please: "
    );
  
    var passLengthInt = parseInt(passLength, 10);
    // Error handling for inputs that are not numbers
    if (isNaN(passLengthInt)) {
      getPasswordOptions();
    } else if (passLengthInt < 8) {
      getPasswordOptions();
    } else if (passLengthInt > 128) {
      getPasswordOptions();
    }
    return passLengthInt;
  }
  var passwordLength = getPasswordOptions();

  // Function for getting a random element from an array
  function getRandom(max, min) {
    //Random number between min and max to determne which array to go in to
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  // Function to generate password with user input
  function generatePassword(arr) {
    passwordLength;
    // Array of Arrays
    var newPassword = "";
    var minOfArrOfArr = 0;
    var maxOfArrOfArr = arrOfArr.length - 1;
    var i = 0;
    while (i < passwordLength) {
      var indexOfArrOfArr = getRandom(
        maxOfArrOfArr,
        minOfArrOfArr
      );
      var minOfchosenArr = 0;
      var chosenArr = arrOfArr[indexOfArrOfArr];
      var maxOfchosenArr = chosenArr.length - 1;
      var indexOfchosenArr = getRandom(
        maxOfchosenArr,
        minOfchosenArr
      );
      newPassword += chosenArr[indexOfchosenArr];
      i++;
    }
    return newPassword;
  }

  var newGeneratedPassword = generatePassword(arrOfArr);
  return newGeneratedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
writePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
