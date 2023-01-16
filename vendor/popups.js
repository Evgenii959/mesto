let popup = document.querySelector('.popup')
let popupBtnOpen = document.querySelector('.profile__icon')
let popupBtnClose = document.querySelector('.popup__close')

popupBtnOpen.addEventListener('click', openPopup);
popupBtnClose.addEventListener('click', closePopup);

function openPopup () {
  popup.classList.add('popup_opened');
};

function closePopup () {
  popup.classList.remove('popup_opened');
};

// Находим форму в DOM
let formElement = document.querySelector('.popup__content')
let nameInput = document.querySelector('.popup__name')
let jobInput = document.querySelector('.popup__job')
let profileInput = document.querySelector('.profile__title')
let profileJob = document.querySelector('.profile__subtitle')
let saveButton = document.querySelector('.popup__submit')

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileInput.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}
formElement.addEventListener('submit', handleFormSubmit);

saveButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

function myFunction(x) {
  x.classList.toggle("element__heart_aktiv");
}