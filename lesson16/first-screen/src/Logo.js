import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';

class Logo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="logo">
                <div className="pic">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="logo-text">
                    <div>GRANIT</div>
                    <span>Доставка нерудных материалов</span>
                </div>
            </div>
        )
    }
}

export default Logo;