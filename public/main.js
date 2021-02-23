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
 console.log(message); this should log out Hello

function sum(num1, num2) {
  return num1 + num2;
}
let result = sum(2, 3);
console.log(result); // result should show 5