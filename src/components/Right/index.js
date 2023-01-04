import React from "react";

const Right = ({ html, css, js }) => {
  const srcDoc = `<html>
    <head>
        <style>
            ${css}
        </style>
    </head>
    <body>
    ${html}
    <script>
        ${js}
    </script>
    </body>

    </html>`;
  return (
    <div className="col-md-10 h-100 px-0 position-fixed top-0 offset-md-4">
      <iframe
        srcDoc={srcDoc}
        title={"coded html"}
        className="col-md-12 w-100 h-100 px-0"
      ></iframe>
    </div>
  );
};

export default Right;
