import React, {Component} from 'react'
import ReactPlayer from 'react-player'

export class Video extends Component {

    render() {
        console.log(this.props.url);
        return <div>
            <iframe style={{width: "100%", height: "600px"}}
                    src={this.props.url}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
        </div>;
    }
}

/**
 * Created by maorkern on 6/21/19.
 */
