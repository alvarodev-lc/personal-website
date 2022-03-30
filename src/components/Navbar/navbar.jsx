import React, {Component} from 'react'
import { menuItems } from './menuItems'
import { Link } from 'react-router-dom';
import { Button } from '../Button/button'

import './navbar.min.css'


class Navbar extends Component {
    // Clicked used to change navbar icon, margin used to change navbar style to avoid overlapping
    state = { clicked: false, margin: 80}

    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
        let isClicked = this.state.clicked;
        if (isClicked === true){
            this.setState({margin: 80})
        }
        else{
            this.setState({margin: 300})
        }
    }

    render(){
        const css = `
        @media screen and (max-width: 960px) {
            .c-navbar-items {
                margin-bottom: ${this.state.margin}px;
                transition: all 0.5s ease-in-out;
            }
        }
        `
        return(
                <nav className="c-navbar-items">
                    <h1 className="c-navbar-logo">
                        Alvaro
                        <i className='fab fa-react'></i>
                    </h1>
                    <div className="c-menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'c-nav-menu active' : 'c-nav-menu'}>
                        {menuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                        <Link className={item.cName} to={item.url}>
                                         {item.title}
                                        </Link>
                                </li>
                            )
                            })}
                        <style>
                            {css}
                        </style>
                    </ul>
                    <Button>Contact</Button>
                </nav>
        )
    }
}

export default Navbar
