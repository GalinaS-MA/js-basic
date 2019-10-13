// 1. Assign string with unicode to a variable.

let string = 'string';
let result = '';
for (value in string){
  result+=`\\u${string.charCodeAt(value).toString(16)} `;
}
console.log(result);

// 2. Declare a variable with string with escaped symbols.

let escaped = 'This tab  \t  new line \n \'text in quotes\'';
console.log(escaped);

// 3. Declare a variable which will contain name of your favourite animal.
let myFavouriteAnimal = 'Lucky';

// 4. Log a message `My favourite animal is ` with dynamic variable from previous task.
console.log(`My favourite animal is ${myFavouriteAnimal}`);

// 5. Declare a variable which contain name and surname of your favourite writer in lowercase. Log his/her name
//    with capitals first letters.

let writer = 'ernest hemingway';
let writerArray = writer.split(' ');

console.log(writerArray[0][0].toUpperCase()+writerArray[0].substring(1)+ ' ' + writerArray[1][0].toUpperCase()+writerArray[1].substring(1));

// # Additional

// 1. Declare a function which will receive password string. Check is password strong enough:
//   - should contain at least one capital letter;
//   - length no less than 8 characters.
//   - should contain at leas one special character.

function check(password){
 
  if(!checkLen(password)){
    console.log('Password is les than 8 chars long');
    return false;
  }
    
  if(!checkSpecial(password)){
    console.log('Password doesn\'t contain special character');
    return false;
  }

  if(!checkUpper(password)){
    console.log('Password should contain at least one capital letter');
    return false;
  }

  return true;
}

function checkLen(password){
  return (password.length<8)? false : true;
}

function checkSpecial(password){
  let regex = /^[A-Za-z0-9 ]+$/;
  return !regex.test(password);
}

function checkUpper(password){
  let regexLetters = /^[A-Za-z]+$/;
  for (value in password){
    if (password[value] == password[value].toUpperCase() && regexLetters.test(password[value])) {
      return true;
    }
  }
  return false;
}

console.log(check('tEst%56Test'));

// 2. Make function which will generate password suggestion based on passed password, and required strongest.

function makeSuggestion(password){
  let regexLetters = /^[A-Za-z]+$/;
  let special = '"!#$%&()*+-/:;<=>?@[]^_`{|}~"';
  let newPassword = password;
  if (!checkUpper(password)){
    for (value in password){
      if (regexLetters.test(password[value])){
        newPassword = password.substring(0, value) + password[value].toUpperCase() + password.substring(value+1);
        break;
      } else {
        newPassword+='A';
      }
    }
  }

  if (!checkSpecial(password)){
    newPassword += special[Math.floor(Math.random() * special.length)];
  }

  if (!checkLen(newPassword)){
    let missingLength = 8 - newPassword.length;
    newPassword += newPassword.substring(0, missingLength);
  }
  return newPassword;
}

console.log(makeSuggestion('te5ting'));