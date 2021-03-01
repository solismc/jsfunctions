const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

document.addEventListener('DOMContentLoaded', main)

// Functions 

/* function printAll() {
  for(let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
 printAll(1, 2, 3, 4, 5);
 printAll(10, 20); */

 /*function greetings() {
  return 'Hello John!';
 }
 let message = greetings();
 console.log(message); // this should log out Hello

function sum(num1, num2) {
  return num1 + num2;
}
let result = sum(2, 3);
console.log(result); // result should show 5
*/

// Closure Example 

/*let greeting = (function() {
  let message = 'Hello';
  let getMessage = function() {
    return message;
  };
  return {
    getMessage: getMessage,
  };
})();
console.log(greeting.getMessage());

function setupCounter( val ) {
  return function (counter) {
    return val++;
  }
}
let counter1 = setupCounter(0);
console.log(counter1()); // 0
console.log(counter1()); // 1
let counter2 = setupCounter(10);
console.log(counter2());

// Arrow Functions

/*let greetings = () => {
  return 'Hello World!'
};
let message = greetings();
console.log(message); // Hello World! */

/*let greetings = name => 'Hello ' + name;
let message = greetings('Manuel')
console.log(message); // Hello Manuel*/

let message = {
  name: 'John',
  regularFunction: function() {
    console.log(this)
    console.log('Hello ' + this.name);
  },
  arrowFunction: () => console.log('Hi ' + this.name)
}

message.regularFunction();
message.arrowFunction();

// Add two numbers using regular and arrow functions

/*function sum(num1, num2) {
  return num1 + num2;
}

let output = sum(10, 5);
console.log(output);*/

let sum = (num1, num2) => num1 + num2; // Arrow Function

let output = sum(10, 5);
console.log(output);
