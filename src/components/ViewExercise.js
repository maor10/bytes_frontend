import React, {Component} from 'react'

import {Container, Button, Link} from 'react-floating-action-button';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/python';
import 'brace/theme/monokai';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import {Button as BootstrapButton} from "reactstrap";
import {post} from "../actions";

import SweetAlert from 'sweetalert2-react';



export class ViewExercise extends Component {

    state = {
        code: null,
        showAlert: false
    };

    onChange = (code) => {
        this.setState({
            code
        })
    };

    executeCode = () => {
      post("/exec", {
          code: this.state.code
      }).then((response) => {
          if (response.data === this.props.step.expected_stdout) {

          }
      })
    };

    render() {
        return <div >
            <h2 style={{textAlign: "left"}}>
                <div dangerouslySetInnerHTML={{__html: this.props.step.description}}/>
            </h2>

            <AceEditor
                style={
                    {width: "100%"}
                }
                placeholder="Placeholder Text"
                mode="python"
                theme="monokai"
                name="blah2"
                onLoad={this.onLoad}
                onChange={this.onChange}
                fontSize={20}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={this.state.code === null ? this.state.code : this.props.step.boilerplate}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}
            />
            <div style={{display: "flex", marginTop: "10px"}}>
                <BootstrapButton color="success" onClick={this.executeCode}>Run</BootstrapButton>
            </div>
            <SweetAlert
                show={this.state.showAlert}
                title="Demo"
                text="SweetAlert in React"
                onConfirm={() => this.setState({ showAlert: false })}
              />
        </div>;
    }
}
