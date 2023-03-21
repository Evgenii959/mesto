export default class Section {
  constructor({ items, renderer }, selectorList) {
    this._items = items;
    this._renderer = renderer;
    this._selectorList = document.querySelector(selectorList);
  }

  render() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._selectorList.prepend(element);
  }
}
