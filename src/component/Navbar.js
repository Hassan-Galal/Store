import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import { ButtonContainer } from "./button";
import { NavWrapper } from "./navWrapper";

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navebar-expand-sm bg-primary navbar-dark px-sm-5" >
                <Link to='/home'>
                    <img src={logo}alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/home">
                            HOME
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus">
                            My Cart
                        </i>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}
