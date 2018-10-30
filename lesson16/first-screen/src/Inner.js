import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class Inner extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="inner">
                <div className="inner-title"><h1>Быстрая доставка</h1></div>
                <div className="inner-text">бетона, щебня, песка <br></br> и других нерудных материалов <br></br> по Москве и Московской области </div>
                <div className="inner-links">
                    <Button class="inner-button" inner="Подробнее о доставке"/>
                     или
                     <a className="catalog-link" href="#">перейти в каталог</a>
                </div>
            </div>
        )
    }
}

export default Inner;

