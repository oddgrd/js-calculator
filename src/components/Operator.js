import React from "react";
const { evaluate } = require("mathjs");

function Operator({
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
      let problem = calculation.replace(/x/g, "*");
      if (problem && /[+*/-]/.test(problem.slice(problem.length - 1))) {
        problem = problem.slice(0, problem.length - 1);
      }
      if (problem.indexOf("=") === -1 && problem) {
        const result = evaluate(problem).toString();
        setTotal(result);
        setInput(result);
        setCalculation(calculation.concat("=", result));
        setPrev("");
        console.log(result);
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
