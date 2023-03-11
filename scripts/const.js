const profilePopup = document.querySelector('.profile-popup');
const profileOpenBtn = document.querySelector('.profile__icon');
const closeButtons = document.querySelectorAll('.popup__close');
const profileForm = document.querySelector('.profile-form');
const nameInput = document.querySelector('.profile-name');
const jobInput = document.querySelector('.profile-job');
const profileInput = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const elementPopup = document.querySelector('.element-popup');
const elementForm = document.querySelector('.element-form');
const countryInput = document.querySelector('.element-country');
const srcInput = document.querySelector('.element-src');
const profilePlus = document.querySelector('.profile__plus');
const list = document.querySelector('.list');
const popups = document.querySelectorAll('.popup');
const formCardPopup = document.querySelector('.element-form');
const formInfoPopup = document.querySelector('.profile-form');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

const config = {
  formSelector: '.popup',
  inputSelector: '.popup__name',
  buttonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorInputClass: 'popup__input-error_active',
  popupContainer: '.popup__container',
};

const selectors = {
  elementSelector: '.element',
  elementImage: '.element__image',
  elementTitle: '.element__title',
  elementHeart: '.element__heart',
  elementHeartAktiv: 'element__heart_aktiv',
  elementTrash: '.element__trash',
};

export {
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
};