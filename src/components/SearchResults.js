import React, {Component} from 'react'
import {get} from "../actions";
import {Card, CardBody, CardTitle, CardHeader, CardText, Button} from "reactstrap";


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
        return <div style={{padding: "13px", textAlign: 'left', display: 'flex'}}>
            {
                this.state.results.map((result) => <div style={{padding: '12px'}}>
                        <Card>
                            <CardHeader>{result.name}</CardHeader>
                            <CardBody>
                                <CardTitle>{result.num_students} enrolling</CardTitle>
                                <CardText>This is the course's description</CardText>
                                <Button color="primary">Enroll</Button>
                            </CardBody>
                        </Card>
                    </div>
                )
            }
        </div>;
    }
}