'use strict';

// DOM is Document Object Model. Structured representation of HTML Documents.

// document.querySelector('.message').textContent = "Taxmin qilib ko'rchi...";
// console.log(document.querySelector('.message').innerHTML);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 22;

// // selecting and manipulating input elements
// console.log(document.querySelector('.guess'));
// document.querySelector('.guess').value = 21;

// handling click events
// we have a button 'Check' which is clicked to test if the inputted value is equal to the hidden value, lets select this element
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = 0;

console.log('sn', secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  number = document.querySelector('.guess').value;
});

// generate ramdom numbers
const number_1 = Math.trunc(Math.random() * 20) + 1; // Math.trunc returns the integer part of a number. Math.random returns a random floating point number between 0 and 1.
console.log('gn', number);

if (secretNumber == number)
  document.querySelector('.number').textContent = number;
