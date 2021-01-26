import React from "react";
const { evaluate, round } = require("mathjs");

function FunctionalOp({
  id,
  setInput,
  setCalculation,
  calculation,
  total,
  setTotal,
  setPrev,
}) {
  const symbol = id === "equals" ? "=" : "AC";
  const handleClick = () => {
    if (id === "clear") {
      setInput("0");
      setCalculation("");
      setPrev("");
      if (total) {
        setTotal("");
      }
    } else {
      if (calculation && !/[/x]/.test(calculation.charAt(0))) {
        let problem = calculation.replace(/x/g, "*");
        if (problem && /[+*/-]/.test(problem.slice(problem.length - 1))) {
          problem = problem.slice(0, problem.length - 1);
        } else {
          if (!/=/.test(problem)) {
            const result = round(evaluate(problem), 4).toString();
            setTotal(result);
            setInput(result);
            setCalculation(calculation.concat("=", result));
            setPrev("");
          }
        }
      }
    }
  };

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

export default FunctionalOp;
