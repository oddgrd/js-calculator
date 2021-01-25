import React from "react";

function Number({
  id,
  number,
  input,
  setInput,
  setCalculation,
  calculation,
  total,
  setPrev,
  setTotal,
}) {
  const handleClick = (num) => {
    if (input.length >= 24 || calculation.length >= 34) {
      setInput("     DIGIT LIMIT MET    ");
    } else {
      if (!(num === "." && input.indexOf(".") !== -1)) {
        if (input === "0" && num !== ".") {
          setInput(num);
          setCalculation(num);
        } else if (input === total && num !== ".") {
          setInput(num);
          setCalculation(num);
          setTotal("");
        } else {
          setInput(input.concat(num));
          setCalculation(calculation.concat(num));
        }
      }
      setPrev(num);
    }
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
