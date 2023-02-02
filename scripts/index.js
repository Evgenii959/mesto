const profilePopup = document.querySelector('.profile-popup');
const profileOpenBtn = document.querySelector('.profile__icon');

profileOpenBtn.addEventListener('click', function () {
  openPopup(profilePopup);
  nameInput.value = profileInput.textContent;
  jobInput.value = profileJob.textContent;
});

function openPopup (profilePopup) {
  profilePopup.classList.add('popup_opened');
};

// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
button.addEventListener('click', () => closePopup(popup));
});
function closePopup (popup) { 
  popup.classList.remove('popup_opened'); 
}; 

const profileForm = document.querySelector('.profile-form');
const nameInput = document.querySelector('.profile-name');
const jobInput = document.querySelector('.profile-job');
const profileInput = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
profileForm.addEventListener('submit', handleProfileFormSubmit);
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileInput.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
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

const elementPopup = document.querySelector('.element-popup');
const elementForm = document.querySelector('.element-form');
const countryInput = document.querySelector('.element-country');
const srcInput = document.querySelector('.element-src');

const profilePlus = document.querySelector('.profile__plus');
profilePlus.addEventListener('click', function () {
  openPopupAdd(elementPopup);
});

function openPopupAdd (elementPopup) {
  elementPopup.classList.add('popup_opened');
};

elementForm.addEventListener('submit', handleElementFormSubmit)
function handleElementFormSubmit (event) {
  event.preventDefault();
  let card = createCard({name: countryInput.value, link: srcInput.value});
  list.prepend(card);
  closePopup(elementPopup);
  elementForm.reset();
};

const template = document.querySelector('#elements').content;
const list = document.querySelector('.list');

function renderCards(initialCards) {
  const cards = initialCards.map((item) => {
    return createCard(item);
  });
  list.prepend(...cards);
};
renderCards(initialCards);

const imageClickPopup = document.querySelector('.image-popup');
const imagePopup = document.querySelector('.popup__image');
const imageSubtitle = document.querySelector('.popup__subtitle');

function createCard(item) {
  const card = template.cloneNode(true);
  card.querySelector('.element__title').textContent = item.name;
  card.querySelector('.element__image').src = item.link;
  
  card.querySelector('.element__heart').addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__heart_aktiv');
  });
  card.querySelector('.element__trash').addEventListener('click', (e) => {
    e.target.closest('.element').remove();
  });

  const elementCard = card.querySelector('.element__image');
  elementCard.addEventListener('click', function () {
    openImage(imageClickPopup);
  });
  function openImage (imageClickPopup) {
    imageClickPopup.classList.add('popup_opened');
    imageSubtitle.textContent = item.name;
    imagePopup.alt = item.link; 
    imagePopup.src = item.link;
  };
  return card;
};