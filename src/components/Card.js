class Card {
  constructor(item, temlateSelector, selectors, openImagePopup, openConfirmPopup) {
    this._item = item;
    this._temlateSelector = temlateSelector;
    this._selectors = selectors;
    this._openImagePopup = openImagePopup;
    this._openConfirmPopup = openConfirmPopup;
  }

  _getTemplate() {
    this._template = document.querySelector(this._temlateSelector).content;
  }

  _openPopupClass() {
    this._openImagePopup(this._item.name, this._item.link);
  }

  _handleLikeCard() {
    this._elementHeartCard.classList.toggle('element__heart_aktiv');
  }

  _handleDeleteCard() {
/*     this._card.remove();
    this._card = null; */
    this._openConfirmPopup(this._card);
  }

  _setEventListeners() {
    this._elementCard.addEventListener('click', () => this._openPopupClass());
    this._elementHeartCard.addEventListener('click', () => this._handleLikeCard());
    this._elementTrashCard.addEventListener('click', () => this._handleDeleteCard());
  }

  createCard() {
    this._getTemplate();
    this._card = this._template.querySelector(this._selectors.elementSelector).cloneNode(true);
    this._elementCard = this._card.querySelector(this._selectors.elementImage);
    this._elementHeartCard = this._card.querySelector(this._selectors.elementHeart);
    this._elementTitleCard = this._card.querySelector(this._selectors.elementTitle);
    this._elementTrashCard = this._card.querySelector(this._selectors.elementTrash);
    this._elementTitleCard.textContent = this._item.name;
    this._elementCard.src = this._item.link;
    this._elementCard.alt = this._item.name;

    this._setEventListeners();
    return this._card;
  }
}

fetch('https://mesto.nomoreparties.co/v1/cohort-63/cards', {
  headers: {
    authorization: 'a23d573b-d37d-4ea7-b717-f5574b5b83fe',
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });
  
export default Card;
