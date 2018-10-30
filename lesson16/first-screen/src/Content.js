import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import Inner from './Inner';
import './App.css';

class Content extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="content">
                <div className="bg"></div>
                <Header />
                <Menu />
                <Inner />
            </div>
        )
    }
    
}

export default Content;