import React, {Component} from 'react'
import 'brace/theme/monokai';
import {Input} from "reactstrap";
import {Video} from "./Video";


export class AddVideo extends Component {


    translateUrlToEmbeded = (url) => {

        const partTwo = url.split("v=")[1];
        const newUrl = partTwo.split("&")[0];
        return "https://www.youtube.com/embed/" + newUrl;
    };


    changeUrl = (event) => {

        let newUrl = null;
        try {
            newUrl = this.translateUrlToEmbeded(event.target.value)
        } catch (e) {
            return
        }
        this.props.onChangeUrl(this.props.step, newUrl);
    };

    render() {
        return <div>
            <Input value={this.props.step.video_url} placeholder="Put video URL Here"
                   onChange={(e) => this.changeUrl(e)} />

            <div style={{marginTop: "10px"}}>
            {
                this.props.step.video_url === undefined ?
                    <div /> : <Video url={this.props.step.video_url} />

            }
            </div>

        </div>;
    }
}