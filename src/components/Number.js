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
  prev,
}) {
  const handleClick = (num) => {
    if (input.length >= 24) {
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
        } else if (/[+x/-]/.test(prev) && num === ".") {
          setInput(input.concat("0."));
          setCalculation(calculation.concat("0."));
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
