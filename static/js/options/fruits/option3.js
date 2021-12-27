/**
 * This is the option 1 for put the images
 * in the game.
 */

import { UI } from '../../ui.js'

const ui = new UI();

// Assing the values to the cards
// Apple
document.querySelector(".card-eleven").addEventListener("click", () => {
  ui.showImage("card-eleven", 'apple.jpg');

});

document.querySelector(".card-five").addEventListener("click", () => {
  ui.showImage("card-five", 'apple.jpg');

});

document.querySelector(".card-two").addEventListener("click", () => {
  ui.showImage("card-two", 'apple.jpg')

});

document.querySelector(".card-nine").addEventListener("click", () => {
  ui.showImage("card-nine", 'apple.jpg')

});


// Banana
document.querySelector(".card-ten").addEventListener("click", () => {
  ui.showImage("card-ten", 'banana.jpg')

});

document.querySelector(".card-four").addEventListener("click", () => {
  ui.showImage("card-four", 'banana.jpg')

});

document.querySelector(".card-eigth").addEventListener("click", () => {
  ui.showImage("card-eigth", 'banana.jpg')

});

document.querySelector(".card-twelve").addEventListener("click", () => {
  ui.showImage("card-twelve", 'banana.jpg')

});

// Watermelon
document.querySelector(".card-one").addEventListener("click", () => {
  ui.showImage("card-one", 'watermelon.jpg')

});

document.querySelector(".card-three").addEventListener("click", () => {
  ui.showImage("card-three", 'watermelon.jpg')

});


// Orange
document.querySelector(".card-six").addEventListener("click", () => {
  ui.showImage("card-six", 'orange.jpg')

});

document.querySelector(".card-seven").addEventListener("click", () => {
  ui.showImage("card-seven", 'orange.jpg')

});

// document.querySelector(".card-five").addEventListener("click", () => {
//   ui.showImage("card-five", 'orange.jpg')

// });