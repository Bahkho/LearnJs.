/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

// ADDITION
function add(a, b) {
  return a + b;
}
console.log(add(5, 9));
const add2 = (a, b) => {
  return a + b;
};
console.log(add2(5, 8));

// SUBTRACTION
function sub(c, d) {
  return c - d;
}
console.log(sub(20, 5));
const sub2 = (a, b) => {
  return a - b;
};
console.log(sub2(20, 4));

// DIVISION
function div(e, f) {
  return e / f;
}
console.log(div(50, 10));
const div2 = (e, f) => {
  return e / f;
};
console.log(div2(50, 5));

// MULTIPLICATION
function mul(g, h) {
  return g * h;
}
console.log(mul(20, 2));
const mul2 = (g, h) => {
  return g * h;
};
console.log(mul2(20, 1));

console.log("hello from the SUM exercise");
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/
