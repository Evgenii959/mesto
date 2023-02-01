let popup = document.querySelector('.popup');

let openPopupBtn = document.querySelector('.profile__icon');
openPopupBtn.addEventListener('click', openPopup);
function openPopup () {
  popup.classList.add('popup_opened');
  nameInput.value = profileInput.textContent;
  jobInput.value = profileJob.textContent;
};

let closePopupBtn = document.querySelector('.popup__close');
closePopupBtn.addEventListener('click', closePopup);
function closePopup () {
  popup.classList.remove('popup_opened');
};

let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.popup__name_form_full');
let jobInput = document.querySelector('.popup__name_form_job');
let profileInput = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
formElement.addEventListener('submit', handleFormSubmit);
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileInput.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
};

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

let addPopup = document.querySelector('.popup_add');

let addPlus = document.querySelector('.profile__plus');
addPlus.addEventListener('click', openPopupAdd);
function openPopupAdd () {
  addPopup.classList.add('popup_opened');
};

let closePlus = document.querySelector('.popup__close_add');
closePlus.addEventListener('click', closePopupAdd);
function closePopupAdd () {
  addPopup.classList.remove('popup_opened');
  formCard.reset();
};

let formCard = document.querySelector('.popup__content_add');
let countryInput = document.querySelector('.popup__name_form_country');
let srcInput = document.querySelector('.popup__name_form_src');
let submitBtn = document.querySelector('.popup__submit_add');

submitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  let card = createCard({name: countryInput.value, link: srcInput.value});
  list.prepend(card);
  closePopupAdd();
  formCard.reset();
});

const template = document.querySelector('#elements').content;
const list = document.querySelector('.list');

function renderCards(initialCards) {
  const cards = initialCards.map((item) => {
    return createCard(item);
  });
  list.prepend(...cards);
};
renderCards(initialCards);

let clickPopup = document.querySelector('.popup_click');
let imagePopup = document.querySelector('.popup__image');
let popupTitle = document.querySelector('.popup__place');
let imageTitle = document.querySelector('.element__title');
let closePopupImage = document.querySelector('.popup__close_image');

function createCard(item) {
  let card = template.cloneNode(true);
  card.querySelector('.element__title').textContent = item.name;
  card.querySelector('.element__image').src = item.link;
  card.querySelector('.element__heart').addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__heart_aktiv');
  });
  card.querySelector('.element__trash').addEventListener('click', (e) => {
    e.target.closest('.element').remove();
  });
  card.querySelector('.element__image').addEventListener('click', () => {
    clickPopup.classList.add('popup_opened');
    popupTitle.textContent = item.name;
    imagePopup.src = item.link;
  });
  return card;
}

closePopupImage.addEventListener('click', popupImageClose);
function popupImageClose () {
  clickPopup.classList.remove('popup_opened');
};