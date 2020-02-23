
const initialState = {
    books: [],
    loading: true,
    error: null,
};

const updateBookList = ({bookList: state = initialState}, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default updateBookList;
