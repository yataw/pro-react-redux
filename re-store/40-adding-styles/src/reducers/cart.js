
const sameId = (id1) => ({id: id2}) => {
    return id1 === id2;
};

export default class Cart {
    constructor() {
        this.items = null;
        this.books = null;

        this.currentItemId = null;
        this.currentCartItem = null;
        this.currentBook = null;
    }

    updateCart(items, books) {
        this.items = items;
        this.books = books;
    }

    _updateItem(quantity) {
        const book = this.currentBook;
        const item = this.currentCartItem || {};
        const {id = book.id, count = 0, title = book.title, total = 0} = item;
        const currentCount = count + quantity;

        return {
            id,
            title,
            count: currentCount,
            total: (currentCount) * book.price
        }
    }

    _updateItems(quantity) {
        if (quantity < 0 && !this.currentCartItem)
            return;

        if (this.currentCartItem && this.currentCartItem.count + quantity <= 0) {
            this.deleteCurrentItem();

            return;
        }

        const item = this._updateItem(quantity);

        if (this.currentCartItem)
            this.items = this.items.map((currItem) => {
                const {id} = this.currentCartItem;

                return currItem.id === id ? item : currItem;
            });
        else
            this.items = [...this.items, item];
    }

    _setCurrents(id) {
        this.currentItemId = id;
        this.currentBook = this.books.find(sameId(id));
        this.currentCartItem = this.items.find(sameId(id));
    }

    changeItem(id, quantity) {
        this._setCurrents(id);
        this._updateItems(quantity)
    }

    deleteItem(id) {
        this._setCurrents(id);
        this.deleteCurrentItem();
    }

    deleteCurrentItem() {
        this.items = this.items.filter(({id}) => id !== this.currentItemId)
    }

    getItems() {
        return this.items;
    }

    getTotal() {
        if (!this.items)
            return 0;

        return this.items.reduce((total, item) => (total + item.total), 0);
    }
}