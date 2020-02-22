import React, {Component} from 'react';
import './book-list.css';
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';
import withBookstoreService from "../hoc/with-bookstore-service";

import {booksLoaded} from '../../actions';
import compose from "../../utils/compose";

class BookList extends Component {
    componentDidMount() {
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();

        this.props.booksLoaded(data)
    }

    render() {
      const {books} = this.props;

        return (
            <ul>
              {
                books.map(book => {
                  return <BookListItem key={book.id} book={book} />
                })
              }
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    books: state.books
});

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);