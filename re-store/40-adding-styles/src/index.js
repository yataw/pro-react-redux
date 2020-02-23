import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context';

import store from './store';
import {booksRequested as onRequested, booksLoaded as onLoaded, booksError as onError } from './actions';
import {bindActionCreators} from "redux";

const dispatch = store.dispatch;
const serviceCallbacks = bindActionCreators({onRequested, onLoaded, onError}, dispatch);
const bookstoreService = new BookstoreService(serviceCallbacks);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);