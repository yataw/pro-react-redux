import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';

import './book-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import {bookAddedToCart} from "../../actions";

class BookList extends Component {
    componentDidMount() {
        const { bookstoreService } = this.props;

        bookstoreService.getBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if (error)
            return <ErrorIndicator/>;

        if (loading)
            return <Spinner/>;

        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        const {id} = book;

                        return (
                            <li key={id}>
                                <BookListItem book={book} onAddedToCart={() => onAddedToCart(id)}/>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({bookList: { books, loading, error }}) => {
    return { books, loading, error };
};

const mapDispatchToProps = {
    onAddedToCart: bookAddedToCart
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
