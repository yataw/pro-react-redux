import React from 'react';

const {
  Consumer: BookstoreServiceConsumer,
  Provider: BookstoreServiceProvider
} = React.createContext();

export {
  BookstoreServiceProvider,
  BookstoreServiceConsumer
};