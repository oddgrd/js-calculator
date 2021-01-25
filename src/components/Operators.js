import React from "react";
import Arithmetic from "./Arithmetic";
import Operator from "./Operator";
const arithmetics = ["add", "subtract", "multiply", "divide"];
function Operators({
  input,
  setInput,
  setCalculation,
  calculation,
  total,
  setTotal,
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
          />
        );
      })}
      <Operator
        id="equals"
        setInput={setInput}
        setCalculation={setCalculation}
        calculation={calculation}
        total={total}
        setTotal={setTotal}
      />
      <Operator
        id="clear"
        setInput={setInput}
        setCalculation={setCalculation}
        calculation={calculation}
        setTotal={setTotal}
      />
    </>
  );
}

export default Operators;
