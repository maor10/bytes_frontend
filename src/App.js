import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Course} from "./components/Course";
import {CreateCourse} from './components/CreateCourse'
import {BytesNavbar} from "./components/BytesNavbar";
import 'font-awesome/css/font-awesome.css'
import {Landing} from "./components/Landing";


const COURSE = {
    title: "",
    steps: []
};


class App extends Component {

    state = {
        page: "landing"
    };

    onCreateCourse = () => {
        this.setState({
           page: "create"
        });
    };

    render() {
        const page = this.state.page;
        return (
            <div className="App" style={{fontFamily: "GothamRounded-Medium", height: "100%"}}>
                <div style={{height: "100%"}}>
                    {(() => {
                        switch (page) {
                            case 'create':
                                return <div style={{height: "100%"}}>
                                    <BytesNavbar />
                                    <div style={{backgroundColor: "rgb(95, 207, 128)", height: "calc(100% - 84px)"}}>
                                        <CreateCourse course={COURSE}/>
                                    </div>
                                </div>;
                            case 'landing':
                                return <div style={{backgroundColor: "rgb(95, 207, 128)", height: "100%"}}>
                                    <Landing onCreate={() => this.setState({page: "create"})}
                                             onView={() => this.setState({page: "view"})}
                                             onCreateCourse={this.onCreateCourse}
                                    />
                                </div>;
                            case 'view':
                                return <div style={{height: "100%"}}>
                                    <BytesNavbar />
                                    <div style={{backgroundColor: "rgb(95, 207, 128)", height: "calc(100% - 84px)"}}>
                                        <Course />
                                    </div>
                                </div>;
                            case 'search':
                                return <div style={{height: "100%"}}>
                                    <BytesNavbar />
                                    <div style={{backgroundColor: "rgb(95, 207, 128)", height: "calc(100% - 84px)"}}>
                                        {/*<SearchResults/>*/}
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
//            <CreateCourse course={COURSE} />
{/*<div style={{ backgroundColor: "rgb(95, 207, 128)", height: "calc(100% - 84px)" }}>*/}

          {/*</div>*/}