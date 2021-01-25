import React from "react";

function Number({
  id,
  number,
  input,
  setInput,
  setCalculation,
  calculation,
  total,
  prev,
  setPrev,
  setTotal,
}) {
  const handleClick = (num) => {
    if (!(num === "." && input.indexOf(".") !== -1)) {
      if (input === "0") {
        setInput(num);
        setCalculation(num);
      } else if (input === total && num !== ".") {
        console.log("pls");
        setInput(num);
        setCalculation(num);
        setTotal("");
      } else {
        console.log("this?");
        setInput(input.concat(num));
        setCalculation(calculation.concat(num));
      }
    }
    setPrev(num);
  };
  return (
    <button
      id={id}
      className="number"
      onClick={() => handleClick(number)}
      style={{ gridArea: `${id}` }}
    >
      {number}
    </button>
  );
}

export default Number;
