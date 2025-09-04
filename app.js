// Write a for-loop that loops through 1 to 20
// If the number is divisible by 3, print "Frontend"
// If the number is divisible by 5, print "Simplified"
// If the number is divisible by 3 and 5, print "Frontend Simplified"
// If the number is  *not* divisible by either 3 or 5, print the number


// for (let i = 1; i <= 20; ++i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} -> Frontend Simplified`)
//     }
//     else  if (i % 3 === 0) {
//         console.log(`${i} -> Frontend`)
//     }
//     else if (i % 5 === 0) {
//         console.log(`${i} -> Simplified`)
//     }
// else {
//     console.log(`${i} -> ${i}`)
// }
// }


// Print out every character from the string:
// 'Frontend Simplified"

// const str = "Frontend Simplified"

// for (let i = 0; i < str.length; ++i) {
//     console.log(str[i])
// }

// function getVowelCount(sentence) {
//     const vowels = `aeiouAEIOU`;
//     let count = 0;


//     for (let char of sentence) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;

// }

// let vowelCount = getVowelCount(`Apples are tasty fruits`);
// console.log(`Vowel Count: ${vowelCount}`);

// function convertCelsiusToFahrenheit(celsius) {
//   return celsius * 1.8 + 32;
// }
// console.log("convertCelsiusToFahrenheit(0) ->", convertCelsiusToFahrenheit(0));
// console.log("convertCelsiusToFahrenheit(10) ->", convertCelsiusToFahrenheit(10));

// const convertFahrenheitToCelsius = (fahrenheit) => {
// //     let celsius = (fahrenheit - 32) * 5 / 9; 
//   return (fahrenheit - 32) * 5 / 9;
// }

// console.log("convertFahrenheitToCelsius(10) ->", convertFahrenheitToCelsius(10));
// console.log("convertCelsiusToFahrenheit(10) ->", convertFahrenheitToCelsius(10));
// console.log("convertCelsiusToFahrenheit(20) ->", convertFahrenheitToCelsius(20));
// console.log("convertCelsiusToFahrenheit(30) ->", convertFahrenheitToCelsius(30));

// function grumpus() {
//     console.log("Go away");
//     console.log("Leave me alone");
//     console.log("I am grumpy");
// }

// grumpus();
// grumpus();  
// for (let i = 0; i < 50; i++) {
//     grumpus();
// }

// function rollDie() {
//     let roll = Math.floor(Math.random() * 6) + 1;
//      console.log(`rolled: ${roll}`);}

// function throwDice(numRolls) {
//    for(let i = 0; i < numRolls; i++) {
//     rollDie();
//    }
// }

// function greet(nickname) {
//     console.log(`hi, ${nickname}!`);
// }

// function square(num) {
//     console.log(num * num);
// }

// function sum(x,y) {
//     console.log(x + y);
// }

// function divide(a,b) {
//     console.log(a / b);
// }

// const scream = `hello`.toUpperCase();

// function add(x, y) {
// return x + y;
// }

// function isPurple(color) {
//     if (color.toLowerCase() === `purple`) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function add(x, y) {
// return x + y;
// }

// function isPurple(color) {
//     return color.toLowerCase() === `purple`;
//     }


// function containsPurple(arr) {
//     for (let color of arr) {
//         if (color === `purple` || color === `magenta`) {
//             return true;
//         }

//     }
//     return false;
// }



// * This is FES practice code for Arrays and Array Methods

let arr = [20, 30, 40, 50, 100, 200, 300, 400]

// // FIRST element of array:
// console.log(arr[0])

// // Last element of array:
// console.log(arr[arr.length - 1])

// // Add element onto end of array:
// arr.push(200)

// THIS IS THE LONG METHOD
let newArr = arr.filter((element) => {
console.log(element)
if (element < 50) {
return true;
}
})

console.log(newArr)

// THIS IS THE SHORT METHOD
let newArr2 = arr.filter(element => element < 50)
console.log(newArr2)
// *



// FCC "Build a JS Trivia Bot" Exercise

console.log("Hello! I'm your coding fun fact guide!");

const botName = "Chan Chan"; 
const botLocation = "Chanville, TN"; 
const favoriteLanguage = "Channese"; 

console.log("My name is " + botName + " and I live on " + botLocation + ".");
console.log("My favorite programming language is " + favoriteLanguage + ".");


let codingFact = "I can write code 10x faster in" + favoriteLanguage + "."; 
console.log(codingFact);

codingFact = "I can read code 10x faste in" + favoriteLanguage + "."; 
console.log(codingFact)

codingFact = "I can debug code instantly in " + favoriteLanguage + ".";
console.log(codingFact);


console.log("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + ".")