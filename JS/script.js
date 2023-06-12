'use strict';

let username = prompt('What is your name');
alert('Hello ' + username);
console.log(`Say hey to ${username}`);

function userinput() {
  document.write(`Hi ${username} I had fun playing with you.`);

}
userinput();


//console.log('welcome user to Site');

let play = prompt('Ready to Play A Game');
switch (play.toLowerCase()) {
case 'yes':
  console.log('Lets Play A Game');
  alert('Lets Go Play!!');
  break;
case 'no':
  alert('Ok Maybe Next Time');
  break;
default:
  console.log('ok Maybe Next Time');
}
let userpoints = 0;

function firstJob(userinput){
let job = prompt(userinput);
switch (job.toLowerCase()) {
case 'yes':
  console.log('Correct');
  userpoints ++;
  alert('Yes Correct Best Job Ever!!');
  break;
case 'no':
  console.log('Incorrect');
  alert('Incorrect read the Bio again');
  break;
default:
  alert('Invalid');
}
}
firstJob('My first job was at Gamestop');

function myAge(userinput){
let age = prompt(userinput);
switch (age.toLowerCase()) {
case 'yes':
  console.log('False');
  alert('No Im not that old!!');
  break;
case 'no':
  console.log('Exactly thanks for paying attention');
  userpoints++;
  alert('Exactly thanks for paying attention');
  break;
default:
  alert('Invalid');

}
}
myAge('Am I 35 years old ');

function state(userinput){
let Tenn = prompt(userinput);
switch (Tenn.toLowerCase()) {
case 'yes':
  console.log('Wrong again');
  alert('Wrong Again I am from Mississippi');
  break;
case 'no':
  console.log('Where are you from');
  userpoints++;
  alert('I see you read the Bio on my page');
  break;
default:
  alert('invalid');
}
}
state('Am I from Tennesse');

function siblings(userinput){
let family = prompt(userinput);
switch (family.toLowerCase()) {
case 'yes':
  console.log('You are Wrong!!');
  alert('You are Wrong!!');
  break;

case 'no':
  console.log('Correct I have four beautiful siblings');
  userpoints++;
  alert('Correct I have four beautiful siblings');
  break;
default:
  console.log(`${username} thanks for stopping by to get to know me.`);
}
}
siblings('Do I have two siblings?');

let guessday = '';
let i = 0;
while (guessday !== '3') {
  console.log('guess the day');
  guessday = prompt('Guess what day of june was i born');
  if (guessday < 3) {
    alert('too low');
  } else if (guessday > 3) {
    alert('too high');
  } else if (guessday === '3') {
    userpoints++;
    alert('correct');
    break;

  }
  i = i + 1;
  if (i === 5) {
    alert('too many attempts');
    break;
  }
}


let listofitems =
  ['strawberries', 'blueberries', 'peaches', 'watermelon'];
let myFavFruit;


for (let i = 0; i < 6; i = i + 1) {
  console.log(listofitems[i]);
  myFavFruit = prompt('Guess the 4 fruits I like?');


  if (listofitems.includes(myFavFruit)); {
    userpoints++;
    alert(`Correct thats one of them, You have ${userpoints} points and you have ${6 - i} chances left!`);
    console.log(myFavFruit);


  } if (!myFavFruit); {
    alert(`You did not say anything,You have ${userpoints} points and you have ${6 - i} chances left!`);
  } if (listofitems); {
    alert(`This not one of my fav fruits,You have ${userpoints} points and you have ${6 - i} chances left!`);
  }
  if (i === 6 || userpoints === 6); {
    if (userpoints === 6)
      alert(`You got them all right, You have ${userpoints} points`);

  } if (userpoints <= 5) {
    alert(`You got some of them right, you have ${userpoints} points !`);
    break;
  }
  else (userpoints === 0);{
    alert(`Better luck next time, you got none right. You have ${userpoints} points`);
  }
  break;
}




if (i === 6) {
  userpoints++;
} alert('better luck next time');
alert(`you have ${userpoints} points`);





