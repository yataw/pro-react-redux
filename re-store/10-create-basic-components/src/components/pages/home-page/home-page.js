import React from 'react';
import './home-page.css';
import BookList from "../../book-list/book-list";

const HomePage = () => {
    return (
        <BookList books={[{id: 1, title: 'he', author: 'auth'}]}/>
    );
};

export default HomePage;