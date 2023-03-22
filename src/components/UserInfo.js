export default class UserInfo {
  constructor({ title, subtitle }) {
    this._title = document.querySelector(title);
    this._subtitle = document.querySelector(subtitle);
  }

  getUserInfo() {
    return { name: this._title.textContent, job: this._subtitle.textContent };
  }

  setUserInfo(name, job) {
    this._title.textContent = name;
    this._subtitle.textContent = job;
  }
}
