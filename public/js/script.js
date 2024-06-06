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