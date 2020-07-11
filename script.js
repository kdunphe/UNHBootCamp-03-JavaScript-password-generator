// Arrays
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '`~!@#$%^&*()[]{}|\:;"_-+=./<>?'; 


// Password Button Criteria
const generateBtn = document.querySelector("#generate");

const lower = document.querySelector("#lowercase");
const upper = document.querySelector("#uppercase");
const num = document.querySelector("#numbers");
const sym = document.querySelector("#symbols");
// Need one for length?


// Generate Random Password
function generatePassword () {

  let pswdString = "";
  let pswdCharSet = "";

  // Not working
  // let length = document.querySelector("#length").value;

  if (lower.checked) {
    pswdCharSet += lowercase;

  }

  // if (upper.checked) {
  //   pswdString = pswdString + uppercase;

  // }

  // if (num.checked) {
  //   pswdString = pswdString + numbers;

  // }

  // if (sym.checked) {
  //   pswdString = pswdString + symbols;

  // }

  console.log(pswdCharSet);
}



// If Statements

// Validate Password - Loop?
// if {length < 8 || > 128
// alert()
// return()
// }
// Math random & Math floor?



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
