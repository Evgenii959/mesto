const config = {
  formSelector: '.popup',
  inputSelector: '.popup__name',
  buttonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorInputClass: 'popup__input-error_active',
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorInputClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorInputClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.buttonSelector);
  
  toggleButtonState(inputList, buttonElement);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      const minLength = inputElement.getAttribute('minlength');
      const customErrorText = inputElement.getAttribute('title');
      if (inputElement.value.length < minLength) {
        inputElement.setCustomValidity(customErrorText);
      } else {
        inputElement.setCustomValidity('');
      }
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.popup__container'));

    fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);
   }); 
   
  });
};

enableValidation();

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
}); 
}

function toggleButtonState (inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add(config.inactiveButtonClass);
} else {
  buttonElement.classList.remove(config.inactiveButtonClass);
} 
}