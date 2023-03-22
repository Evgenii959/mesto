import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopup = this._popup.querySelector('.popup__image');
    this._imageSubtitle = this._popup.querySelector('.popup__subtitle');
  }
  open(name, link) {
    super.open();
    this._imageSubtitle.textContent = name;
    this._imagePopup.alt = name;
    this._imagePopup.src = link;
  }
}
