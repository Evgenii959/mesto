import Card from './Card.js';
import { openImagePopup, openPopup, closePopup } from './utils.js';
import {
  profilePopup,
  profileOpenBtn,
  closeButtons,
  profileForm,
  nameInput,
  jobInput,
  profileInput,
  profileJob,
  elementPopup,
  elementForm,
  countryInput,
  srcInput,
  profilePlus,
  list,
  popups,
  initialCards,
  config,
  selectors,
  formCardPopup,
  formInfoPopup,
} from './const.js';
import FormValidator from './FormValidator.js';
const cardValidator = new FormValidator(config, formCardPopup);
cardValidator.enableValidation();
const infoValidator = new FormValidator(config, formInfoPopup);
infoValidator.enableValidation();

profileOpenBtn.addEventListener('click', function () {
  openPopup(profilePopup);
  nameInput.value = profileInput.textContent;
  jobInput.value = profileJob.textContent;
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

profileForm.addEventListener('submit', handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileInput.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
}

profilePlus.addEventListener('click', function () {
  openPopup(elementPopup);
});

elementForm.addEventListener('submit', handleElementFormSubmit);

function createCard(card) {
  return new Card(card, '#elements', selectors, openImagePopup).createCard();
}

function handleElementFormSubmit(event) {
  event.preventDefault();
  const card = { name: countryInput.value, link: srcInput.value };
  const cards = createCard(card);
  list.prepend(cards);
  closePopup(elementPopup);
  elementForm.reset();
}

function renderCards(initialCards) {
  initialCards.forEach((item) => {
    const cards = createCard(item);
    list.prepend(cards);
  });
}
renderCards(initialCards);

popups.forEach(function (popup) {
  popup.addEventListener('click', function (event) {
    if (event.target === popup) {
      closePopup(popup);
    }
  });
});