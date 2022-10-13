// Assignment Code
const generateBtn = document.querySelector("#generate");

// Object containing values to be entered in final password
const passwordItems = {
  lettersLower: "abcdefghijklmnopqrstuvwxyz",
  lettersUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "1234567890",
  characters: "!@#$%^&*",
}

// establishes user inputs
let length;
let uppercase;
let lowercase;
let numeric;
let spChar;

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}
length = Number(prompt("How long would you like your password to be?", "8 to 128 characters"));

function enterLength() {
  if (length > 8 && length < 128) {
    uppercase = confirm("Do you want uppercase letters in you password?");
  } else {
    alert("Please select a number between 8 and 128.");
    Number(prompt("How long would you like your password to be?", "8 to 128 characters"));
    // enterLength();
  }
}

enterLength();

function enterUpperCase() {
  if (uppercase === true) {
    // code that includes uppercase
    lowercase = confirm("Do you want lowercase letters in you password?");
  } else {
    lowercase = confirm("Do you want lowercase letters in you password?");
  }
}

enterUpperCase();

function enterLowerCase() {
  if (lowercase === true) {
    // code that includes lowercase
    numeric = confirm("Do you want numbers in you password?");
  } else {
    numeric = confirm("Do you want numbers in you password?");
  }
}

enterLowerCase();

function enterNumeric() {
  if (numeric === true) {
    // code that includes numeric
    spChar = confirm("Do you want special characters in you password?");
  } else {
    spChar = confirm("Do you want special characters in you password?");
  }
}

enterNumeric();

function enterSpChar() {
  if (spChar === true) {
    // code that generates password
  }
}
// Add event listener to generate button

enterSpChar();
generateBtn.addEventListener("click", writePassword);