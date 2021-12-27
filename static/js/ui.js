/**
 * This is script have the class UI for work
 * with the interface of game.
 */

export class UI {
  constructor() {}

  // orderContent() {
  //   const container = document.querySelector('.view-cards');
  //   container.className = 'with-image';
  // }

  showImage(cardElement, name) {
    const card = document.querySelector(`.${cardElement}`);
    const image = document.createElement("img");
    image.className = 'with-image';

    card.innerHTML = `<img src="../static/img/${name}" alt="image-${name}">`;

  }

}