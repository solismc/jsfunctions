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

 function greetings() {
  return 'Hello John!';
 }
 let message = greetings();
 console.log(message); // this should log out Hello

function sum(num1, num2) {
  return num1 + num2;
}
let result = sum(2, 3);
console.log(result); // result should show 5

// Closure Example 

let greeting = (function() {
  let message = 'Hello';
  let getMessage = function() {
    return message;
  };
  return {
    getMessage: getMessage,
  };
})();
console.log(greeting.getMessage());