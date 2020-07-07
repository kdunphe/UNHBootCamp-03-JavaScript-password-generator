// Assignment Code
const generateBtn = document.querySelector("#generate");

// Password Parameters
const lowercase = document.querySelector('#lowercase');
const uppercase = document.querySelector('#uppercase');
const number = document.querySelector('#number');
const symbol = documemt.querySelector('#symbol');


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generate Random Password

function generatePassword () {

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
