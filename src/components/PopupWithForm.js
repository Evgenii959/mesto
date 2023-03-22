import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__content');
    this._inputs = Array.from(this._form.querySelectorAll('.popup__name'));
    this._submit = this._submit.bind(this);
  }
  _getInputValues() {
    this._values = {};
    this._inputs.forEach((input) => {
      this._values[input.name] = input.value;
    });
    return this._values;
  }

  _submit(evt) {
    evt.preventDefault();
    this._submitForm(this._getInputValues());
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', this._submit);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
