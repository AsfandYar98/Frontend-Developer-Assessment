import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./editor.css";
const EditorComponent = ({ editorState, onInputChange, toolBar, read }) => {
  const editorClassName = read ? "" : "editorClassName";
  return (
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName={editorClassName}
      toolbarHidden={toolBar}
      readOnly={read}
      onEditorStateChange={(editor) => {
        toolBar ? console.log(editor) : onInputChange(editor);
      }}
      // onEditorStateChange={(editor) => {
      //   onInputChange(editor);
      // }}
    />
  );
};

export default EditorComponent;
