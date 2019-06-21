import React, { Component } from 'react'
import UserImage from '../images/user.png'
import {Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import {Logo} from "./Logo";



export class BytesNavbar extends Component {


    render() {
        return <div style={{ marginLeft: "80px", marginRight: "80px", marginTop: "10px" }} >
            <Navbar color="faded"  light >
                <div style={{ marginLeft: "40px" }} >
                 <Logo />
                </div>
                <div right>
                    <img src={UserImage} style={{ width: "30px" }} />
                </div>
            </Navbar>
        </div>;
    }
}
