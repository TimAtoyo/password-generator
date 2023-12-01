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
console.table(arrOfArr);

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
function getPasswordOptions() {
  // Length of password
  var passLength = prompt(
    "Enter a number between 8 and 128 to determine the length of your password please: "
  );
  var passLengthInt = parseFloat(passLength, 10);
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
function getRandom(arr) {
  passwordLength;
  // Array of Arrays 
  var newPassword = '';
  var minOfArrOfArr = 0;
  var maxOfArrOfArr = arrOfArr.length - 1;
  



  //Random number between 0 and 3 to determne which array to go in to
  function getRandomElemntoArrOfArrInclusive(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  console.log(indexOfArrOfArr);
  //Chosen random Array 
 

  // console.log(chosenArr);
  // console.log(indexOfchosenArr);
  // console.log();


  var i = 0;
 while (i < passwordLength) {
  var indexOfArrOfArr = getRandomElemntoArrOfArrInclusive(
    maxOfArrOfArr,
    minOfArrOfArr
  );
  var minOfchosenArr = 0;
  var chosenArr = arrOfArr[indexOfArrOfArr];
  var maxOfchosenArr = chosenArr.length - 1;
  var indexOfchosenArr = getRandomElemntoArrOfArrInclusive(maxOfchosenArr, minOfchosenArr)
  newPassword += chosenArr[indexOfchosenArr];
  i ++
 }

 console.log(newPassword);
 return newPassword;
}

var newGeneratedPassword = getRandom(arrOfArr);

// Function to generate password with user input
function generatePassword() {}

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
