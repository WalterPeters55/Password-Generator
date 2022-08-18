// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var hasUpperCase = upperCase.split("");
var hasLowerCase = upperCase.toLowerCase().split("");
var symbols = "!@#$%^&*()_+|?><";
var hasSymbols = symbols.split("");
var numbers = "0123456789";
var hasNumbers = numbers.split("");

// Write password to the #password input
function writePassword() {
  var prePassword = [];
  var postPassword = "";
  var totalLength = prompt(
    "How many characters would you like your password to be?\n8-128"
  );
  if (totalLength < 8 || totalLength > 128) {
    alert(
      "Your password needs to be between 8 and 128 characters, please restart."
    );
  } else {
    if (confirm("Do you want uppercase characters?")) {
      Array.prototype.push.apply(prePassword, hasUpperCase);
    }
    if (confirm("Do you want lowercase characters?")) {
      Array.prototype.push.apply(prePassword, hasLowerCase);
    }
    if (confirm("Do you want numbers in your password")) {
      Array.prototype.push.apply(prePassword, hasNumbers);
    }
    if (confirm("Do you want specail characters?")) {
      Array.prototype.push.apply(prePassword, hasSymbols);
    }

    if (prePassword.length === 0) {
      alert(
        "You need atleast one type of character in your password, please restart."
      );
    } else {
      for (var i = 0; i < totalLength; i++) {
        var randomize = Math.floor(Math.random() * prePassword.length);
        postPassword += prePassword[randomize];
      }
    }
  }
  document.getElementById("password").innerHTML = postPassword;
}
