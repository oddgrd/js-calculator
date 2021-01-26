import { React, useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Number from "./components/Number";
import Operators from "./components/Operators";
const numbers = [
  ["seven", "7"],
  ["eight", "8"],
  ["nine", "9"],
  ["four", "4"],
  ["five", "5"],
  ["six", "6"],
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
  ["zero", "0"],
  ["decimal", "."],
];

function App() {
  const [calculation, setCalculation] = useState("");
  const [input, setInput] = useState("0");
  const [total, setTotal] = useState("");
  const [prev, setPrev] = useState("");

  return (
    <div className="App">
      <div className="calc-container">
        <Display input={input} calculation={calculation} />
        <div className="grid-container">
          {numbers.map((num, index) => {
            return (
              <Number
                key={index}
                id={num[0]}
                number={num[1]}
                input={input}
                setInput={setInput}
                calculation={calculation}
                setCalculation={setCalculation}
                setTotal={setTotal}
                total={total}
                prev={prev}
                setPrev={setPrev}
              />
            );
          })}
          <Operators
            input={input}
            setInput={setInput}
            calculation={calculation}
            setCalculation={setCalculation}
            total={total}
            setTotal={setTotal}
            prev={prev}
            setPrev={setPrev}
          />
        </div>
        <h5 className="creator">
          <a href="https://github.com/oddgrd" target="_blank" rel="noreferrer">
            by Oddgrd
          </a>
        </h5>
      </div>
    </div>
  );
}

export default App;
