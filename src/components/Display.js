import React from "react";

function Display({ input, calculation }) {
  return (
    <div id="displayy">
      <p className="cal">{calculation}</p>
      <p className="inp" id="display">
        {input}
      </p>
    </div>
  );
}

export default Display;
