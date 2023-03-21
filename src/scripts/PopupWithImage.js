import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(formSelector) {
    super(formSelector);
    this._imagePopup = document.querySelector('.popup__image');
    this._imageSubtitle = this._popup.querySelector('.popup__subtitle');
  }
  open(name, link) {
    super.open();
    this._imageSubtitle.textContent = name;
    this._imagePopup.alt = name;
    this._imagePopup.src = link;
  }
}
