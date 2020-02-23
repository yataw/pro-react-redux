import {booksError as onError, booksLoaded as onLoaded, booksRequested as onRequested} from "../actions";

const data = [
    {
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler',
        price: 32,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    },
    {
        id: 2,
        title: 'Release It!',
        author: 'Michael T. Nygard',
        price: 45,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
    }
];


export default class BookstoreService {
    constructor({onRequested, onLoaded, onError}) {
        this.onRequested = onRequested;
        this.onLoaded = onLoaded;
        this.onError = onError;
    }

    getBooks() {
        this.onRequested();
        return new Promise((res, rej) => {
            setTimeout(() => (Math.random() < .85 ? res(data) : rej(new Error('Error'))), 500);
        }).then(() => this.onLoaded(data)).catch(this.onError)
    }
}