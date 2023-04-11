export default class UserInfo {
  constructor({ title, subtitle }) {
    this._title = document.querySelector(title);
    this._subtitle = document.querySelector(subtitle);
    this._profileAvatarImage = document.querySelector('.profile__image');
  }

  getUserInfo() {
    return { name: this._title.textContent, job: this._subtitle.textContent };
  }

  setUserInfo(user) {
    this._title.textContent = user.name;
    this._subtitle.textContent = user.about;
  }

  changeAvatar(res) {
    this._profileAvatarImage.src = res.avatar;
  }
}
