import React, {Component} from 'react'
import {Input} from "reactstrap";


export class Timeline extends Component {

    styles = {
        circle: {
            width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "white",
            border: "1px solid rgb(58, 193, 98)", marginTop: "-8px"
        }
    };

    render() {
        console.log(this.props.steps);
        return <div style={{marginTop: "50px"}}>
            <div style={{
                width: "100%", backgroundColor: "rgb(58, 193, 98)", height: "2px",
                display: "flex", justifyContent: "space-between"
            }}>
                {
                    this.props.steps.map((step, i) => <div>

                            <div style={{display: "flex", justifyContent: "center"}}>
                                <div style={this.styles.circle}/>
                            </div>
                            <div style={{
                                color: "white",
                                marginTop: "5px",
                                fontSize: i === 0 ? "20pt" : "10pt"
                            }}>
                                {
                                    this.props.editable ?
                                        <Input value={step.text} placeholder="Step name here" onChange={
                                            (e) => this.props.onChangeName(i, step.index, e.target.value)
                                        } />:
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