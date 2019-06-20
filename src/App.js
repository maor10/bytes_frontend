import React from 'react';
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


const App = () => {
  return (
    <div className="App" style={{fontFamily: "GothamRounded-Medium", height: "100%"}}>
        <BytesNavbar />
        <div style={{ backgroundColor: "rgb(95, 207, 128)", height: "calc(100% - 84px)" }}>
          <CreateCourse course={COURSE} />
        </div>

    </div>
  );
};


export default App;
//            <CreateCourse course={COURSE} />
{/*<div style={{ backgroundColor: "rgb(95, 207, 128)", height: "calc(100% - 84px)" }}>*/}

          {/*</div>*/}