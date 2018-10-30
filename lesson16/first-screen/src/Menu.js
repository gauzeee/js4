import React, { Component } from 'react';
import Link from './Link';
import './App.css';

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="menu">
                <Link linkTo="#" name="Главная"/>
                <Link linkTo="#" name="Каталог"/>
                <Link linkTo="#" name="Услуги"/>
                <Link linkTo="#" name="Доставка"/>
                <Link linkTo="#" name="О компании"/>
                <Link linkTo="#" name="Контакты"/>
            </div>
        )
    }
}

export default Menu;