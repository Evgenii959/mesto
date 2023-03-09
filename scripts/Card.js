class Card {
  static _template = document.querySelector('#elements').content;

  constructor(item, selectors, openImagePopup) {
    this._item = item;
    this._selector = selectors;
    this._openImagePopup = openImagePopup;
  }

  _openPopupClass() {
    this._openImagePopup(this._item.name, this._item.link);
  }

  _setEventListeners() {
    this._elementCard.addEventListener('click', () => this._openPopupClass());
    this._elementHeartCard.addEventListener('click', (evt) => {
      evt.target.classList.toggle(this._selector.elementHeartAktiv);
    });
    this._elementTrashCard.addEventListener('click', (e) => {
      e.target.closest(this._selector.elementSelector).remove();
    });
  }

  createCard() {
    this._card = Card._template.querySelector(this._selector.elementSelector).cloneNode(true);
    this._elementCard = this._card.querySelector(this._selector.elementImage);
    this._elementHeartCard = this._card.querySelector(this._selector.elementHeart);
    this._elementTitleCard = this._card.querySelector(this._selector.elementTitle);
    this._elementTrashCard = this._card.querySelector(this._selector.elementTrash);
    this._elementTitleCard.textContent = this._item.name;
    this._elementCard.src = this._item.link;
    this._elementCard.alt = this._item.link;

    this._setEventListeners();
    return this._card;
  }
}

export default Card;
