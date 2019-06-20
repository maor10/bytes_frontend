import React, {Component} from 'react'
import {Card, CardBody, CardHeader} from "reactstrap";
import AceEditor from 'react-ace';
import 'brace/theme/monokai';
import {Timeline} from "./Timeline";


const STEPS = [
    {
        text: "Print \"Hello World\""
    },
    {
        text: "Add two numbers"
    },
    {
        text: "Flirt with your teacher"
    },
    {
        text: "Print \"Hello World\""
    },
    {
        text: "Add two numbers"
    },
    {
        text: "Flirt with your teacher"
    },
];


export class Course extends Component {

    styles = {
        courseTitle: {
            marginLeft: "40px",
            textAlign: "left",
            color: "white",
            paddingTop: "50px"
        },
        circle: {
            width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "white",
            border: "1px solid rgb(58, 193, 98)", marginTop: "-8px"
        }
    };

    render() {
        return <div style={{marginLeft: "50px", marginRight: "50px", marginTop: "5px"}}>
                <h3 style={this.styles.courseTitle}>Mastering the Basics</h3>
                <Timeline steps={STEPS}/>

            <Card style={{backgroundColor: "white",
                marginTop: "100px", height: "800px", width: "70%", margin: "100px auto", color: "black",
                padding: "50px",
            border: "0px"}}>
                <CardBody style={{ border: "0px" }}>
                    <h2 style={{textAlign: "left"}}>
                        Ok, let's start simple. Try putting "print 'Hello World'" within the code editor, and click go
                    </h2>
                    <AceEditor
                        style={{width: "100%", marginTop: "50px"}}
  placeholder="Put your code here!"
  mode="python"
  theme="monokai"
  name="blah2"
  fontSize={30}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={``}
  setOptions={{
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
  }}/>

                </CardBody>
            </Card>

        </div>;
    }
}
