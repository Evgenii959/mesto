export default class UserInfo {
  constructor({ title, subtitle }) {
    this._title = document.querySelector(title);
    this._subtitle = document.querySelector(subtitle);
  }

  getUserInfo() {
    return { name: this._title.textContent, job: this._subtitle.textContent };
  }

  setUserInfo(user) {
    this._title.textContent = user.name;
    this._subtitle.textContent = user.about;
  }
}
