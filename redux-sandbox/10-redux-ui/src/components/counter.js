import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div id="root" className="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button id="dec" className="btn btn-primary btn-lg" onClick={dec}>DEC</button>
            <button id="inc" className="btn btn-primary btn-lg" onClick={inc}>INC</button>
            <button id="rnd" className="btn btn-primary btn-lg" onClick={rnd}>RND</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

export default connect(mapStateToProps, actions)(Counter);