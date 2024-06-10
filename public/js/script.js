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
