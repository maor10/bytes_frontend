import React, {Component} from 'react'
import {Input} from "reactstrap";


export class Timeline extends Component {

    styles = {
        circle: {
            width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "white",
            border: "1px solid rgb(58, 193, 98)", marginTop: "-8px", cursor: "pointer"
        }
    };

    render() {
        return <div style={{marginTop: "50px"}}>
            <div style={{
                width: "100%", backgroundColor: "rgb(58, 193, 98)", height: "2px",
                display: "flex", justifyContent: "space-between"
            }}>
                {
                    this.props.steps.map((step, i) => <div>

                            <div style={{display: "flex", justifyContent: "center"}}
                                 onClick={() => this.props.onSelectStep(step)}>
                                <div  style={this.styles.circle}/>
                            </div>
                            <div style={{
                                color: "white",
                                marginTop: "5px",
                                fontSize: step === this.props.currentStep ? "20pt" : "10pt"
                            }}>
                                {
                                    this.props.editable ?
                                        <div>{i + 1} <Input value={step.text} placeholder="Step name here" onChange={
                                            (e) => this.props.onChangeName(i, step.index, e.target.value)
                                        } /></div>:
                                        step.text
                                }
                            </div>
                        </div>
                    )
                }

            </div>

        </div>;
    }
}