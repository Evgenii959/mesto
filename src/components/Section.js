export default class Section {
  constructor( renderer, list) {
    this._renderer = renderer;
    this._list = document.querySelector(list);
  }

  render(items, userId) {
    items.forEach((item) => {
      this._renderer(item, userId);
    });
  }

  addItem(element) {
    this._list.prepend(element);
  }
}
