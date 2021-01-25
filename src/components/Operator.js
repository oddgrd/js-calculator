import React from "react";
const { evaluate } = require("mathjs");

function Operator({
  id,
  setInput,
  setCalculation,
  calculation,
  total,
  setTotal,
}) {
  const symbol = id === "equals" ? "=" : "AC";
  const handleClick = () => {
    if (id === "clear") {
      setInput("0");
      setCalculation("");
      if (total) {
        setTotal("");
      }
    } else {
      const problem = calculation.replace(/x/g, "*");
      if (problem.indexOf("=") === -1 && problem) {
        const result = evaluate(problem).toString();
        console.log(result);
        setTotal(result);
        setInput(result);
        setCalculation(calculation.concat("=", result));
      }
    }
  };
  // const parseProblem = (arr) => {
  //   const copy = [...arr];
  //   const problem = copy.forEach(function(el) {

  //   });

  // }
  return (
    <button
      id={id}
      className="operator"
      style={{ gridArea: `${id}` }}
      onClick={() => handleClick()}
    >
      {symbol}
    </button>
  );
}

export default Operator;
