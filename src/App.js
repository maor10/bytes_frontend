import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Course} from "./components/Course";
import {CreateCourse} from './components/CreateCourse'
import {BytesNavbar} from "./components/BytesNavbar";
import 'font-awesome/css/font-awesome.css'
import {Landing} from "./components/Landing";
import {SearchResults} from "./components/SearchResults";

const COURSE = {
    title: "",
    steps: []
};


class App extends Component {

    state = {
        page: "search",
        query: ''
    };

    onCreateCourse = () => {
        this.setState({
            page: "create"
        });
    };

    onQueryChange(e) {
        this.setState({query: e.target.value});
    }

    render() {
        const page = this.state.page;
        return (
            <div className="App" style={{fontFamily: "GothamRounded-Medium", height: "100%"}}>
                <div style={{height: "100%"}}>
                    {(() => {
                        switch (page) {
                            case 'create':
                                return <div style={{height: "100%"}}>
                                    <BytesNavbar/>
                                    <div style={{backgroundColor: "rgb(95, 207, 128)", height: "calc(100% - 84px)"}}>
                                        <CreateCourse course={COURSE}/>
                                    </div>
                                </div>;
                            case 'landing':
                                return <div style={{backgroundColor: "rgb(95, 207, 128)", height: "100%"}}>
                                    <Landing onCreate={() => this.setState({page: "create"})}
                                             onView={() => this.setState({page: "view"})}
                                             onCreateCourse={this.onCreateCourse} onQueryChange={this.onQueryChange}
                                    />
                                </div>;
                            case 'view':
                                return <div style={{height: "100%"}}>
                                    <BytesNavbar/>
                                    <div style={{backgroundColor: "rgb(95, 207, 128)", height: "calc(100% - 84px)"}}>
                                        <Course/>
                                    </div>
                                </div>;
                            case 'search':
                                return <div style={{height: "100%"}}>
                                    <BytesNavbar/>
                                    <div style={{backgroundColor: "rgb(95, 207, 128)", height: "calc(100% - 84px)"}}>
                                        <SearchResults query={this.state.query}/>
                                    </div>
                                </div>;
                            default:
                                return "";
                        }
                    })()}
                </div>


            </div>
        );
    }
};


export default App;
