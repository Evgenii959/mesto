import './index.css';
import Card from './scripts/Card';
import {
  profileOpenBtn,
  nameInput,
  jobInput,
  profilePlus,
  initialCards,
  config,
  selectors,
  formCardPopup,
  formInfoPopup,
} from './scripts/const.js';
import FormValidator from './scripts/FormValidator.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import Section from './scripts/Section.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';

const cardValidator = new FormValidator(config, formCardPopup);
cardValidator.enableValidation();

const infoValidator = new FormValidator(config, formInfoPopup);
infoValidator.enableValidation();

const popupImage = new PopupWithImage('.image-popup');
popupImage.setEventListener();

const popupCard = new PopupWithForm('.element-popup', handleElementFormSubmit);
popupCard.setEventListener();

const userInfo = new UserInfo({ title: '.profile__title', subtitle: '.profile__subtitle' });

const popupProfile = new PopupWithForm('.profile-popup', handleProfileFormSubmit);
popupProfile.setEventListener();

function handleProfileFormSubmit(value) {
  userInfo.setUserInfo(value.name, value.job);
  popupProfile.close();
}

function handleElementFormSubmit(value) {
  const card = { name: value.name, link: value.link };
  const newCard = createCard(card);
  section.addItem(newCard);
  popupCard.close();
}

profileOpenBtn.addEventListener('click', function () {
  popupProfile.open();
  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.job;
});

profilePlus.addEventListener('click', function () {
  popupCard.open();
});

function createCard(card) {
  return new Card(card, '#elements', selectors, openImagePopup).createCard();
}

function openImagePopup(name, link) {
  popupImage.open(name, link);
}

function renderCards(item) {
  const card = createCard(item);
  return card;
}

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = renderCards(item);
      section.addItem(cardElement);
    },
  },
  '.list'
);
section.render();
