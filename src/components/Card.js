class Card {
  constructor(item, temlateSelectors, selectors, openImagePopup, openConfirmPopup, userId, clickLike) {
    this._item = item;
    this._id = item._id;
    this._likes = item.likes.length;
    this._likesArray = item.likes;
    this._ownerId = item.owner._id;
    this._userId = userId;
    this._temlateSelectors = temlateSelectors;
    this._selectors = selectors;
    this._openImagePopup = openImagePopup;
    this._openConfirmPopup = openConfirmPopup;
    this._clickLike = clickLike;
  }

  _getTemplate(temlateSelector) {
    this._template = document.querySelector(temlateSelector).content;
  }

  _openPopupClass() {
    this._openImagePopup(this._item.name, this._item.link);
  }

  _handleLikeCard() {
    this._elementHeartCard.classList.toggle('element__heart_aktiv');
    this._clickLike(this._id, this, this._isLiked);
    this._isLiked = !this._isLiked;
  }

  updateCountLikes(count) {
    this._likeCount.textContent = count;
  }

  _handleDeleteCard() {
    this._openConfirmPopup(this._card, this._id);
  }

  _setEventListeners() {
    this._elementCard.addEventListener('click', () => this._openPopupClass());
    this._elementHeartCard.addEventListener('click', () => this._handleLikeCard());
    if (this._isOwner) {
      this._elementTrashCard.addEventListener('click', () => this._handleDeleteCard());
    }
  }

  createCard() {
    this._isOwner = this._ownerId === this._userId;
    if (this._isOwner) {
      this._getTemplate(this._temlateSelectors.owner);
    } else {
      this._getTemplate(this._temlateSelectors.other);
    }
    this._isLiked = this._likesArray.some((like) => {
      return like._id === this._userId;
    });
    this._card = this._template.querySelector(this._selectors.elementSelector).cloneNode(true);
    this._elementCard = this._card.querySelector(this._selectors.elementImage);
    this._elementHeartCard = this._card.querySelector(this._selectors.elementHeart);
    if (this._isLiked) {
      this._elementHeartCard.classList.add('element__heart_aktiv');
    }
    this._elementTitleCard = this._card.querySelector(this._selectors.elementTitle);
    if (this._isOwner) {
      this._elementTrashCard = this._card.querySelector(this._selectors.elementTrash);
    }

    this._likeCount = this._card.querySelector(this._selectors.elementLikeCount);
    this._likeCount.textContent = this._likes;
    this._elementTitleCard.textContent = this._item.name;
    this._elementCard.src = this._item.link;
    this._elementCard.alt = this._item.name;

    this._setEventListeners();
    return this._card;
  }
}

export default Card;
