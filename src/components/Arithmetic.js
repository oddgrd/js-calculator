import React from "react";

function Arithmetic({
  id,
  input,
  setInput,
  setCalculation,
  calculation,
  total,
}) {
  const symbol =
    id === "add"
      ? "+"
      : id === "subtract"
      ? "-"
      : id === "multiply"
      ? "x"
      : id === "divide"
      ? "/"
      : null;
  const handleClick = (op) => {
    if (input === "0") {
      setInput(op);
      setCalculation(op);
    } else if (input.toString() === total.toString()) {
      setInput(op);
      setCalculation(total.concat(op));
    } else {
      setCalculation(calculation.concat(op));
      setInput(op);
    }
  };
  return (
    <button
      id={id}
      className="operator"
      style={{ gridArea: `${id}` }}
      onClick={() => handleClick(symbol)}
    >
      {symbol}
    </button>
  );
}

export default Arithmetic;
