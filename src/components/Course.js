import React, {Component} from 'react'
import {Card, CardBody} from "reactstrap";
import {Timeline} from "./Timeline";
import {get} from "../actions"
import {Video} from "./Video";
import {DisplayIframe} from "./DisplayIframe";


export class Course extends Component {

    state = {
        course: {
            id: 1,
            steps: []
        },
        currentStep: {
            type: null
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
        this.getCourse(this.state.course.id);
    }

    getCourse = (id) => {
        get(`/courses/${id}`).then((response) => {
            console.log(this.state.course.steps);
            this.setState({
                course: {
                    id: id,
                    title: response.data.name,
                    steps: response.data.steps
                },
                currentStep: response.data.steps[0]
            });
        })
    };

    onSelectStep = (step) => {
        this.setState({
            currentStep: step
        })
    };

    render() {
        return <div style={{marginLeft: "50px", marginRight: "50px", marginTop: "5px"}}>
                <h3 style={this.styles.courseTitle}>Mastering the Basics</h3>
                <Timeline steps={this.state.course.steps} onSelectStep={this.onSelectStep} />

                <Card style={{backgroundColor: "white",
                    marginTop: "100px", height: "800px", width: "70%", margin: "100px auto", color: "black",
                    padding: "50px",
                border: "0px"}}>
                    <CardBody style={{ border: "0px" }}>
                        <div>
                            {(() => {
                                switch (this.state.currentStep.type) {
                                    case 'exercise':
                                        return <div></div>;
                                    case 'video':
                                        return <Video url={this.state.currentStep.video_url}/>;
                                     case 'iframe':
                                        return <DisplayIframe step={this.state.currentStep}/>;

                                    default:
                                        return <div>Oogyboog</div>;
                                }
                            })()}
                        </div>
                    </CardBody>
                </Card>

        </div>;
    }
}
