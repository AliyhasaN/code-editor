import React from "react";
import Editor from "./Editor";

const Left = ({ html, css, js, setHtml, setCss, setJs }) => {
  return (
    <div className="col-md-4 px-0 bg-dark position-fixed left-0 top-0 h-100 text-white">
      <Editor title={"html"} lang={html} setLang={setHtml} />
      <Editor title={"css"} lang={css} setLang={setCss} />
      <Editor title={"javascript"} lang={js} setLang={setJs} />
    </div>
  );
};

export default Left;
