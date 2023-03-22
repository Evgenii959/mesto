export default class Section {
  constructor({ items, renderer }, list) {
    this._items = items;
    this._renderer = renderer;
    this._list = document.querySelector(list);
  }

  render() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._list.prepend(element);
  }
}
