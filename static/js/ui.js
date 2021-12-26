/**
 * This is script have the class UI for work
 * with the interface of game.
 */

export class UI {
  constructor() {}

  showImage(cardElement, name) {
    const card = document.querySelector("." + cardElement);
    const image = document.createElement("img");

    card.innerHTML = `<img src="../static/img/${name}" alt="image1">`

  }

}