import React from "react";

function Operator({ id, input, setInput, setCalculation, calculation }) {
  const symbol =
    id === "add"
      ? "+"
      : id === "subtract"
      ? "-"
      : id === "multiply"
      ? "x"
      : id === "divide"
      ? "/"
      : id === "decimal"
      ? "."
      : id === "equals"
      ? "="
      : id === "clear"
      ? "AC"
      : null;
  const handleClick = (sym) => {
    if (input[0] === 0) {
      setInput([sym]);
      setCalculation([sym]);
    } else {
      setInput(input.concat(sym));
      setCalculation(calculation.concat(sym));
      setInput([sym]);
    }
  };
  return (
    <div id={id} className="operator" onClick={() => handleClick(symbol)}>
      {symbol}
    </div>
  );
}

export default Operator;
