import React, {Component} from 'react'
import { menuItems } from './menuItems'
import { Button } from '../Button/button'
import './navbar.min.css'

class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }

    render(){
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
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                        })}
                </ul>
                <Button>Contact</Button>
            </nav>
        )
    }
}

export default Navbar
