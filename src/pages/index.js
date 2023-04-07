import './index.css';
import Card from '../components/Card';
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
  formConfirmPopup,
  formUpdatePopup,
} from '../utils/const.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import Api from '../components/Api.js'

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

const popupConfirm = new PopupWithConfirm('.confirm-popup', handleConfirmFormSubmit);
popupConfirm.setEventListener();

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: 'a23d573b-d37d-4ea7-b717-f5574b5b83fe',
    'Content-Type': 'application/json'
  },
});
api.getInitialCards();

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

function handleConfirmFormSubmit(card) {
  card.remove();
  popupConfirm.close();
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
  return new Card(card, '#elements', selectors, openImagePopup, openConfirmPopup).createCard();
}

function openImagePopup(name, link) {
  popupImage.open(name, link);
}

function openConfirmPopup(card) {
  popupConfirm.open(card);
}

function renderCards(item) {
  const card = createCard(item);
  return card;
}

const section = new Section((item) => {
      const cardElement = renderCards(item);
      section.addItem(cardElement);
    },
  '.list'
);
section.render();
console.log(api.getInitialCards());
Promise.all([api.getInitialCards()])
.then((res) => {
  console.log(res)
})