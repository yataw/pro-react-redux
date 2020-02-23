import Cart from "./cart";

const initialState = {
    cartItems: [],
    orderTotal: 0
};

const cart = new Cart();

const updateShoppingCart = ({bookList, shoppingCart: state = initialState}, action) => {

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
        case 'BOOK_INCREASE':

            cart.updateCart(state.cartItems, bookList.books);
            cart.changeItem(action.payload, +1);

            return {
                ...state,
                cartItems: cart.getItems(),
                orderTotal: cart.getTotal()
            };

        case 'BOOK_DECREASE':
            cart.updateCart(state.cartItems, bookList.books);
            cart.changeItem(action.payload, -1);

            return {
                ...state,
                cartItems: cart.getItems(),
                orderTotal: cart.getTotal()
            };

        case 'BOOK_DELETE':
            cart.updateCart(state.cartItems, bookList.books);
            cart.deleteItem(action.payload);

            return {
                ...state,
                cartItems: cart.getItems(),
                orderTotal: cart.getTotal()
            };

        default:
            return state;
    }
};

export default updateShoppingCart;