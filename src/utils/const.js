const profilePopup = document.querySelector('.profile-popup');
const profileOpenBtn = document.querySelector('.profile__icon');
const closeButtons = document.querySelectorAll('.popup__close');
const profileForm = document.querySelector('.profile-form');
const nameInput = document.querySelector('.profile-name');
const jobInput = document.querySelector('.profile-job');
const profileInput = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const countryInput = document.querySelector('.element-country');
const srcInput = document.querySelector('.element-src');
const profilePlus = document.querySelector('.profile__plus');
const list = document.querySelector('.list');
const popups = document.querySelectorAll('.popup');
const formCardPopup = document.querySelector('.element-form');
const formInfoPopup = document.querySelector('.profile-form');
const profileAvatar = document.querySelector('.profile__avatar-edit');
const formAvatarPopup = document.querySelector('.update-popup');
const profileAvatarOverlay = document.querySelector('.profile__avatar-overlay');

const config = {
  popupSelector: '.popup',
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
  elementLikeCount: '.element__heart_count',
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
  countryInput,
  srcInput,
  profilePlus,
  list,
  popups,
  config,
  selectors,
  formCardPopup,
  formInfoPopup,
  profileAvatar,
  formAvatarPopup,
  profileAvatarOverlay,
};
