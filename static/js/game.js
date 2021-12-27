/**
 * This script have the class
 * Game for have a model of game.
 */

import { Card } from './card.js'

export var score = 0;

export class Game {
  /**
   * 
   * @param {Card} cardOne The first card for the game
   * @param {Card} cardTwo The second card for the game
   */
  constructor(cardOne, cardTwo) {
    this.cardOne = cardOne;
    this.cardTwo = cardTwo;

  }

  /**
   * 
   * @param {Card} cardOld The card for reset
   */
  resetCard(cardOld) {
    // getting
    const cardElement = document.querySelector(`.${cardOld.name}`);

    cardElement.innerHTML = `${cardOld.id}`; // changing the value

  }

  /**
   * Put a green color to the cards
   */
  makeGoodCard() {
    // getting and changing
    const cardOne = document.querySelector(`.${this.cardOne.name}`);
    const cardTwo = document.querySelector(`.${this.cardTwo.name}`);

    cardOne.className = 'good';
    cardTwo.className = 'good';

  }

  // this was a test
  addScore() {
    score++

  }

  validateFinish() {
    if (score >= 6)  {
      alert(`Congrulations you finished. Your score was ${score}`)
    }

  }


  /**
   * Validate the card for add your score
   * or less, also reset the card if not is
   * good the card.
   */
  try() {
    // validating the src of the image
    if (this.cardOne.src === this.cardTwo.src) {
      this.makeGoodCard(); // put green card
      this.addScore(); // adding
      
    } else {

      // for a pause
      setTimeout(() => {
        this.resetCard(this.cardOne);
        this.resetCard(this.cardTwo);

      }, 600);

    }

    this.validateFinish(); // validating the finished

  }

}