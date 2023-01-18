let popup = document.querySelector('.popup')

let popupBtnOpen = document.querySelector('.profile__icon')
function openPopup () {
  popup.classList.add('popup_opened')
  nameInput.value = profileInput.textContent
  jobInput.value = profileJob.textContent
}
popupBtnOpen.addEventListener('click', openPopup)

let popupBtnClose = document.querySelector('.popup__close')
function closePopup () {
  popup.classList.remove('popup_opened')
}
popupBtnClose.addEventListener('click', closePopup)

let formElement = document.querySelector('.popup__content')
let nameInput = document.querySelector('.popup__name')
let jobInput = document.querySelector('.popup__name_form_job')
let profileInput = document.querySelector('.profile__title')
let profileJob = document.querySelector('.profile__subtitle')

function handleFormSubmit (evt) {
    evt.preventDefault()
    profileInput.textContent = nameInput.value
    profileJob.textContent = jobInput.value
    popup.classList.remove('popup_opened')
}
formElement.addEventListener('submit', handleFormSubmit)