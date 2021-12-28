/**
 * This is script have the class UI for work
 * with the interface of game.
 */

import { Card } from './card.js';


export class UI {
  constructor() {}

  /**
   * 
   * @param {HTMLElement} cardElement The element in html for use
   * @param {string} name The name of the image for found
   */
  showImageFruit(cardElement, name) {
    const card = document.querySelector(`.${cardElement}`);
    const image = document.createElement("img");
    image.className = "with-image";

    card.innerHTML = `<img src="../static/img/fruits/${name}" alt="image-${name}">`;

  }

  /**
   * 
   * @param {HTMLElement} cardElement The element in html for use in sports
   * @param {string} name The name of the image for found
   */
  showImageSport(cardElement, name) {
    const card = document.querySelector(`.${cardElement}`);
    const image = document.createElement("img");
    image.className = "with-image";

    card.innerHTML = `<img src="../static/img/sports/${name}" alt="image-${name}">`;

  }

}