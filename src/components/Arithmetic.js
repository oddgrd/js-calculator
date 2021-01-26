import React from "react";

function Arithmetic({
  id,
  input,
  setInput,
  setCalculation,
  calculation,
  total,
  prev,
  setPrev,
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
      //see if last char is operator and current char isnt "-"
    } else if (/[+x/-]/.test(prev) && !/-/.test(op)) {
      setInput(op);
      //see if last two chars are operators (in case of a swapped minus)
      if (!/\d/.test(calculation.charAt(calculation.length - 2))) {
        setCalculation(calculation.slice(0, calculation.length - 2).concat(op));
      } else {
        setCalculation(calculation.slice(0, calculation.length - 1).concat(op));
      }
    } else {
      setCalculation(calculation.concat(op));
      setInput(op);
    }
    setPrev(op);
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
