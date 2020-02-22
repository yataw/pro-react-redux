import React from 'react';
import {BookstoreServiceConsumer} from '../bookstore-service-context';

// 1st arg - props mapper
const withBookstoreService = () => (Wrapped) => (props) => (
    <BookstoreServiceConsumer>
        {
            (bookstoreService) => <Wrapped bookstoreService={bookstoreService} {...props}/>
        }
    </BookstoreServiceConsumer>
);

export default withBookstoreService;
