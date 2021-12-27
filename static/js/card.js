/**
 * This script have the class
 * Card.
 */

export class Card {

  /**
   * 
   * @param {string} id The id for identify the card
   * @param {string} name The name of the card
   * @param {string} src The source of the image that have the card
   */
  constructor(id, name, src) {
    this.id = id;
    this.name = name;
    this.src = src;
  }
}