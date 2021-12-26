/**
 * This is the option 1 for put the images
 * in the game.
 */

import { UI } from '../../ui.js'

const ui = new UI();

document.querySelector(".card-one").addEventListener("click", () => {
  ui.showImage("card-one", 'apple.jpg');

});

document.querySelector(".card-five").addEventListener("click", () => {
  ui.showImage("card-five", 'apple.jpg')

});
