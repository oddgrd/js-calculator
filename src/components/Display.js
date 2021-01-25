import React from "react";

function Display({ input, calculation }) {
  return (
    <div className="display-div">
      <p className="cal">{calculation}</p>
      <p className="inp" id="display">
        {input}
      </p>
    </div>
  );
}

export default Display;
