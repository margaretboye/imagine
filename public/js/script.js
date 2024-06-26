const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
}

// variabes
const pi = 3.142;
let name = 'Margaret Boye';
let age = '17';
let present = false;
console.log(name);


// objects
const car = {
    numberPlate: 'GR-345-24',
    model: 'Bentley',
    color: 'pink',
    weight: 50,
    weightUnit: 'KG',
    owner: {
        name: 'Margaret Boye',
        driver: {
            name: 'naa',
            license:'',
        }
    }
    }
    console.log(car.numberPlate);
    console.log(car.owner.driver.name);
    console.log(car);


    car.owner.driver.name ='may';
    console.log(car.owner.driver.name);




    // 5th june 2024
    // arrays
const tweet1 = {
    text:'I am learning js today.',
    likes: 5,
    shares: 2,
    retweets:1
  }
  
  const tweet2 = {
    text:'I am learning arrays today.',
    likes: 7,
    shares: 1,
    retweets:4
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[1];
  
  // dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString()
  today.getHours();
  
  
  
  // If/Else
  if (true) {
    console.log('We are true');
  } else{
    console.log('we are false')
  }
  
  if (false) {
    console.log('We are true');
  } else{
    console.log('we are false')
  }
  
  if (today.getHours() >= 16) {
    console.log('Class ended');
  } else{
    console.log('Class ongoing')
  }
  
  
  // for loop
  for (let i = 0; i <= 9; i++) {
    console.log('Notify friends', i)
  }


  // 6/6/24 Functions
// defining functions
function login(username, password) {
  if (username == 'joy' && password == '1234') {
    return 'user is logged in!';
  } else if (username != 'joy' ) {
    return 'Invalid username!';
  } else if (password != '1234'){
    return 'Invalid password!';
  } else {
    return 'Invalid username or password';
  }
} 
// invoking functions
login('joy', '1234');

// Basic arithmetic
12+23;
45-16;
7*8;
78/4;
12 % 5

// Comparison operators
2 == '2';
2 === '2';
3 !== 2;
3 !== 3;
 
// Built-in Math functions
Math.round(37 / 24);
Math.floor(37 / 24);
Math.ceil(37 / 24);
Math.random();
Math.max(78, 12, 98, 14, 89);
Math.ceil(Math.random() * 100000);

// Order of operations
1 * 2 + 3 - 4 / 2 + 12
2**3

// Handling user inputs
1200 + '250';
1200 + Number('250');


// String concatenation 7/6/24
const  firstname = 'Margaret';
const  lastname = 'Boye';
firstname + lastname;
firstname + ' ' + lastname;
firstname.trim() + ' ' + lastname.trim();

// Template literal
`${firstname.trim()} ${lastname.trim()}`;

// String methods
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim() + ' ' + lastname.trim()).length;
firstname.toUpperCase();
lastname.charAt(3);
firstname.charAt(5);
`${firstname.trim()} ${lastname.trim()}`.charAt(0);
`${firstname.trim().charAt(0)}${lastname.trim().charAt(0)}`;
`${firstname.trim().charAt(0)} ${lastname.trim().charAt(0)}`;
lastname.charAt(0) + firstname.charAt(0);

// String conversion
String(2014);


// Write a function that will add a participant to our google classroom 10/6/24
const participants = []
function addParticipant(email){
  // Check if email was provided
  if(!email){
    return 'Email not provided';
  }
  // Check if email is valid
  if(!email.includes('@')){
    return 'Invalid email provided!';
  }
  // Add email to the participants;
  participants.push(email);
  // Notfify them via mail
  // return response
  return 'Participant added!';
}

addParticipant('may@hotmail.com');

// Trial
function addPurchase(item){
  return 'Added to cart!';
}

addPurchase();

// Arrays in JavaScript
const alphabets = ['A', 'B', 'C', 'D'];
alphabets;
alphabets.join(' ');
alphabets.join(' ').split(' ')


// Write a function that will take firstname, lastname and will return fullname


const user = {
  firstname: 'joe',
  lastname: 'ganner'
}  
function fullname(user){
  return {
    ...user,
    fullname:`${user.firstname} ${user.lastname}`
  }
}
  
  fullname(user);

// Array map 11/6/24
const users = [
  {firstname: 'joe', lastname: 'ganner'},
  {firstname: 'mary', lastname: 'ray'},
  {firstname: 'vida', lastname: 'mars'},
  {firstname: 'bey', lastname: 'rash'},
  {firstname: 'mars', lastname: 'maxwell'}
]
users.map(fullname);

// Map and return squares of numbers
function square(number){
  return number ** 2;
}
const numbers = [0,1,2,3,4,5]
numbers.map(square);

// Filter and return even numbers
function even(number) {
  return number % 2  === 0;
}
numbers.filter(even);


// 12/3/24  Write a function that takes a user with name and date of birth and returns true if their birthday is today else false
const user = {
  name: 'May Dolores',
  dateOfBirth:'1987-06-05'
}

function isBirthday(user){
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
  if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()){
    return true;
  } else {
    return false;
  }
  return true;
}
isBirthday(user);

// Write a function that takes a user with name and dateOfBirth and returns birthday with their 

function birthdayGreeting() {
  if (isBirthday(user)){
    return `Happy birthday, ${user.name}`;
  } else{
    return `No cake for you`
  }
}

birthdayGreeting();


// Bottle class  13/6/24
class Bottle {
  constructor(color, shape, volume) {
    this.color = color;
    this.shape = shape;
  this.volume = volume;
  }
}

const bottle1= new Bottle('black', 'circle', 300);
bottle1.color;
const bottle2 = new Bottle ('yellow', 'square', 100);
bottle2.volume;


// Object bottles
const bottle = {
  color: 'red',
  shape:'square',
  volume: 100,
  getInfo: function(){
    return `This is a ${this.color} ${this.shape} bottle with a capacity of ${this.volume}ml`;
  }
}

bottle.color;
bottle.getInfo();
