import React from 'react';
import './header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='jumbotron'>
            <ul className='nav'>
                <li className='nav-item bg-light'>
                    <Link to='/' className='nav-link'>
                        home
                    </Link>
                </li>
                <li className='nav-item bg-light'>
                    <Link to='card' className='nav-link'>
                        card
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;