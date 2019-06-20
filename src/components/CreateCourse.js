import React, {Component} from 'react'
import {Card, CardBody, CardHeader} from "reactstrap";
import AceEditor from 'react-ace';
import 'brace/theme/monokai';
import {Timeline} from "./Timeline";
import {Container, Button, Link} from 'react-floating-action-button';



export class CreateCourse extends Component {

    state = {
        course: {
            title: "",
            steps: []
            }
    };


    addVideo = () => {

    };

    addExcersize = () => {
        const steps = this.state.course.steps;
        steps.push({
            text: "Change me!"
        });
        this.setState({
            course: {
                steps: steps,
                ...this.state.course
            }
        });
    };

    render() {

        return <div style={{marginLeft: "50px", marginRight: "50px", marginTop: "5px", height: "50%"}}>
             <h3 className="course-title">Mastering the Basics</h3>

            {
                this.state.course.steps.length === 0 ?
                    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", height: "100%"}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <h1 style={{width: "1000px", color: "white"}}>
                                To get started, click on the plus button to add a lesson to your course</h1>
                        </div>
                    </div> : <Timeline editable={true} steps={this.state.course.steps}/>
            }

            <div style={{
                position: "absolute", right: "100px", bottom: "50px",
                backgroundColor: "white",
                flexDirection: "column", color: "rgb(58, 193, 98)"
            }}>
                <Container>
                    <Button
                        onClick={this.addVideo}
                        tooltip="Add video"
                        icon="fa fa-youtube-play"
                        className="fab-item btn btn-link btn-lg text-white"/>

                    <Button
                        onClick={this.addExcersize}
                        tooltip="Add exercise"
                        icon="fa fa-pencil-square"
                         styles={{backgroundColor: "orange", color: "red"}}
                        className="fab-item btn btn-link btn-lg text-white"/>

                    <Button
                        icon="fa fa-plus"
                        rotate={true}
                        styles={{backgroundColor: "#2d88e6", color: "white"}}
                    />
                </Container>
            </div>


        </div>;
    }
}