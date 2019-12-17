import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './ErrorSimple.css';
import pic from './death-star.png';


class ErrorSimple extends Component {
    render() {
        return (
            <div className="error-simple">
                <img src={pic} alt="death-star" className="error-simple__pic"/>
                <div className="error-simple__msg">Ouch, sth go wrong...</div>
                <div className="error-simple__msg"> Our droids are rushing to fix it </div>
            </div>
        )
    }
}

export default ErrorSimple;