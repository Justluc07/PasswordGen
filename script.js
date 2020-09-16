

//function of get password options
 function getPasswordOptions( ){
    
  // Variable set to prompt to store user input of desired length
 
   var length = prompt("How many characters would you like your password to contain? Must be 8-128");
    if (length < 8 || length > 128);
    else return "must be 8-128";
    var uppercaseConfirm= confirm( "Would you like to use Uppercase letter?")
    var lowercaseConfirm= confirm( "Would you like to use lowercase letter?")
    var numbersConfirm= confirm( "Would you like to use numbers ?")
    var symbolsConfirm= confirm( "Would you like to use special charters?")
    // the rest of the pw options go in this function
 };

//get random number to use as an index in our arrays this will allow for a random selection
//generate password function that generates password after user input and random selection
//generate button onclick
//write password function which writes password to the page


// Assignment Code
var generateBtn = document.querySelector("#generate");

//  // Write password to the #password input
 function writePassword(password) {
  var password = generatePassword();{
   
  }

   var passwordText = document.querySelector("#password");{
    
    var symbols = [ "!","@","#","$","%","^","&","*","(",")"]
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","z"]
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Z"]
    var numbers = ["1","2","3","4","5","6","7","8","9"]

   }

//   passwordText.value = password;

// }

// // Add event listener to generate button
 generateBtn.onClick(writePassword)