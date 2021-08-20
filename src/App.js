import React, { useState } from "react";
import "./App.css";
import { EditorState } from "draft-js";
import phone from "./gallery/image.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Editor from "./component/Editor";
function App() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [phoneState, setPhoneState] = useState(EditorState.createEmpty());

  const onInputChange = (input) => {
    setEditorState(input);
  };

  return (
    <div className="App">
      <div className="ui-container">
        <div className="editor-container">
          <div className="d-flex flex-column align-items-start">
            <span className="heading">Customisation</span>
            <span className="mt-2 mb-5">The text will reflect mobile view</span>

            <Editor
              editorState={editorState}
              onInputChange={(editor) => onInputChange(editor)}
            />

            <button
              className="py-1 px-3 mt-5 publish-btn"
              onClick={() => setPhoneState(editorState)}
            >
              Publish &gt;
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center mobile-container">
          <img src={phone} alt="Phone" className="phone" />
          <div className="mobile-view">
            <div className="mobile-view-inner">
              <span className="text-heading">Text</span>
              <Editor editorState={phoneState} toolBar={true} read={true} />
            </div>
          </div>
          <div className="phone-layout-container">
            <Editor editorState={phoneState} toolBar={true} read={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
