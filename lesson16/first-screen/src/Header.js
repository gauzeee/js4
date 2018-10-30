import React, { Component } from 'react';
import Logo from './Logo';
import Number from './Number';
import Button from './Button';
import './App.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="header">
                <Logo />
                <div className="header-right">
                    <Number />
                    <Button class="header-button" inner="Обратный звонок" />
                </div>
            </div>
        )
    }
}

export default Header;