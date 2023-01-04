import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/theme/material.css";

const Editor = ({ title, lang, setLang }) => {
  const [opened, setOpened] = useState(true);
  return (
    <div
      className="editor col-md-12 w-100 d-flex flex-column position-relative"
      style={{ height: opened ? "auto" : "41px", overflow: "hidden" }}
    >
      <div
        onClick={() => setOpened(!opened)}
        className="w-100 d-flex position-sticky top-0 py-2 shadow border-bottom text-dark  align-items-center"
        style={{
          zIndex: 9999,
          cursor: "pointer",
          background: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <h5
          className="h-100 text-capitalize font-weight-bolder text-center my-0"
          style={{ width: "100%" }}
        >
          {title}
        </h5>
      </div>
      <CodeMirror
        style={[{ margin: "1px 5px", overflow: "hidden" }]}
        onBeforeChange={(editor, data, value) => setLang(value)}
        options={{
          mode: title === "html" ? "xml" : title,
          theme: "material",
          lineNumbers: true,
          inputStyle: "textarea",
          autofocus: true,
          lineWrapping: true,
        }}
        value={lang}
        className="bg-white"
      />
    </div>
  );
};

export default Editor;
