export default class Popup {
  constructor(formSelector) {
    this._popup = document.querySelector(formSelector);
    this._closeByEscape = this._closeByEscape.bind(this);
    this._closeButton = this._popup.querySelector('.popup__close');
    this._closeByMouse = this._closeByMouse.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closeByEscape);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closeByEscape);
  }

  _closeByEscape(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListener() {
    this._closeButton.addEventListener('click', this.close);
    this._popup.addEventListener('mouseup', this._closeByMouse);
  }

  _closeByMouse(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }
}
