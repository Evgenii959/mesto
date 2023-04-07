import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.confirm-form');
    this._submit = this._submit.bind(this);
    console.log(this._form);
  }

  open(card) {
    super.open();
    console.log(card)
    this._card = card;
  }

  _submit(evt) {
    console.log(this._card);
    evt.preventDefault();
    this._handleSubmit(this._card);
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', this._submit);
  }
  /* 
  close() {
    super.close();
  } */
}
