import React, { Component } from 'react';
import {NavbarBrand} from "reactstrap";


export class Logo extends Component {


    render() {
        return <NavbarBrand href="/" className="mr-auto" style={{ marginLeft: "40px" }} >
                                    <h2>bytes<span style={{fontSize: "30pt",
                                        color: "rgb(58, 193, 98)", marginLeft: "3px"}}>*</span></h2>
                </NavbarBrand>;
    }
}