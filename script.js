var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+=~<,>.?/|{}[];:'`";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

function determineLength() {
  passwordLength = prompt(
    "Please select your desired length of your password, ranging from 8 to 128 characters:"
  );

  if (passwordLength < 8) {
    alert(
      "The password length should be a numeric value between 8 and 128 characters."
    );
    determineLength();
  } else if (passwordLength > 128) {
    alert(
      "The password length should be a numeric value between 8 and 128 characters."
    );
    determineLength();
  } else if (isNaN(passwordLength)) {
    alert(
      "The password length should be a numeric value between 8 and 128 characters."
    );
    determineLength();
  } else {
    alert(
      "On the following three screens, you will be prompted to select the types of characters you wish to include in your password. If you choose 'No' for all options, your password will exclusively consist of lowercase letters."
    );
  }
  return passwordLength;
}

function determineUppercase() {
  uppercaseCheck = prompt(
    "Do you want to include uppercase letters in your password? \n(Yes or No)"
  );
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === "") {
    alert("Please answer Yes or No");
    determineUppercase();
  } else if (uppercaseCheck === "yes" || uppercaseCheck === "y") {
    uppercaseCheck = true;
    return uppercaseCheck;
  } else if (uppercaseCheck === "no" || uppercaseCheck === "n") {
    uppercaseCheck = false;
    return uppercaseCheck;
  } else {
    alert("Please answer Yes or No");
    determineUppercase();
  }
  return uppercaseCheck;
}

function determineNumbers() {
  numberCheck = prompt(
    "Do you want to include numbers in your password? \n(Yes or No)"
  );
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === null || numberCheck === "") {
    alert("Please answer Yes or No");
    determineNumbers();
  } else if (numberCheck === "yes" || numberCheck === "y") {
    numberCheck = true;
    return numberCheck;
  } else if (numberCheck === "no" || numberCheck === "n") {
    numberCheck = false;
    return numberCheck;
  } else {
    alert("Please answer Yes or No");
    determineNumbers();
  }
  return numberCheck;
}

function determineSpecial() {
  specialCheck = prompt(
    "Do you want to include special characters in your password? \n(Yes or No)"
  );
  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === null || specialCheck === "") {
    alert("Please answer Yes or No");
    determineSpecial();
  } else if (specialCheck === "yes" || specialCheck === "y") {
    specialCheck = true;
    return specialCheck;
  } else if (specialCheck === "no" || specialCheck === "n") {
    specialCheck = false;
    return specialCheck;
  } else {
    alert("Please answer Yes or No");
    determineSpecial();
  }
  return specialCheck;
}

function generatePassword() {
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

  var characters = lowercaseChar;
  var password = "";
  if (uppercaseCheck && numberCheck && specialCheck) {
    characters += uppercaseChar + numberChar + specialChar;
  } else if (uppercaseCheck && numberCheck) {
    characters += uppercaseChar + numberChar;
  } else if (numberCheck && specialCheck) {
    characters += numberChar + specialChar;
  } else if (uppercaseCheck && specialCheck) {
    characters += uppercaseChar + specialChar;
  } else if (uppercaseCheck) {
    characters += uppercaseChar;
  } else if (numberCheck) {
    characters += numberChar;
  } else if (specialCheck) {
    characters += specialChar;
  } else {
    characters === lowercaseChar;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

generateBtn.addEventListener("click", writePassword);
