/**
 * This is the option 1 for put the images
 * in the game.
 */

import { UI } from '../../ui.js'

const ui = new UI();

// Assing the values to the cards
// Apple
document.querySelector(".card-one").addEventListener("click", () => {
  ui.showImage("card-one", 'apple.jpg');

});

document.querySelector(".card-six").addEventListener("click", () => {
  ui.showImage("card-six", 'apple.jpg');

});


// Banana
document.querySelector(".card-two").addEventListener("click", () => {
  ui.showImage("card-two", 'banana.jpg')

});

document.querySelector(".card-seven").addEventListener("click", () => {
  ui.showImage("card-seven", 'banana.jpg')

});

// Watermelon
document.querySelector(".card-eigth").addEventListener("click", () => {
  ui.showImage("card-eigth", 'watermelon.jpg')

});

document.querySelector(".card-twelve").addEventListener("click", () => {
  ui.showImage("card-twelve", 'watermelon.jpg')

});

document.querySelector(".card-nine").addEventListener("click", () => {
  ui.showImage("card-nine", 'watermelon.jpg')

});

document.querySelector(".card-ten").addEventListener("click", () => {
  ui.showImage("card-ten", 'watermelon.jpg')

});

// Orange
document.querySelector(".card-three").addEventListener("click", () => {
  ui.showImage("card-three", 'orange.jpg')

});

document.querySelector(".card-eleven").addEventListener("click", () => {
  ui.showImage("card-eleven", 'orange.jpg')

});

document.querySelector(".card-five").addEventListener("click", () => {
  ui.showImage("card-five", 'orange.jpg')

});

document.querySelector(".card-four").addEventListener("click", () => {
  ui.showImage("card-four", 'orange.jpg')

});