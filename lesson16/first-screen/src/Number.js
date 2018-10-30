import React, { Component } from 'react';
import './App.css';

class Number extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="tel">
                <a href="tel:88003421333">8 800 342-13-33</a>
                <span>Бесплатный звонок по России</span>
            </div>
        )
    }
}

export default Number;