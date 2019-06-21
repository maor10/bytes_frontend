import React, {Component} from 'react'
// Require Editor JS files.
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';
import {Video} from "./Video";

export class AIframe extends Component {

    render() {
        return <div>
            <div>
                <h3 style={{textAlign: "left", marginBottom: "20px"}}>Put a short description of what the user should do in his virtual environment</h3>
                <FroalaEditorComponent tag='textarea'
                                       model={this.props.step.description}
                onModelChange={(modelNew) => this.props.onChangeDescription(this.props.step, modelNew)}
                />
            </div>
        </div>;
    }
}