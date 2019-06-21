import React, {Component} from 'react'

import {Container, Button, Link} from 'react-floating-action-button';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/python';
import 'brace/theme/monokai';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';
import {Input} from "reactstrap";



export class ExercizeEditor extends Component {

    render() {
        return <div >
            <h5 style={{textAlign: "left", marginBottom: "30px"}}>Describe what the user should do</h5>

            <FroalaEditorComponent tag='textarea'
                                       model={this.props.step.description}
                onModelChange={(modelNew) => this.props.onChangeDescription(this.props.step, modelNew)} />

            <h5 style={{textAlign: "left", marginTop: "40px", marginBottom: "30px"}}>What's the expected output?</h5>
            <Input placeholder="Expected Output"
                   onChange={(e) => this.props.onChangeExpectedOutput(this.props.step, e.target.value)}
                   value={this.props.step.expected_stdout}
            />

            <h5 style={{textAlign: "left", marginTop: "40px", marginBottom: "30px"}}>Create boilerplate code</h5>

                    <AceEditor
                        style={
                            {width: "100%"}
                        }
  placeholder="Placeholder Text"
  mode="python"
  theme="monokai"
  name="blah2"
  onLoad={this.onLoad}
  onChange={(newValue) => this.props.onChangeBoilerplate(this.props.step, newValue)}
  fontSize={20}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={this.props.step.boilerplate === undefined || this.props.step.boilerplate === null ? "" : this.props.step.boilerplate}
  setOptions={{
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
  }}/>
           ,
        </div>;
    }
}