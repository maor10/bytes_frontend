import React, {Component} from 'react'
import {Card, CardBody, CardHeader, Input} from "reactstrap";
import AceEditor from 'react-ace';
import 'brace/theme/monokai';
import {Timeline} from "./Timeline";
import {Logo} from "./Logo";


const STEPS = [
    {
        text: "Print \"Hello World\""
    },
    {
        text: "Add two numbers"
    },
    {
        text: "Flirt with your teacher"
    },
    {
        text: "Print \"Hello World\""
    },
    {
        text: "Add two numbers"
    },
    {
        text: "Flirt with your teacher"
    },
];


export class Landing extends Component {


    render() {
        return <div style={{height: "50%", display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div style={{margin: "auto"}}>
            <Logo />
                <Input placeholder="username" style={{width: "80%"}} />
            </div>
        </div>;
    }
}
