/**
 * This is the option 1 for put the images
 * in the game.
 */

import { UI } from '../../ui.js'
import { Game } from '../../game.js'
import { Card } from '../../card.js'

// globals values
const ui = new UI();
let cardOne = null;
let cardTwo = null;

/**
 * 
 * @param {string} name The name for found the card
 * @returns The element found
 */
function getElementCard(name) {
  const cardElement = document.querySelector(`.${name}`);
  return cardElement;

}


// Assing the values to the cards
// Apple
document.querySelector(".card-one").addEventListener("click", () => {
  ui.showImage("card-one", 'apple.jpg');
  const cardElement = getElementCard("card-one");
  const src = cardElement.childNodes[0].currentSrc
  const card = new Card("1", "card-one", src)


  if (cardOne == null) {
    cardOne = card;
  } else {
    cardTwo = card;
  }

  if (cardOne != null && cardTwo != null) {
    const game = new Game(cardOne, cardTwo)
    game.try()

    cardOne = null;
    cardTwo = null;

  }

});

document.querySelector(".card-six").addEventListener("click", () => {
  ui.showImage("card-six", 'apple.jpg');

});


// Banana
document.querySelector(".card-two").addEventListener("click", () => {
  ui.showImage("card-two", 'banana.jpg')
  const cardElement = getElementCard("card-two");
  const src = cardElement.childNodes[0].currentSrc;
  const card = new Card("2", "card-two", src);


  if (cardOne == null) {
    cardOne = card;
  } else {
    cardTwo = card;
  }

  if (cardOne != null && cardTwo != null) {
    const game = new Game(cardOne, cardTwo)
    game.try()

    cardOne = null;
    cardTwo = null;

  }


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