import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center", fontSize: "24px" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
