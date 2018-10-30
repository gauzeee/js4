import React, { Component } from 'react';
import './App.css';

class Link extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <a className="menu-link" href={this.props.linkTo}>{this.props.name}</a>
        )
    }
}

export default Link;