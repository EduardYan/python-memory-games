/**
 * This is the option 2 for put the images
 * in the game.
 */

import { UI } from '../../ui.js'
import { Game } from '../../game.js'
import { Card } from '../../card.js'

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
document.querySelector(".card-three").addEventListener("click", () => {
  ui.showImage("card-three", 'apple.jpg');
  const cardElement = getElementCard("card-three");
  const src = cardElement.childNodes[0].currentSrc
  const card = new Card("3", "card-three", src)


  if (cardOne == null) {
    cardOne = card;
  } else {
    // in case the cardOne is ocuped
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
  ui.showImage("card-seven", 'apple.jpg');
  const cardElement = getElementCard("card-seven");
  const src = cardElement.childNodes[0].currentSrc
  const card = new Card("7", "card-seven", src)


  if (cardOne == null) {
    cardOne = card;
  } else {
    // in case the cardOne is ocuped
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
  ui.showImage("card-six", 'apple.jpg')
  const cardElement = getElementCard("card-six");
  const src = cardElement.childNodes[0].currentSrc
  const card = new Card("6", "card-six", src)


  if (cardOne == null) {
    cardOne = card;
  } else {
    // in case the cardOne is ocuped
    cardTwo = card;
  }

  if (cardOne != null && cardTwo != null) {
    const game = new Game(cardOne, cardTwo)
    game.try()

    cardOne = null;
    cardTwo = null;

  }

});

document.querySelector(".card-eleven").addEventListener("click", () => {
  ui.showImage("card-eleven", 'apple.jpg')
  const cardElement = getElementCard("card-eleven");
  const src = cardElement.childNodes[0].currentSrc
  const card = new Card("11", "card-eleven", src)


  if (cardOne == null) {
    cardOne = card;
  } else {
    // in case the cardOne is ocuped
    cardTwo = card;
  }

  if (cardOne != null && cardTwo != null) {
    const game = new Game(cardOne, cardTwo)
    game.try()

    cardOne = null;
    cardTwo = null;

  }

});



// Banana
document.querySelector(".card-four").addEventListener("click", () => {
  ui.showImage("card-four", 'banana.jpg')
  const cardElement = getElementCard("card-four");
  const src = cardElement.childNodes[0].currentSrc
  const card = new Card("4", "card-four", src)


  if (cardOne == null) {
    cardOne = card;
  } else {
    // in case the cardOne is ocuped
    cardTwo = card;
  }

  if (cardOne != null && cardTwo != null) {
    const game = new Game(cardOne, cardTwo)
    game.try()

    cardOne = null;
    cardTwo = null;

  }

});

document.querySelector(".card-twelve").addEventListener("click", () => {
  ui.showImage("card-twelve", 'banana.jpg')
  const cardElement = getElementCard("card-twelve");
  const src = cardElement.childNodes[0].currentSrc
  const card = new Card("12", "card-twelve", src)


  if (cardOne == null) {
    cardOne = card;
  } else {
    // in case the cardOne is ocuped
    cardTwo = card;
  }

  if (cardOne != null && cardTwo != null) {
    const game = new Game(cardOne, cardTwo)
    game.try()

    cardOne = null;
    cardTwo = null;

  }

});

document.querySelector(".card-two").addEventListener("click", () => {
  ui.showImage("card-two", 'banana.jpg')
  const cardElement = getElementCard("card-two");
  const src = cardElement.childNodes[0].currentSrc
  const card = new Card("2", "card-two", src)


  if (cardOne == null) {
    cardOne = card;
  } else {
    // in case the cardOne is ocuped
    cardTwo = card;
  }

  if (cardOne != null && cardTwo != null) {
    const game = new Game(cardOne, cardTwo)
    game.try()

    cardOne = null;
    cardTwo = null;

  }

});

document.querySelector(".card-five").addEventListener("click", () => {
  ui.showImage("card-five", 'banana.jpg')
  const cardElement = getElementCard("card-five");
  const src = cardElement.childNodes[0].currentSrc
  const card = new Card("5", "card-five", src)


  if (cardOne == null) {
    cardOne = card;
  } else {
    // in case the cardOne is ocuped
    cardTwo = card;
  }

  if (cardOne != null && cardTwo != null) {
    const game = new Game(cardOne, cardTwo)
    game.try()

    cardOne = null;
    cardTwo = null;

  }

});

// Watermelon

document.querySelector(".card-eigth").addEventListener("click", () => {
  ui.showImage("card-eigth", 'watermelon.jpg')
  const cardElement = getElementCard("card-eigth");
  const src = cardElement.childNodes[0].currentSrc
  const card = new Card("8", "card-eigth", src)


  if (cardOne == null) {
    cardOne = card;
  } else {
    // in case the cardOne is ocuped
    cardTwo = card;
  }

  if (cardOne != null && cardTwo != null) {
    const game = new Game(cardOne, cardTwo)
    game.try()

    cardOne = null;
    cardTwo = null;

  }

});

document.querySelector(".card-ten").addEventListener("click", () => {
  ui.showImage("card-ten", 'watermelon.jpg')
  const cardElement = getElementCard("card-ten");
  const src = cardElement.childNodes[0].currentSrc
  const card = new Card("10", "card-ten", src)


  if (cardOne == null) {
    cardOne = card;
  } else {
    // in case the cardOne is ocuped
    cardTwo = card;
  }

  if (cardOne != null && cardTwo != null) {
    const game = new Game(cardOne, cardTwo)
    game.try()

    cardOne = null;
    cardTwo = null;

  }

});

// Orange
document.querySelector(".card-nine").addEventListener("click", () => {
  ui.showImage("card-nine", 'orange.jpg')
  const cardElement = getElementCard("card-nine");
  const src = cardElement.childNodes[0].currentSrc
  const card = new Card("9", "card-nine", src)


  if (cardOne == null) {
    cardOne = card;
  } else {
    // in case the cardOne is ocuped
    cardTwo = card;
  }

  if (cardOne != null && cardTwo != null) {
    const game = new Game(cardOne, cardTwo)
    game.try()

    cardOne = null;
    cardTwo = null;

  }

});

document.querySelector(".card-one").addEventListener("click", () => {
  ui.showImage("card-one", 'orange.jpg')
  const cardElement = getElementCard("card-one");
  const src = cardElement.childNodes[0].currentSrc
  const card = new Card("1", "card-one", src)


  if (cardOne == null) {
    cardOne = card;
  } else {
    // in case the cardOne is ocuped
    cardTwo = card;
  }

  if (cardOne != null && cardTwo != null) {
    const game = new Game(cardOne, cardTwo)
    game.try()

    cardOne = null;
    cardTwo = null;

  }

});