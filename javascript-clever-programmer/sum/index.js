/* 
  [x] Write a function that sums two numbers
  [x] Write a function that subtracts two numbers
  [x] Write a function that divides two numbers.
  [x] Write a function that multiplies two numbers.
  [x] be sure to handle dividing by zero 😉
  [x] ES6 Syntax (Arrow function): const add = () => {}
  [x] create a function that console logs the result of any of the above operations.
*/

let a = document.getElementById('num1');
let b = document.getElementById('num2');
let btn = document.getElementById('btn');
let addResult = document.getElementById('add');

btn.addEventListener('click', function() {
  add();
  sub();
  div();
  mul();
});   

const add = () => {
  let addNumberOne = parseInt(a.value);
  let addNumberTwo = parseInt(b.value);
  let addNumbers = addNumberOne + addNumberTwo;
  document.getElementById('add').value = addNumbers;
};

const sub = () => {
  let subNumberOne = parseInt(a.value);
  let subNumberTwo = parseInt(b.value);
  let subNumbers = subNumberOne - subNumberTwo;
  document.getElementById('subtract').value = subNumbers;
}; 

const div = () => {
  let divNumberOne = parseInt(a.value);
  let divNumberTwo = parseInt(b.value);
  let divNumbers = divNumberOne / divNumberTwo;
  if (isNaN(divNumbers)) divNumbers = 0;
  document.getElementById('divide').value = divNumbers;
};

const mul = () => {
  let mulNumberOne = parseInt(a.value);
  let mulNumberTwo = parseInt(b.value);
  let mulNumbers = mulNumberOne * mulNumberTwo;
  document.getElementById('multiply').value = mulNumbers;
}; 

