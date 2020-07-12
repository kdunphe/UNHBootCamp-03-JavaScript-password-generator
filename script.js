// Arrays
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const symbols = "~!@#$%^&*()[]{}|\:;_-+=./<>?".split("");
// let pswdLength;
// let pswdString;
// let pswdCharSet;


// Password Button Criteria
const generateBtn = document.querySelector("#generate");
const isLowercase = document.querySelector("#lowercase");
const isUppercase = document.querySelector("#uppercase");
const isNumber = document.querySelector("#numbers");
const isSymbol = document.querySelector("#symbols");
// let pswdLength = document.querySelector("#length").value;
let checkbox = document.querySelector("form");


// Generate Random Password
// function generatePassword () {

//   let pswdString = "";
//   let pswdCharSet = "";

//   // Not working
//   // let length = document.querySelector("#length").value;

//   if (lower.checked) {
//     pswdCharSet += pswdString.concat(lowercase);

//   }

//   if (upper.checked) {
//     pswdCharSet += uppercase;

//   }

//   if (num.checked) {
//     pswdCharSet += numbers;

//   }

//   if (sym.checked) {
//     pswdCharSet += symbols;

//   }

//   // pswdLength = Number(length.value);

//   for (i = 0; i < pswdLength; i++) {
//     pswdString += pswdCharSet.charAt(Math.floor(Math.random() * pswdCharSet.length));

//   }

//   console.log(pswdCharSet);


//   if (pswdString === "") {
//     alert("Please select an input to generate a password.");
//     return;
// }
// }



// Generate Random Password
function generatePassword() {

  // Source: https://www.w3schools.com/jsref/prop_text_value.asp
    let pswdLength = document.querySelector("#length").value;

    if (pswdLength < 8 || pswdLength > 128) {
        alert("Please enter a number between 8 and 128.");
        return "";
    }

    // Source: https://thisinterestsme.com/javascript-detect-checkbox-change/
    // Source: https://stackoverflow.com/questions/28350387/display-alert-if-checkbox-is-unchecked-and-text-field-is-not-empty
    // Needs tweaking - alerting regardless of checked/unchecked
    // if (!checkbox.checked) {
    //   alert("Please choose at least one character type.");
    //   return "";
    // }

    let pswdOption = [];
    let pswdResult = [];

    // Selecting Character Types (Checkbox)
    // Source: https://www.samanthaming.com/tidbits/49-2-ways-to-merge-arrays/
    if (isLowercase.checked) {
        pswdOption = pswdOption.concat(lowercase);
    }
    if (isUppercase.checked) {
        pswdOption = pswdOption.concat(uppercase);
    }
    if (isNumber.checked) {
        pswdOption = pswdOption.concat(numbers);
    }
    if (isSymbol.checked) {
        pswdOption = pswdOption.concat(symbols);
    }

    // Create Random Combination of Characters
    // Source: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    for(i = 0; i < pswdLength; i++) {
        pswdResult.push(pswdOption[Math.floor(Math.random() * pswdOption.length)]);
    }

    return pswdResult.join("");
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
