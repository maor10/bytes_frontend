import React, {Component} from 'react'
import {Card, CardBody} from "reactstrap";
import {Timeline} from "./Timeline";
import {get} from "../actions"


export class Course extends Component {

    state = {
        course: {
            id: 1
        }
    };

    styles = {
        courseTitle: {
            marginLeft: "40px",
            textAlign: "left",
            color: "white",
            paddingTop: "50px"
        },
        circle: {
            width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "white",
            border: "1px solid rgb(58, 193, 98)", marginTop: "-8px"
        }
    };

    componentDidMount() {
        this.getCourse()
    }

    getCourse = (id) => {
        get(`/courses/${id}`).then((response) => {
            this.setState({
                course: {
                    id: id,
                    title: response.data.name,
                    steps: response.data.steps
                },
                currentStep: 0
            });
        })
    };

    render() {
        return <div style={{marginLeft: "50px", marginRight: "50px", marginTop: "5px"}}>
                <h3 style={this.styles.courseTitle}>Mastering the Basics</h3>
                <Timeline steps={STEPS}/>

                <Card style={{backgroundColor: "white",
                    marginTop: "100px", height: "800px", width: "70%", margin: "100px auto", color: "black",
                    padding: "50px",
                border: "0px"}}>
                    <CardBody style={{ border: "0px" }}>

                    </CardBody>
                </Card>

        </div>;
    }
}
