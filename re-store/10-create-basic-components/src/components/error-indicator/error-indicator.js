import React from 'react';
import './error-indicator.css';

import {withBookstoreService} from '../hoc/index';

const ErrorIndicator = (props) => {
  return <div>Error!</div>;
};

export default withBookstoreService()(ErrorIndicator);
