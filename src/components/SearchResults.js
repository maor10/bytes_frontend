import React, {Component} from 'react'
import {Input} from "reactstrap";
import {get} from "../actions";


export class SearchResults extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        get(`/courses/search/${this.props.query}`).then((response) => {
            this.setState({
                results: response.data,
            });
        });
    }

    render() {
        return <div style={{marginTop: "50px"}}>
            <div style={{
                width: "100%", backgroundColor: "rgb(58, 193, 98)", height: "2px",
                display: "flex", justifyContent: "space-between"
            }}>
                {
                    this.state.results.map((result, i) => <div>
                            <div>result.name</div>
                        </div>
                    )
                }

            </div>

        </div>;
    }
}