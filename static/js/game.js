/**
 * This script have the class
 * Game for have a model of game.
 */

import { Card } from './card.js'

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

  resetCard(cardOld) {
    const cardElement = document.querySelector(`.${cardOld.name}`);
    // cardElement.className = `${cardOld.name}`;
    // cardElement.className = "card";

    cardElement.innerHTML = `${cardOld.id}`;

    console.log(cardElement)

  }

  try() {
    // console.log(this.cardOne);
    // console.log(this.cardTwo);

    if (this.cardOne.src === this.cardTwo.src) {
      console.log('equal')
    } else {
      // this.resetCard(this.cardOne);
      // this.resetCard(this.cardTwo);

      // setTimeout(() => {
      //   this.resetNormalCard(this.cardOne);
      //   this.resetNormalCard(this.cardTwo);
      // }, 3000)


      setTimeout(() => {
        this.resetCard(this.cardOne);
        this.resetCard(this.cardTwo);

      }, 600);

      console.log('hello')

    }

  }

}