export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._config.buttonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
  }

  _toggleButtonState() {
    this._formIsValid = this._inputList.every(({ validity }) => validity.valid);
    if (this._formIsValid) {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled', 'disabled');
    } else {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'disabled');
    }
  }

  _showInputError(inputElement, errorMessage) {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._config.errorInputClass);
  }

  _hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    this._errorElement.classList.remove(this._config.errorInputClass);
    this._errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._formElement.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState(), 0;
      });
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetError() {
    this._inputList.forEach((formInput) => {
      this._hideInputError(formInput); // здесь очищаем ошибки валидации с помощью _hideInputError
    });
    // актуализируем состояние кнопки
    this._toggleButtonState();
  }
}
