import React from "react";
import Arithmetic from "./Arithmetic";
import FunctionalOp from "./FunctionalOp";
const arithmetics = ["add", "subtract", "multiply", "divide"];
const ops = ["equals", "clear"];
function Operators({
  input,
  setInput,
  setCalculation,
  calculation,
  total,
  setTotal,
  prev,
  setPrev,
}) {
  return (
    <>
      {arithmetics.map((a, index) => {
        return (
          <Arithmetic
            id={a}
            key={index}
            input={input}
            setInput={setInput}
            setCalculation={setCalculation}
            calculation={calculation}
            total={total}
            prev={prev}
            setPrev={setPrev}
          />
        );
      })}
      {ops.map((op, index) => {
        return (
          <FunctionalOp
            id={op}
            key={index}
            setInput={setInput}
            setCalculation={setCalculation}
            calculation={calculation}
            total={total}
            setTotal={setTotal}
            setPrev={setPrev}
          />
        );
      })}
    </>
  );
}

export default Operators;
