const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

const booksError = (err) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: err
    }
};

const bookAddedToCart = (id) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: id
    }
};

const bookIncrease = (id) => {
    return {
        type: 'BOOK_INCREASE',
        payload: id
    }
};

const bookDecrease = (id) => {
    return {
        type: 'BOOK_DECREASE',
        payload: id
    }
};

const bookDelete = (id) => {
    return {
        type: 'BOOK_DELETE',
        payload: id
    }
};


export {
    booksLoaded,
    booksRequested,
    booksError,
    bookAddedToCart,
    bookIncrease,
    bookDecrease,
    bookDelete
};
