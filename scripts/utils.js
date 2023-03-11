const imageClickPopup = document.querySelector('.image-popup');
const imagePopup = document.querySelector('.popup__image');
const imageSubtitle = document.querySelector('.popup__subtitle');

function openImagePopup(name, link) {
  imageSubtitle.textContent = name;
  imagePopup.alt = name;
  imagePopup.src = link;
  openPopup(imageClickPopup);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

export { openImagePopup, openPopup, closePopup, imageClickPopup, imagePopup, imageSubtitle };