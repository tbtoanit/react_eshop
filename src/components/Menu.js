import React, { Component } from 'react';
import '../css/menu.css'

class Menu extends Component {
    render() {
        return (
            <div>
                <u className="menu">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </u>
            </div>
        );
    }
}

export default Menu;