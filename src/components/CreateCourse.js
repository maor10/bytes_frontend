import React, {Component} from 'react'
import {Card, CardBody, CardHeader, Input, Button as BootstrapButton} from "reactstrap";
import {Timeline} from "./Timeline";
import {Container, Button, Link} from 'react-floating-action-button';
import {AddVideo} from "./AddVideo";
import {get, post} from "../actions";
import {AIframe} from "./AIframe";


export class CreateCourse extends Component {

    state = {
        course: {
            id: 1,
            title: "",
            steps: []
        },
        currentStep: null
    };

    componentDidMount() {
        this.getCourse(this.state.course.id);
    }

    editStep = (index, data) => {
        post(`/courses/${this.state.course.id}/steps/${index}/edit`, {edit: data}).then(() => {

        });
    };

    getCourse = (id) => {
        get(`/courses/${id}`).then((response) => {
            this.setState({
                course: {
                    id: id,
                    title: response.data.name,
                    steps: response.data.steps

                },
                currentStep: response.data.steps[response.data.steps.length - 1]
            });
            console.log(response.data.steps[response.data.steps.length - 1]);
        })
    };

    addStep = (type) => {
        post(`/courses/${this.state.course.id}/steps/create`, {type: type}).then((response) => {
            const steps = this.state.course.steps;
            const step = {
                index: response.data.index,
                text: "",
                type: type
            };

            steps.push(step);
            this.setState({
                course: {
                    steps: steps,
                    ...this.state.course
                },
                currentStep: step,
            });
        });
    };

    handleChangeName = (i, index, value) => {
        this.editStep(index, {name: value});
        const steps = this.state.course.steps;
        steps[i] = {
            index: index,
            text: value
        };
        this.setState({
            course: {
                steps: steps,
                ...this.state.course
            }
        })

    };


    onChangeVideoUrl = (step, url) => {
        this.editStep(step.index, {video_url: url});
        let newStep = null;
        const steps = this.state.course.steps.map(s => {
            if (s.index === step.index) {
                newStep = {
                    video_url: url,
                    ...step
                };
                return newStep;
            } else {
                return step
            }
        });
        this.setState({
            course: {
                steps: steps,
                ...this.state.course
            },
            currentStep: newStep
        })

    };

    onChangeUrl = (step, url) => {
        this.editStep(step.index, {video_url: url});
        let newStep = null;
        const steps = this.state.course.steps.map(s => {
            if (s.index === step.index) {
                newStep = {
                    video_url: url,
                    ...step
                };
                return newStep;
            } else {
                return step
            }
        });
        this.setState({
            course: {
                steps: steps,
                ...this.state.course
            },
            currentStep: newStep
        })
    };

    onChangeDescription = (step, description) => {
       this.editStep(step.index, {description: description});
      /*  let newStep = null;
        const steps = this.state.course.steps.map(s => {
            if (s.index === step.index) {
                newStep = {
                    description: description,
                    ...step
                };
                return newStep;
            } else {
                return step;
            }
        });
        this.setState({
            course: {
                steps: steps,
                ...this.state.course
            },
            currentStep: newStep
        })*/
    };

    onSelectStep = (step) => {
        this.setState({
            currentStep: step
        })
    };

    render() {

        return <div style={{marginLeft: "50px", marginRight: "50px", marginTop: "5px", height: "50%"}}>
            <div style={{paddingTop: "50px"}}>
                <Input placeholder="Name of course" style={{
                    fontSize: "20pt", height: "80px", width: "20%",
                    backgroundColor: "rgba(0,0,0,0)", color: "white", border: "0px"
                }}/>
            </div>
            {
                this.state.course.steps.length === 0 ?
                    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", height: "100%"}}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <h1 style={{width: "1000px", color: "white"}}>
                                To get started, click on the plus button to add a lesson to your course</h1>
                        </div>
                    </div> : <div>
                    <Timeline editable={true} steps={this.state.course.steps}
                              onChangeName={this.handleChangeName} onSelectStep={this.onSelectStep}/>
                    <Card style={{
                        backgroundColor: "white", height: "800px", width: "70%", margin: "100px auto", color: "black",

                        border: "0px"
                    }}>
                        <CardBody style={{border: "0px"}}>
                            {
                                this.state.currentStep === null ?
                                    <div />
                                    :
                                    <div>
                                        {(() => {
                                            switch (this.state.currentStep.type) {
                                                case 'exercise':
                                                    return <div></div>;
                                                case 'video':
                                                    return <AddVideo step={this.state.currentStep}
                                                                     onChangeUrl={this.onChangeVideoUrl}
                                                    onChangeDescription={this.onChangeDescription}/>;
                                                 case 'iframe':
                                                    return <AIframe step={this.state.currentStep}
                                                    onChangeDescription={this.onChangeDescription}/>;

                                                default:
                                                    return <div>Oogyboog</div>;
                                            }
                                        })()}
                                    </div>
                            }


                        </CardBody>
                    </Card></div>
            }

            <div style={{
                position: "absolute", right: "100px", bottom: "50px",
                backgroundColor: "white",
                flexDirection: "column", color: "rgb(58, 193, 98)"
            }}>
                <Container>
                    <Button
                        onClick={() => this.addStep("video")}
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
                        onClick={() => this.addStep("iframe")}
                        tooltip="Add Virtual Environment (VM)"
                        icon="fa fa-desktop"
                        styles={{backgroundColor: "purple", color: "red"}}
                        className="fab-item btn btn-link btn-lg text-white"/>
                    <Button
                        icon="fa fa-plus"
                        rotate={true}
                        styles={{backgroundColor: "#2d88e6", color: "white"}}
                    />
                </Container>
                {/*<BootstrapButton >Done</BootstrapButton>*/}
            </div>


        </div>;
    }
}