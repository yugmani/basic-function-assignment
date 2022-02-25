// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// console.log("Hello, world!");

//function to add two numbers and alert
function addTwo(first, second) {
  alert(first + second);
}

//function to multiply three numbers and log
function multiplyThree(first, second, third) {
  console.log('Product of three numbers is: ', first * second * third);
}

//function to divide a number by another number and return the result
function divideTwo(first, second) {
  return first / second;
}

addTwo(34, 12);

multiplyThree(3, 4, 10);

console.log('divide: ', divideTwo(20, 4));
