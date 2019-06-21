import React, { Component } from 'react';
import {NavbarBrand} from "reactstrap";


export class Logo extends Component {


    render() {
        return <NavbarBrand href="/" className="mr-auto">
                                    <h2 style={{color: this.props.color ? this.props.color : "black",
                                        fontSize: this.props.fontSize ? this.props.fontSize : "32pt"}}>bytes<span style={{fontSize: "30pt",
                                        color: "rgb(58, 193, 98)", marginLeft: "3px"}}>*</span></h2>
                </NavbarBrand>;
    }
}