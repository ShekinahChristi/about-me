'use strict' 

let username =prompt ('What is your name');
alert('Hello ' + username)
console.log(`Say hey to ${username}`)

function userinput(){
  document.write(`Hi ${username} its been a while`)

}
userinput()

let welcome =prompt ('Welcome to my world!!')
console.log('welcome user to Site');

let play =prompt('Ready to Play A Game');
switch(play.toLowerCase())
{
  case 'yes':
    console.log('Lets Play A Game')
    alert('Lets Go Play!!')
  case 'no':
    console.log('ok Maybe Next Time')
    alert('ok Maybe Next Time')
    break;
}

let job =prompt('My first job was at Gamestop');
switch(job.toLowerCase())
{
  case 'yes':
    console.log('Correct')
    alert('Yes Correct Best Job Ever!!')
  case 'no':
    console.log('Incorrect')
    alert('Incorrect read the Bio again ')
    break;
}

let age = prompt('I am 35 years old ');
switch(age.toLowerCase())
{
  case 'yes':
    console.log('False')
    alert('No Im not that old!!')
  case 'no':
    console.log('Exactly thanks for paying attention')
    alert('Exactly thanks for paying attention')
    break;
}

let Tenn = prompt('I am from Tennesse');
switch(Tenn.toLowerCase())
{ 
  case 'yes':
  console.log('Wrong again')
  alert('Wrong Again I am from Mississippi')
case 'no':
  console.log('Where are you from')  
  alert('I see you read the Bio on my page')
  break;
}

let family = prompt('Do I have two siblings?');
switch(family.toLowerCase())
{
  case 'yes':
  console.log(`You are Wrong!!`);
  alert('You are Wrong!!')
  break;
  case 'no':
    console.log('Correct I have four beautiful siblings')
    alert('Correct I have four beautiful siblings')
    default:
      console.log(`${username} thanks for stopping by to get to know me.`)
  }
  
  
