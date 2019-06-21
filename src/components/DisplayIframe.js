import React, {Component} from 'react'
import {Card, CardBody, CardHeader, Input, Button as BootstrapButton} from "reactstrap";
import {Timeline} from "./Timeline";
import {Container, Button, Link} from 'react-floating-action-button';
import {AddVideo} from "./AddVideo";
import {get, post} from "../actions";
import {AIframe} from "./AIframe";


export class DisplayIframe extends Component {

    render() {
        return <div >
            <h2 style={{textAlign: "left"}} >
                <div dangerouslySetInnerHTML={{ __html: this.props.step.description }} />
            </h2>
            <iframe style={{marginTop: "10px", width: "100%", height: "600px"}}
                    src={this.props.step.iframe_url} />
        </div>;
    }
}
