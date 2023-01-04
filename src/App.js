import React, { useState } from "react";
import "./App.css";
import Left from "./components/Left";
import Right from "./components/Right";

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  return (
    <div className="container-fluid px-0">
      <div className="row">
        {/* left */}
        <Left
          html={html}
          setHtml={setHtml}
          css={css}
          setCss={setCss}
          js={js}
          setJs={setJs}
        />
        {/* right */}
        <Right html={html} css={css} js={js} />
      </div>
    </div>
  );
};

export default App;
