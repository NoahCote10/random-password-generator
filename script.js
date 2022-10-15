
const generateBtn = document.querySelector("#generate");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "1234567890";
const spChar = "!@#$%^&*";
let superCharacters = "";

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function enterLength() {
  const length = Number(prompt("How long would you like your password to be?", "8 to 128 characters"));
  if (length > 8 && length < 128) {
    return length;
  } else {
    alert("Please select a number between 8 and 128.");
    return enterLength();
  }
}

function generatePassword() {
  const length = enterLength();
  let password = "";
  const needLowercase = confirm("Do you want lowercase letters in you password?");
  const needUppercase = confirm("Do you want uppercase letters in your password?");
  const needNumeric = confirm("Do you want numbers in your password?");
  const needSpChar = confirm("Do you want special characters in your password?");
  let varCounter = 0;

  if (needLowercase) {
    superCharacters = lowercase;
    const randIndex = Math.floor(Math.random() * lowercase.length);
    password = password + lowercase[randIndex];
    varCounter++;
  }
  if (needUppercase) {
    superCharacters = superCharacters + uppercase;
    const randIndex = Math.floor(Math.random() * uppercase.length);
    password = password + uppercase[randIndex];
    varCounter++;
  }
  if (needNumeric) {
    superCharacters = superCharacters + numeric;
    const randIndex = Math.floor(Math.random() * numeric.length);
    password = password + numeric[randIndex];
    varCounter++;
  }
  if (needSpChar) {
    superCharacters = superCharacters + spChar;
    const randIndex = Math.floor(Math.random() * spChar.length);
    password = password + spChar[randIndex];
    varCounter++;
  }

  for (let i = 0; i < length - varCounter; i++) {
    const randIndex = Math.floor(Math.random() * superCharacters.length);
    password += superCharacters[randIndex];
  }
  password = password.split("").sort(function () { return 0.5 - Math.random() }).join("");
  return password;
}

generateBtn.addEventListener("click", writePassword);