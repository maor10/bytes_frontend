import React, {Component} from 'react'
import 'brace/theme/monokai';
import ReactPlayer from 'react-player'

export class Video extends Component {

    render() {
        console.log(this.props.url);
        return <div>
            <iframe width="926"
                    height="521"
                    src={this.props.url}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
        </div>;
    }
}/**
 * Created by maorkern on 6/21/19.
 */
