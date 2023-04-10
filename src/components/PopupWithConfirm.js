import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.confirm-form');
    this._submit = this._submit.bind(this);
    this._submitButton = this._form.querySelector('.popup__submit');
  }

  open(card, cardId) {
    super.open();
    this._card = card;
    this._cardId = cardId;
  }

  _submit(evt) {
    evt.preventDefault();
    this._handleSubmit(this._card, this._cardId, this._submitButton);
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', this._submit);
  }
}
