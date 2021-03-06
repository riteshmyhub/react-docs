import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function ReactCode(props) {
  const uiStyles = {
    background: "#1976D2",
    padding: "5px",
    color: "white",
  };

  return (
    <>
      <div>
        <div style={uiStyles}>
          {props.file}.{props.dot}
        </div>
        <SyntaxHighlighter language={props.dot} style={docco}>
          {props.code}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
