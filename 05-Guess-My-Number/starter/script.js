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

console.log('sn', secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess)
    document.querySelector('.message').textContent = 'No number guessed';
  else if (guess === secretNumber)
    document.querySelector('.message').textContent = 'You won';
  else if (guess > secretNumber)
    document.querySelector('.message').textContent = 'Guessed number too high';
  else if (guess < secretNumber)
    document.querySelector('.message').textContent = 'Guessed number too low';
});

document.querySelector('.again').addEventListener('click', reloadFunc);

// reload page when again btn clicked
function reloadFunc() {
  window.location.reload();
}
