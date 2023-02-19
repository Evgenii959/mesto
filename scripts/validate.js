const config = {
  formSelector: '.popup',
  inputSelector: '.popup__name',
  buttonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorInputClass: 'popup__input-error_active',
  popupContainer: '.popup__container',
};

const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorInputClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorInputClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.buttonSelector);
  
  toggleButtonState(inputList, buttonElement, config);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      const minLength = inputElement.getAttribute('minlength');
      const customErrorText = inputElement.getAttribute('title');
      if (inputElement.value.length < minLength) {
        inputElement.setCustomValidity(customErrorText);
      } else {
        inputElement.setCustomValidity('');
      }
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll(config.popupContainer));
    fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet, config);
   });
  });
};

[ profileOpenBtn, profilePlus ].forEach(function(element) {
  element.addEventListener("click", function() {
    enableValidation(config);
  });
});

function toggleButtonState (inputList, buttonElement, config) {
  const formIsValid = inputList.every(({validity}) => validity.valid);
  if (formIsValid) {
  buttonElement.classList.remove(config.inactiveButtonClass);
  buttonElement.removeAttribute('disabled', 'disabled');
} else {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.setAttribute('disabled', 'disabled');
} 
}