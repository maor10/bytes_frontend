import React, {Component} from 'react'
import {Button, Card, CardBody, CardHeader, Input} from "reactstrap";
import {Timeline} from "./Timeline";
import {Logo} from "./Logo";
import CleanUp from "../images/clean_up.svg"



export class Landing extends Component {


    render() {
        return <div style={{height: "100%"}}><div style={{height: "50%", display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div style={{margin: "auto"}}>
                <Logo color="white" fontSize="50pt" starColor="white"/>
                <Input placeholder="Search for a course" style={{width: "1000px", height: "50pt", marginTop: "20px", fontSize: "15pt"}} oninput={this.props.onQueryChange}/>
                <div style={{display: "flex", justifyContent: "center", color: "white", marginTop: "15px", fontWeight: "bold", fontSize:"15pt"}}>
                    <div>OR</div>
                </div>
                <div style={{display: "flex", justifyContent: "center", color: "white", marginTop: "20px", fontWeight: "bold", fontSize:"20pt"}}>
                    <Button onClick={this.props.onCreateCourse}>Create a Course</Button>
                </div>

            </div>
        </div>
        <div>
                <img src={CleanUp} style={{width: "400px"}} />
            </div>
        </div>;
    }
}
