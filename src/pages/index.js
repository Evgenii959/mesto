import './index.css';
import Card from '../components/Card';
import {
  profileOpenBtn,
  nameInput,
  jobInput,
  profilePlus,
  config,
  selectors,
  formCardPopup,
  formInfoPopup,
  profileAvatarOverlay,
  formAvatarPopup,
  profileAvatarImage,
} from '../utils/const.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import Api from '../components/Api.js';
import { changeButton } from '../utils/utils.js';

const cardValidator = new FormValidator(config, formCardPopup);
cardValidator.enableValidation();

const infoValidator = new FormValidator(config, formInfoPopup);
infoValidator.enableValidation();

const avatarValidator = new FormValidator(config, formAvatarPopup);
avatarValidator.enableValidation();

const popupImage = new PopupWithImage('.image-popup');
popupImage.setEventListener();

const popupCard = new PopupWithForm('.element-popup', handleElementFormSubmit);
popupCard.setEventListener();

const userInfo = new UserInfo({ title: '.profile__title', subtitle: '.profile__subtitle' });

const popupProfile = new PopupWithForm('.profile-popup', handleProfileFormSubmit);
popupProfile.setEventListener();

const popupConfirm = new PopupWithConfirm('.confirm-popup', handleConfirmFormSubmit);
popupConfirm.setEventListener();

const popupAvatar = new PopupWithForm('.update-popup', handleAvatarFormSubmit);
popupAvatar.setEventListener();

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: 'a23d573b-d37d-4ea7-b717-f5574b5b83fe',
    'Content-Type': 'application/json',
  },
});
api.getInitialCards();

function handleProfileFormSubmit(value, button) {
  const oldButtonText = button.textContent;
  changeButton(button, 'Ожидайте...');
  api
    .editUser(value.name, value.job)
    .then((user) => {
      userInfo.setUserInfo(user);
      popupProfile.close();
      changeButton(button, oldButtonText);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
}

function handleElementFormSubmit(value, button) {
  const oldButtonText = button.textContent;
  changeButton(button, 'Ожидайте...');
  api
    .addCard(value.name, value.link)
    .then((data) => {
      const newCard = createCard(data, userInfo.id);
      section.addItem(newCard);
      popupCard.close();
      changeButton(button, oldButtonText);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
}

function handleConfirmFormSubmit(card, cardId, button) {
  const oldButtonText = button.textContent;
  changeButton(button, 'Ожидайте...');
  api
    .deleteCard(cardId)
    .then(() => {
      card.remove();
      popupConfirm.close();
      changeButton(button, oldButtonText);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
}

function handleAvatarFormSubmit(value, button) {
  const oldButtonText = button.textContent;
  changeButton(button, 'Ожидайте...');
  api
    .editAvatar(value.avatar)
    .then((res) => {
      profileAvatarImage.src = res.avatar;
      popupAvatar.close();
      changeButton(button, oldButtonText);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
}

profileAvatarOverlay.addEventListener('click', function () {
  popupAvatar.open();
});

profileOpenBtn.addEventListener('click', function () {
  popupProfile.open();
  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.job;
});

profilePlus.addEventListener('click', function () {
  popupCard.open();
});

function createCard(card, userId) {
  return new Card(
    card,
    { other: '#elements', owner: '#elements-owner' },
    selectors,
    openImagePopup,
    openConfirmPopup,
    userId,
    clickLike
  ).createCard();
}

function clickLike(cardId, card, isLiked) {
  if (isLiked) {
    api
      .removeLike(cardId)
      .then((res) => {
        card.updateCountLikes(res.likes.length);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  } else {
    api
      .addLike(cardId)
      .then((res) => {
        card.updateCountLikes(res.likes.length);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
}

function openImagePopup(name, link) {
  popupImage.open(name, link);
}

function openConfirmPopup(card, cardId) {
  popupConfirm.open(card, cardId);
}

function renderCards(item, userId) {
  const card = createCard(item, userId);
  return card;
}

const section = new Section((item, userId) => {
  const cardElement = renderCards(item, userId);
  section.addItem(cardElement);
}, '.list');

Promise.all([api.getInitialCards(), api.getUser()])
  .then((res) => {
    const user = res[1];
    userInfo.setUserInfo(user);
    profileAvatarImage.src = user.avatar;
    userInfo.id = user._id;
    section.render(res[0].reverse(), userInfo.id);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
