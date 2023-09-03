const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLenght = 13;
let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

function generateRandomPassword() {
    let randomPassword1 = "";
    let randomPassword2 = "";
    for (let i = 0; i < passwordLenght; i++) {
        randomPassword1 += getRandomCharacter();
        randomPassword2 += getRandomCharacter();
    }
    passwordOne.textContent = randomPassword1;
    passwordTwo.textContent = randomPassword2;
    return randomPassword;
}