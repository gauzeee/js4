import React, { Component } from 'react';
import './App.css';

class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <button className={this.props.class}>{this.props.inner}</button>
        )
    }
}

export default Button;