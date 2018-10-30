import React from 'react';
import './App.css';

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.myClick = this.myClick.bind(this)
    }
    render() {
        return (
            <button onClick={this.myClick} className="clicker">
                Изменить дизайн
            </button>
        )
    }  
    myClick() {
        document.getElementsByClassName('wrapper')[0].style.backgroundColor = "#f9f5a6ff";
    }
}
export default Button;